(function () {
    "use strict";

    function normalizeText(value) {
        return (value || "").toLowerCase().replace(/\s+/g, "");
    }

    function fuzzyMatch(text, query) {
        var normalizedText = normalizeText(text);
        var normalizedQuery = normalizeText(query);
        var queryIndex = 0;
        var textIndex;

        if (!normalizedQuery) {
            return false;
        }

        if (normalizedText.indexOf(normalizedQuery) !== -1) {
            return true;
        }

        for (textIndex = 0; textIndex < normalizedText.length; textIndex += 1) {
            if (normalizedText[textIndex] === normalizedQuery[queryIndex]) {
                queryIndex += 1;
            }
            if (queryIndex === normalizedQuery.length) {
                return true;
            }
        }

        return false;
    }

    function getMenuPath(link) {
        var parts = [];
        var current = link;
        var parentList;
        var parentItem;
        var parentLink;

        parts.unshift(link.textContent.trim());
        parentList = link.closest("ul");

        while (parentList) {
            parentItem = parentList.parentElement;
            if (!parentItem) {
                break;
            }

            parentLink = parentItem.querySelector(":scope > a.reference.internal");
            if (parentLink) {
                parts.unshift(parentLink.textContent.trim());
            }

            current = parentItem;
            parentList = current.parentElement ? current.parentElement.closest("ul") : null;
        }

        return parts.filter(Boolean).join(" / ");
    }

    function collectMenuItems() {
        var links = document.querySelectorAll(".wy-menu-vertical a.reference.internal");
        var seen = {};
        var items = [];

        Array.prototype.forEach.call(links, function (link) {
            var href = link.getAttribute("href");
            var title = link.textContent.trim();
            var key = href + "|" + title;

            if (!href || !title || seen[key]) {
                return;
            }

            seen[key] = true;
            items.push({
                title: title,
                path: getMenuPath(link),
                href: href
            });
        });

        return items;
    }

    function createResultsBox(form) {
        var box = document.createElement("div");
        box.className = "menu-search-results";
        box.setAttribute("role", "listbox");
        form.appendChild(box);
        return box;
    }

    function renderResults(box, items, query) {
        var matches;

        box.innerHTML = "";

        if (!query.trim()) {
            box.classList.remove("is-visible");
            return;
        }

        matches = items.filter(function (item) {
            return fuzzyMatch(item.title, query) || fuzzyMatch(item.path, query);
        }).slice(0, 20);

        if (!matches.length) {
            box.innerHTML = '<div class="menu-search-empty">No menu results</div>';
            box.classList.add("is-visible");
            return;
        }

        matches.forEach(function (item) {
            var result = document.createElement("a");
            result.className = "menu-search-result";
            result.href = item.href;
            result.setAttribute("role", "option");

            result.innerHTML = [
                '<span class="menu-search-title"></span>',
                '<span class="menu-search-path"></span>'
            ].join("");

            result.querySelector(".menu-search-title").textContent = item.title;
            result.querySelector(".menu-search-path").textContent = item.path;
            box.appendChild(result);
        });

        box.classList.add("is-visible");
    }

    function setupMenuSearch() {
        var form = document.querySelector(".wy-side-nav-search form");
        var input = form ? form.querySelector('input[type="text"], input[name="q"]') : null;
        var items;
        var resultsBox;

        if (!form || !input) {
            return;
        }

        form.classList.add("menu-search-form");
        input.setAttribute("autocomplete", "off");
        input.setAttribute("placeholder", "Search menu");

        items = collectMenuItems();
        resultsBox = createResultsBox(form);

        input.addEventListener("input", function () {
            renderResults(resultsBox, items, input.value);
        });

        input.addEventListener("focus", function () {
            renderResults(resultsBox, items, input.value);
        });

        input.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                resultsBox.classList.remove("is-visible");
                input.blur();
            }
        });

        form.addEventListener("submit", function (event) {
            var firstResult = resultsBox.querySelector(".menu-search-result");

            event.preventDefault();

            if (firstResult) {
                window.location.href = firstResult.href;
            }
        });

        document.addEventListener("click", function (event) {
            if (!form.contains(event.target)) {
                resultsBox.classList.remove("is-visible");
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setupMenuSearch);
    } else {
        setupMenuSearch();
    }
}());
