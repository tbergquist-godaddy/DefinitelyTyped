import sanitize = require("sanitize-html");
import { Attributes, IFrame, IOptions } from "sanitize-html";

const options: IOptions = {
    allowedTags: sanitize.defaults.allowedTags.concat("h1", "h2", "img"),
    allowedAttributes: {
        a: sanitize.defaults.allowedAttributes["a"].concat("rel"),
        img: ["src", "height", "width", "alt", "style"],
    },
    allowedClasses: {
        a: ["className"],
        p: false,
        span: [/regex/],
    },
    allowedStyles: {
        "*": {
            color: [/^red$/],
            background: [/^green$/],
            "background-color": [/^#0000FF$/],
        },
    },
    allowedIframeDomains: ["zoom.us"],
    allowedIframeHostnames: ["www.youtube.com"],
    allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    transformTags: {
        a: sanitize.simpleTransform("a", { rel: "nofollow" }),
        img: (tagName: string, attribs: Attributes) => {
            const img = { tagName, attribs };
            img.attribs["alt"] = "transformed";
            return img;
        },
    },
    textFilter: (text, _) => text,
    allowIframeRelativeUrls: false,
    allowVulnerableTags: true,
    exclusiveFilter(frame: IFrame) {
        return frame.tag === "a" && !frame.text.trim();
    },
    allowedSchemesByTag: {
        a: ["http", "https"],
    },
    allowProtocolRelative: false,
    disallowedTagsMode: "escape",
    enforceHtmlBoundary: true,
    allowedScriptDomains: ["test.com"],
    allowedScriptHostnames: ["test.com"],
    nonBooleanAttributes: ["href"],
    onOpenTag: (name: string, attribs: Attributes) => {},
    onCloseTag: (name: string, isImplied: boolean) => {},
};

sanitize.defaults.allowedAttributes; // $ExpectType Record<string, AllowedAttribute[]>
sanitize.defaults.allowedSchemes; // $ExpectType string[]
sanitize.defaults.allowedSchemesAppliedToAttributes; // $ExpectType string[]
sanitize.defaults.allowedSchemesByTag; // $ExpectType { [index: string]: string[]; }
sanitize.defaults.allowedTags; // $ExpectType string[]
sanitize.defaults.allowProtocolRelative; // $ExpectType boolean
sanitize.defaults.disallowedTagsMode; // $ExpectType DisallowedTagsModes
sanitize.defaults.enforceHtmlBoundary; // $ExpectType boolean
sanitize.defaults.selfClosing; // $ExpectType string[]
sanitize.defaults.nonBooleanAttributes; // $ExpectType string[]

sanitize.options.allowedClasses; // $ExpectType { [index: string]: boolean | (string | RegExp)[]; } | undefined

const unsafe = "<div><script>alert(\"hello\");</script></div>";

let safe = sanitize(unsafe, options);

options.parser = {
    decodeEntities: true,
};

safe = sanitize(unsafe, options);

sanitize(unsafe, sanitize.defaults);

sanitize(unsafe, {
    allowedTags: false,
    allowedAttributes: false,
    nestingLimit: 6,
    parseStyleAttributes: false,
});

// ensure new DisallowedTagsModes are accepted
sanitize(unsafe, {
    disallowedTagsMode: "completelyDiscard",
});
