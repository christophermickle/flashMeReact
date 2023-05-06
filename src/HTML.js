 const HTML  =[
  {
    front: "<!-- -->",
    back: "Defines a comment in HTML, which is not displayed in the browser.",
  },
  {
    front: "<!DOCTYPE>",
    back: "Defines the document type and version of HTML.",
  },
  {
    front: "<a>",
    back: "Creates a hyperlink, which can be used to link to another document, email address, or location within the same document.",
  },
  {
    front: "<abbr>",
    back: "Indicates an abbreviation or acronym, typically providing a tooltip with the full text when hovered over.",
  },
  {
    front: "<address>",
    back: "Defines contact information for the author or owner of a document or article.",
  },
  {
    front: "<area>",
    back: "Defines an area within an image map, which can be associated with a hyperlink.",
  },
  {
    front: "<article>",
    back: "Represents a self-contained piece of content that can be independently distributed or reused, such as a news article, blog post, or comment.",
  },
  {
    front: "<aside>",
    back: "Represents content that is tangentially related to the content around it, often used for sidebars or inserts.",
  },
  {
    front: "<audio>",
    back: "Embeds a sound file or audio stream, such as music or a podcast, into a document.",
  },
  {
    front: "<b>",
    back: "Specifies bold text, often used for keywords or headings.",
  },
  {
    front: "<base>",
    back: "Specifies the base URL or target for all relative URLs in a document.",
  },
  {
    front: "<bdi>",
    back: "Isolates a span of text that may be formatted in a different direction from other text outside it, often used for bidirectional text support.",
  },
  {
    front: "<bdo>",
    back: "Overrides the current text direction, often used for mirroring or reversing text.",
  },
  {
    front: "<blockquote>",
    back: "Indicates a block of text that is a quotation, typically rendered with indented margins.",
  },
  {
    front: "<body>",
    back: "Contains the content of an HTML document, such as text, images, and links.",
  },
  {
    front: "<br>",
    back: "Inserts a line break, often used for formatting text or separating content.",
  },
  {
    front: "<button>",
    back: "Creates a clickable button, often used to submit forms or trigger actions.",
  },
  {
    front: "<canvas>",
    back: "Provides a drawing surface for JavaScript, often used for graphics or animations.",
  },
  {
    front: "<caption>",
    back: "Defines a table caption, which provides a brief description or title for a table.",
  },
  {
    front: "<cite>",
    back: "Indicates a citation or reference to another source, often rendered in italics.",
  },
  {
    front: "<code>",
    back: "Displays a block of code, often rendered in a monospaced font.",
  },
  {
    front: "<col>",
    back: "Specifies column properties for a table, often used to apply styles to multiple columns at once.",
  },
  {
    front: "<colgroup>",
    back: "Groups columns in a table, often used to apply styles or attributes to multiple columns at once.",
  },
  {
    front: "<data>",
    back: "Associates a machine-readable value with a piece of content, often used for custom data attributes.",
  },
  {
    front: "<datalist>",
    back: "Defines a list of pre-defined options for an <input> element, used to create autocomplete suggestions.",
  },
  {
    front: "<dd>",
    back: "Describes a term in a description list (<dl>), providing a definition or explanation.",
  },
  {
    front: "<del>",
    back: "Indicates deleted text, often rendered with a strikethrough effect.",
  },
  {
    front: "<details>",
    back: "Creates an interactive disclosure widget, which can be used to show or hide content.",
  },
  {
    front: "<dfn>",
    back: "Indicates the defining instance of a term, often rendered in italics.",
  },
  {
    front: "<dialog>",
    back: "Represents a dialog box or other interactive component, such as a modal or popup window.",
  },
  {
    front: "<div>",
    back: "Defines a generic block-level container, often used for grouping content or applying styles.",
  },
  {
    front: "<dl>",
    back: "Creates a description list, which is a list of terms and their corresponding descriptions.",
  },
  {
    front: "<dt>",
    back: "Defines a term in a description list (<dl>), often rendered in bold.",
  },
  {
    front: "<em>",
    back: "Indicates emphasized text, often rendered in italics.",
  },
  {
    front: "<embed>",
    back: "Embeds external content, such as a video, plugin, or interactive application, into a document.",
  },
  {
    front: "<fieldset>",
    back: "Groups related form controls, often used with a <legend> to provide a caption.",
  },
  {
    front: "<figcaption>",
    back: "Defines a caption for a <figure> element, often used to provide a title or description for images or other media.",
  },
  {
    front: "<figure>",
    back: "Represents a piece of content that is referenced from the main content, such as an image, diagram, or code snippet.",
  },
  {
    front: "<footer>",
    back: "Defines a footer for a section or page, often containing metadata, copyright information, or contact details.",
  },
  {
    front: "<form>",
    back: "Creates a form, which is used to collect user input or submit data to a server.",
  },
  {
    front: "<h1>, <h2>, <h3>, <h4>, <h5>, <h6>",
    back: "Defines a heading, with <h1> being the highest level (most important) and <h6> being the lowest level (least important).",
  },
  {
    front: "<head>",
    back: "Contains metadata about an HTML document, such as the title, character encoding, and linked resources.",
  },
  {
    front: "<header>",
    back: "Defines a header for a section or page, often containing a logo, navigation, or introductory content.",
  },
  {
    front: "<hr>",
    back: "Inserts a horizontal rule or thematic break, often used to separate content sections.",
  },
  {
    front: "<html>",
    back: "Defines the root element of an HTML document, which contains the <head> and <body> elements.",
  },
  {
    front: "<i>",
    back: "Represents a span of text in an alternate voice or mood, such as technical terms, idiomatic phrases, or thoughts. Often rendered in italics.",
  },
  {
    front: "<iframe>",
    back: "Creates an inline frame, which embeds another document, such as a webpage or multimedia content, within the current document.",
  },
  {
    front: "<img>",
    back: "Embeds an image, such as a JPEG, PNG, or GIF, into a document.",
  },
  {
    front: "<input>",
    back: "Creates an interactive form control, such as a text box, checkbox, or radio button.",
  },
  {
    front: "<ins>",
    back: "Indicates inserted text, often rendered with an underline effect.",
  },
  {
    front: "<kbd>",
    back: "Indicates user input, often rendered in a monospaced font.",
  },
  {
    front: "<label>",
    back: "Defines a label for a form control, such as an <input> or <textarea> element.",
  },
  {
    front: "<legend>",
    back: "Defines a caption for a <fieldset> element, often used to provide a title for a group of form controls.",
  },
  {
    front: "<li>",
    back: "Represents a list item in an ordered (<ol>) or unordered (<ul>) list.",
  },
  {
    front: "<link>",
    back: "Specifies a relationship between the current document and an external resource, such as a stylesheet, favicon, or alternate version.",
  },
  {
    front: "<main>",
    back: "Represents the main content of a document, which is unique and independent from other page elements.",
  },
  {
    front: "<map>",
    back: "Defines an image map, which is a clickable image with multiple hyperlinked areas.",
  },
  {
    front: "<mark>",
    back: "Highlights a span of text, often used to emphasize or call attention to specific words or phrases.",
  },
  {
    front: "<meta>",
    back: "Provides metadata about an HTML document, such as a description, keywords, or author.",
  },
  {
    front: "<meter>",
    back: "Represents a scalar measurement or range, such as a gauge or progress bar.",
  },
  {
    front: "<nav>",
    back: "Defines a section of navigation links, often used for site menus or table of contents.",
  },
  {
    front: "<noscript>",
    back: "Defines alternate content for users who have JavaScript disabled or are using a browser that does not support it.",
  },
  {
    front: "<object>",
    back: "Embeds an external object, such as an image, video, or application, into a document.",
  },
  {
    front: "<ol>",
    back: "Creates an ordered list, which is a numbered list of items.",
  },
  {
    front: "<optgroup>",
    back: "Groups related options in a <select> dropdown menu, often used to organize long lists of choices.",
  },
  {
    front: "<option>",
    back: "Defines an option in a <select> dropdown menu, which can be selected by the user.",
  },
  {
    front: "<output>",
    back: "Displays the result of a calculation or user action, often used in conjunction with form controls and JavaScript.",
  },
  {
    front: "<p>",
    back: "Defines a paragraph, which is a block of text separated by whitespace or other block-level elements.",
  },
  {
    front: "<param>",
    back: "Specifies parameters for an <object> element, such as attributes or settings for a plugin or application.",
  },
  {
    front: "<picture>",
    back: "Provides multiple sources for a single image, often used for responsive images or different file formats.",
  },
  {
    front: "<pre>",
    back: "Displays preformatted text, which preserves whitespace and line breaks, often used for code or poetry.",
  },
  {
    front: "<progress>",
    back: "Represents the progress of a task, such as a download or installation, often displayed as a progress bar.",
  },
  {
    front: "<q>",
    back: "Indicates a short inline quotation, often rendered with quotation marks.",
  },
  {
    front: "<rp>",
    back: "Provides fallback text for browsers that do not support ruby annotations (<ruby>, <rt>, and <rp> elements).",
  },
  {
    front: "<rt>",
    back: "Defines the pronunciation or explanation for a character in a ruby annotation (<ruby> element).",
  },
  {
    front: "<ruby>",
    back: "Represents a ruby annotation, which is a small piece of text placed above or below a character to provide pronunciation or explanation.",
  },
  {
    front: "<s>",
    back: "Indicates text that is no longer accurate or relevant, often rendered with a strikethrough effect.",
  },
  {
    front: "<samp>",
    back: "Indicates sample output from a computer program, often rendered in a monospaced font.",
  },
  {
    front: "<script>",
    back: "Embeds or references a script, such as JavaScript, in a document.",
  },
  {
    front: "<section>",
    back: "Defines a section of content, often used to group related content or divide a document into chapters or parts.",
  },
  {
    front: "<select>",
    back: "Creates a dropdown menu, which allows users to choose one or more options from a list.",
  },
  {
    front: "<small>",
    back: "Indicates small print or fine print, often rendered in a smaller font size.",
  },
  {
    front: "<source>",
    back: "Specifies multiple media sources for an <audio> or <video> element, often used for different file formats or resolutions.",
  },
  {
    front: "<span>",
    back: "Defines a generic inline container, often used for grouping text or applying styles.",
  },
  {
    front: "<strong>",
    back: "Indicates strong importance or emphasis, often rendered in bold.",
  },
  {
    front: "<style>",
    back: "Embeds or references a stylesheet, such as CSS, in a document.",
  },
  {
    front: "<sub>",
    back: "Defines subscript text, which is text that appears half a character below the baseline, often used for chemical formulas or mathematical expressions.",
  },
  {
    front: "<summary>",
    back: "Defines a visible heading for a <details> element, which can be clicked to show or hide content.",
  },
  {
    front: "<sup>",
    back: "Defines superscript text, which is text that appears half a character above the baseline, often used for footnotes or exponents.",
  },
  {
    front: "<table>",
    back: "Creates a table, which is used to present data in rows and columns.",
  },
  {
    front: "<tbody>",
    back: "Defines a group of rows in a <table> element, often used to apply styles or group rows for scripting purposes.",
  },
  {
    front: "<td>",
    back: "Defines a table cell, which contains data or other content in a <table> element.",
  },
  {
    front: "<template>",
    back: "Defines a reusable chunk of content that is not displayed by default, often used with JavaScript to create dynamic content.",
  },
  {
    front: "<textarea>",
    back: "Creates a multiline text input, which allows users to enter and edit text.",
  },
  {
    front: "<tfoot>",
    back: "Defines a group of footer rows in a <table> element, often used to display summary or totals data.",
  },
  {
    front: "<th>",
    back: "Defines a header cell in a <table> element, often used to provide labels for columns or rows.",
  },
  {
    front: "<thead>",
    back: "Defines a group of header rows in a <table> element, often used to provide labels for columns.",
  },
  {
    front: "<time>",
    back: "Represents a specific time or date, which can be machine-readable and/or human-readable.",
  },
  {
    front: "<title>",
    back: "Defines the title of an HTML document, which is displayed in the browser's title bar or tab.",
  },
  {
    front: "<tr>",
    back: "Defines a row of cells in a <table> element, which can contain header (<th>) or data (<td>) cells.",
  },
  {
    front: "<track>",
    back: "Specifies text tracks for an <audio> or <video> element, often used for subtitles, captions, or other supplementary content.",
  },
  {
    front: "<u>",
    back: "Indicates text that should be stylistically different from normal text, such as misspelled words or proper names, often rendered with an underline effect.",
  },
  {
    front: "<ul>",
    back: "Creates an unordered list, which is a bulleted list of items.",
  },
  {
    front: "<var>",
    back: "Indicates a variable, often rendered in italics.",
  },
  {
    front: "<video>",
    back: "Embeds a video or movie, often used with <source> elements to specify multiple file formats.",
  },
  {
    front: "<wbr>",
    back: "Defines a word break opportunity, which suggests a preferred line break location in long, unbroken strings of text.",
  },
];
