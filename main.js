var TNode_Type;
(function (TNode_Type) {
    TNode_Type[TNode_Type["UNKNOWN"] = 0] = "UNKNOWN";
    TNode_Type[TNode_Type["TEXT"] = 1] = "TEXT";
    TNode_Type[TNode_Type["ELEMENT"] = 2] = "ELEMENT";
})(TNode_Type || (TNode_Type = {}));
var FragmentItem;
(function (FragmentItem) {
    FragmentItem[FragmentItem["NODE_START"] = 0] = "NODE_START";
    FragmentItem[FragmentItem["NODE_END"] = 1] = "NODE_END";
    FragmentItem[FragmentItem["EOL"] = 2] = "EOL";
    FragmentItem[FragmentItem["CHARACTER"] = 3] = "CHARACTER";
    FragmentItem[FragmentItem["WHITE_SPACE"] = 4] = "WHITE_SPACE";
})(FragmentItem || (FragmentItem = {}));
// used in Fragment_Contextual_Item as type
var FragmentCItem;
(function (FragmentCItem) {
    FragmentCItem[FragmentCItem["NODE_START"] = 0] = "NODE_START";
    FragmentCItem[FragmentCItem["NODE_END"] = 1] = "NODE_END";
    FragmentCItem[FragmentCItem["TEXT"] = 2] = "TEXT";
})(FragmentCItem || (FragmentCItem = {}));
var TRange_Type;
(function (TRange_Type) {
    TRange_Type[TRange_Type["TEXT"] = 0] = "TEXT";
    TRange_Type[TRange_Type["ELEMENT"] = 1] = "ELEMENT";
})(TRange_Type || (TRange_Type = {}));
var FragmentPos;
(function (FragmentPos) {
    FragmentPos[FragmentPos["DOC_BEGIN"] = 0] = "DOC_BEGIN";
    FragmentPos[FragmentPos["DOC_END"] = 1] = "DOC_END";
})(FragmentPos || (FragmentPos = {}));
var KbEventSource;
(function (KbEventSource) {
    KbEventSource[KbEventSource["CANVAS"] = 0] = "CANVAS";
    KbEventSource[KbEventSource["PASTE_ADAPTER"] = 1] = "PASTE_ADAPTER";
})(KbEventSource || (KbEventSource = {}));
var CaretPos;
(function (CaretPos) {
    CaretPos[CaretPos["LINE_HORIZONTAL"] = 0] = "LINE_HORIZONTAL";
    CaretPos[CaretPos["LINE_VERTICAL"] = 1] = "LINE_VERTICAL";
    CaretPos[CaretPos["CHARACTER"] = 2] = "CHARACTER";
    CaretPos[CaretPos["WORD"] = 3] = "WORD";
    CaretPos[CaretPos["VIEWPORT"] = 4] = "VIEWPORT";
})(CaretPos || (CaretPos = {}));
var EditorCommand;
(function (EditorCommand) {
    EditorCommand[EditorCommand["INSERT_TEXT"] = 0] = "INSERT_TEXT";
    EditorCommand[EditorCommand["DELETE_TEXT"] = 1] = "DELETE_TEXT";
    EditorCommand[EditorCommand["NEW_LINE"] = 2] = "NEW_LINE";
    EditorCommand[EditorCommand["MOVE"] = 3] = "MOVE";
    EditorCommand[EditorCommand["BOLD"] = 4] = "BOLD";
    EditorCommand[EditorCommand["ITALIC"] = 5] = "ITALIC";
    EditorCommand[EditorCommand["UNDERLINE"] = 6] = "UNDERLINE";
    EditorCommand[EditorCommand["STRIKE"] = 7] = "STRIKE";
    EditorCommand[EditorCommand["ALIGN"] = 8] = "ALIGN";
    EditorCommand[EditorCommand["CLEAR_FORMATTING"] = 9] = "CLEAR_FORMATTING";
    EditorCommand[EditorCommand["COPY"] = 10] = "COPY";
    EditorCommand[EditorCommand["CUT"] = 11] = "CUT";
    EditorCommand[EditorCommand["PASTE"] = 12] = "PASTE";
    EditorCommand[EditorCommand["INDENT"] = 13] = "INDENT";
    EditorCommand[EditorCommand["UNINDENT"] = 14] = "UNINDENT";
    EditorCommand[EditorCommand["VALIGN"] = 15] = "VALIGN";
    EditorCommand[EditorCommand["FONT"] = 16] = "FONT";
    EditorCommand[EditorCommand["COLOR"] = 17] = "COLOR";
    EditorCommand[EditorCommand["BGCOLOR"] = 18] = "BGCOLOR";
    EditorCommand[EditorCommand["SIZE"] = 19] = "SIZE";
    EditorCommand[EditorCommand["BLOCK_LEVEL"] = 20] = "BLOCK_LEVEL";
    EditorCommand[EditorCommand["LIST"] = 21] = "LIST";
    EditorCommand[EditorCommand["INSERT_LINK"] = 22] = "INSERT_LINK";
    EditorCommand[EditorCommand["REMOVE_LINK"] = 23] = "REMOVE_LINK";
    EditorCommand[EditorCommand["UNDO"] = 24] = "UNDO";
    EditorCommand[EditorCommand["REDO"] = 25] = "REDO";
})(EditorCommand || (EditorCommand = {}));
var TNewLinePolicy;
(function (TNewLinePolicy) {
    TNewLinePolicy[TNewLinePolicy["BR"] = 0] = "BR";
    TNewLinePolicy[TNewLinePolicy["SURGERY"] = 1] = "SURGERY";
})(TNewLinePolicy || (TNewLinePolicy = {}));
;
var TSurgeryHint;
(function (TSurgeryHint) {
    TSurgeryHint[TSurgeryHint["NONE"] = 0] = "NONE";
    TSurgeryHint[TSurgeryHint["LEFT"] = 1] = "LEFT";
    TSurgeryHint[TSurgeryHint["RIGHT"] = 2] = "RIGHT";
})(TSurgeryHint || (TSurgeryHint = {}));
var TListBreakResult;
(function (TListBreakResult) {
    TListBreakResult[TListBreakResult["NONE_BEFORE"] = 0] = "NONE_BEFORE";
    TListBreakResult[TListBreakResult["NONE_AFTER"] = 1] = "NONE_AFTER";
    TListBreakResult[TListBreakResult["AFTER"] = 2] = "AFTER";
    TListBreakResult[TListBreakResult["BEFORE"] = 3] = "BEFORE"; // created a list before this list
})(TListBreakResult || (TListBreakResult = {}));
var CaretLockDirection;
(function (CaretLockDirection) {
    CaretLockDirection[CaretLockDirection["FROM_BEGINNING_OF_DOCUMENT"] = 0] = "FROM_BEGINNING_OF_DOCUMENT";
    CaretLockDirection[CaretLockDirection["FROM_ENDING_OF_DOCUMENT"] = 1] = "FROM_ENDING_OF_DOCUMENT";
})(CaretLockDirection || (CaretLockDirection = {}));
var TResizer;
(function (TResizer) {
    TResizer[TResizer["NW"] = 0] = "NW";
    TResizer[TResizer["NE"] = 1] = "NE";
    TResizer[TResizer["SW"] = 2] = "SW";
    TResizer[TResizer["SE"] = 3] = "SE";
    TResizer[TResizer["N"] = 4] = "N";
    TResizer[TResizer["S"] = 5] = "S";
    TResizer[TResizer["W"] = 6] = "W";
    TResizer[TResizer["E"] = 7] = "E";
    TResizer[TResizer["NONE"] = 8] = "NONE";
})(TResizer || (TResizer = {}));
var TClipboardEffect;
(function (TClipboardEffect) {
    TClipboardEffect[TClipboardEffect["COPY"] = 0] = "COPY";
    TClipboardEffect[TClipboardEffect["CUT"] = 1] = "CUT";
})(TClipboardEffect || (TClipboardEffect = {}));
;
var FSItem;
(function (FSItem) {
    FSItem[FSItem["FILE"] = 0] = "FILE";
    FSItem[FSItem["FOLDER"] = 1] = "FOLDER";
})(FSItem || (FSItem = {}));
var FS_Navigator_Status;
(function (FS_Navigator_Status) {
    FS_Navigator_Status[FS_Navigator_Status["LOADED"] = 0] = "LOADED";
    FS_Navigator_Status[FS_Navigator_Status["LOADING"] = 1] = "LOADING";
    FS_Navigator_Status[FS_Navigator_Status["ERROR"] = 2] = "ERROR";
})(FS_Navigator_Status || (FS_Navigator_Status = {}));
var Events = (function () {
    function Events() {
        this.$EVENTS_ENABLED = true;
    }
    Events.prototype.on = function (eventName, callback) {
        this.$EVENTS_QUEUE = this.$EVENTS_QUEUE || {};
        if (!this.$EVENTS_QUEUE[eventName])
            this.$EVENTS_QUEUE[eventName] = [];
        this.$EVENTS_QUEUE[eventName].push(callback);
    };
    Events.prototype.off = function (eventName, callback) {
        if (this.$EVENTS_QUEUE && this.$EVENTS_QUEUE[eventName]) {
            for (var i = 0, len = this.$EVENTS_QUEUE[eventName].length; i < len; i++) {
                if (this.$EVENTS_QUEUE[eventName][i] == callback) {
                    this.$EVENTS_QUEUE[eventName].splice(i, 1);
                    return;
                }
            }
        }
    };
    Events.prototype.fire = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.$EVENTS_ENABLED) {
            if (this.$EVENTS_QUEUE && this.$EVENTS_QUEUE[eventName]) {
                for (var i = 0, len = this.$EVENTS_QUEUE[eventName].length; i < len; i++) {
                    this.$EVENTS_QUEUE[eventName][i].apply(this, args);
                }
            }
        }
    };
    // globally enables or disables all events fired.
    Events.prototype.setEventingState = function (enabled) {
        this.$EVENTS_ENABLED = !!enabled;
    };
    return Events;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Throttler = (function (_super) {
    __extends(Throttler, _super);
    function Throttler(callbackFunction, frequency) {
        if (frequency === void 0) { frequency = 1; }
        _super.call(this);
        this.lastRun = 0;
        this.nextRun = null;
        this.frequency = 1;
        this.callback = null;
        this.frequency = frequency;
        this.nextRun = null;
        this.lastRun = Date.now();
        this.callback = callbackFunction;
    }
    Throttler.prototype.run = function () {
        var now = 0, self = this;
        if (this.nextRun != null) {
            // a run is already scheduled in the future.
            return;
        }
        else {
            now = Date.now();
            this.lastRun += this.frequency;
            if (this.lastRun < now) {
                // run immediately
                this.lastRun = now;
                this.nextRun = null;
                this.callback();
            }
            else {
                // run in the future
                this.nextRun = this.lastRun + this.frequency;
                setTimeout(function () {
                    self.callback();
                    self.nextRun = null;
                }, this.nextRun - this.lastRun);
            }
        }
    };
    return Throttler;
})(Events);
/* This class handles all the utility for dom working */
var DOM = (function () {
    function DOM() {
    }
    DOM.hasClass = function (DOMElement, className) {
        if (!className) {
            return false;
        }
        else {
            className = String(className);
        }
        var classes = String(DOMElement['className'] || '').split(/[\s]+/g), i = 0, len = classes.length;
        for (i = 0; i < len; i++) {
            if (classes[i] == className) {
                return true;
            }
        }
        return false;
    };
    DOM.addClass = function (DOMElement, className) {
        if (!className) {
            return;
        }
        else {
            className = String(className);
        }
        var classes = String(DOMElement['className'] || '').split(/[\s]+/g), i = 0, len = classes.length;
        for (i = 0; i < len; i++) {
            if (classes[i] == className) {
                return;
            }
        }
        classes.push(className);
        DOMElement['className'] = classes.join(' ');
    };
    DOM.removeClass = function (DOMElement, className) {
        if (!className) {
            return;
        }
        else {
            className = String(className);
        }
        var classes = String(DOMElement['className'] || '').split(/[\s]+/g), i = 0, len = classes.length;
        for (i = 0; i < len; i++) {
            if (classes[i] == className) {
                classes.splice(i, 1);
                break;
            }
        }
        DOMElement['className'] = classes.join(' ');
    };
    return DOM;
})();
var Helper = (function () {
    function Helper() {
    }
    Helper.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (!Helper.dev) {
            console.log.apply(console, args);
        }
    };
    Helper.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (!Helper.dev) {
            console.warn.apply(console, args);
        }
    };
    Helper.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (!Helper.dev) {
            console.error.apply(console, args);
        }
    };
    /* Array helpers */
    Helper.reverse = function (arr) {
        if (Array.prototype.reverse) {
            return Array.prototype.reverse.call(arr);
        }
        else {
            var out = [], i = arr.length - 1;
            while (i >= 0) {
                out.push(arr[i--]);
            }
            return out;
        }
    };
    Helper.filter = function (arr, callback) {
        var out = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (callback(arr[i])) {
                out.push(arr[i]);
            }
        }
        return out;
    };
    // a modified version of array splice, only that the adding elements are passed into an array but not as
    // function arguments.
    Helper.spliceApply = function (thisArray, startIndex, removeLength, addNodes) {
        if (addNodes === void 0) { addNodes = []; }
        var apply = [startIndex, removeLength], i = 0, len = addNodes.length;
        for (i = 0; i < len; i++) {
            apply.push(addNodes[i]);
        }
        Array.prototype.splice.apply(thisArray, apply);
        return thisArray;
    };
    Helper.createCollectionFromHTMLText = function (s, documentElement) {
        try {
            var parser = new HTMLParser(documentElement, s || ''), nodes = [], i = 0, len = parser.NODES.length, element, n = 0, j = 0, traverser = null;
            for (i = 0; i < len; i++) {
                switch (parser.NODES[i].type) {
                    case '#text':
                        nodes.push(documentElement.createTextNode(parser.NODES[i].value));
                        break;
                    case 'node':
                        if (HTML_Body.IGNORE_ELEMENTS.indexOf(parser.NODES[i].nodeName) == -1) {
                            if (HTML_Body.TRAVERSE_ELEMENTS.indexOf(parser.NODES[i].nodeName) == -1) {
                                element = documentElement.createElement(parser.NODES[i].nodeName);
                                if (parser.NODES[i].attributes && (n = parser.NODES[i].attributes.length)) {
                                    for (j = 0; j < n; j++) {
                                        element.setAttribute(parser.NODES[i].attributes[j].name, parser.NODES[i].attributes[j].value);
                                    }
                                }
                                if (parser.NODES[i].children && parser.NODES[i].children.length) {
                                    element.setInnerNodes(parser.NODES[i].children, element);
                                }
                                nodes.push(element);
                            }
                            else {
                                if (parser.NODES[i].children && parser.NODES[i].children.length) {
                                    // TRAVERSE NODE CONTENTS
                                    traverser = traverser || documentElement.createElement('traverse');
                                    traverser.childNodes.splice(0, traverser.childNodes.length);
                                    traverser.setInnerNodes(parser.NODES[i].children, traverser);
                                    for (j = 0, n = traverser.childNodes.length; j < n; j++) {
                                        nodes.push(traverser.childNodes[j]);
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
            return new TNode_Collection(nodes);
        }
        catch (parserError) {
            return null;
        }
    };
    Helper.peek = function (o, properties) {
        var out = {};
        for (var i = 0, len = properties.length; i < len; i++) {
            if (o[properties[i]]) {
                out[properties[i]] = o[properties[i]];
            }
        }
        return out;
    };
    /* Logging */
    Helper.dev = false;
    return Helper;
})();
var TNode = (function (_super) {
    __extends(TNode, _super);
    function TNode() {
        _super.apply(this, arguments);
        this.parentNode = null;
        this.siblingIndex = 0;
        this.nodeType = 0 /* UNKNOWN */;
        this.documentElement = null;
        this.FRAGMENT_START = 0;
        this.FRAGMENT_END = 0;
    }
    // dettach the node from it's parent
    TNode.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
            this.parentNode = null;
        }
        return this;
    };
    TNode.prototype.nextSibling = function () {
        if (this.parentNode) {
            return this.parentNode.childNodes[this.siblingIndex + 1] || null;
        }
        else {
            return null;
        }
    };
    TNode.prototype.previousSibling = function () {
        if (this.parentNode) {
            return this.parentNode.childNodes[this.siblingIndex - 1] || null;
        }
        else {
            return null;
        }
    };
    TNode.prototype.bakeIntoFragment = function () {
        throw "ABSTRACT";
    };
    TNode.prototype.ownerBlockElement = function () {
        throw "ABSTRACT";
    };
    TNode.prototype.elementsBeforeMyself = function (includingMe) {
        if (!this.parentNode) {
            throw "Node " + this.is() + " is not attached!";
        }
        else {
            return this.parentNode.childNodes.slice(0, includingMe ? this.siblingIndex + 1 : this.siblingIndex);
        }
    };
    TNode.prototype.elementsAfterMyself = function (includingMe) {
        if (!this.parentNode) {
            throw "Node " + this.is() + " not attached!";
        }
        else {
            return this.parentNode.childNodes.slice(includingMe ? this.siblingIndex : this.siblingIndex + 1);
        }
    };
    TNode.prototype.is = function () {
        if (this.nodeType == 1 /* TEXT */) {
            return '#text';
        }
        else {
            return this.nodeName;
        }
    };
    TNode.prototype.isOrphanElement = function () {
        var is = this.is();
        if (is == '#text') {
            return false;
        }
        else {
            return this.childNodes && this.childNodes.length == 0 && this.isBlockTextNode;
        }
    };
    TNode.prototype.firstParentOfType = function (whatToBe) {
        var cursor = this;
        while (cursor) {
            if (cursor.is() == whatToBe) {
                return cursor;
            }
            cursor = cursor.parentNode;
        }
        return null;
    };
    TNode.prototype.hostElement = function () {
        var cursor = this, hosts = ['body', 'td', 'li'];
        while (hosts.indexOf(cursor.is()) == -1) {
            if (!cursor.parentNode) {
                return null;
            }
            cursor = cursor.parentNode;
        }
        return cursor;
    };
    /* Cuts the dom in deepness until the root node name is in the untilNodes list */
    TNode.prototype.cutDown = function (untilNodes) {
        if (!untilNodes.length) {
            return {
                "element": this.parentNode,
                "index": this.siblingIndex + 1
            };
        }
        var nodesLeft, nodesRight, self = this;
        if (self.nodeType == 1 /* TEXT */ && self.isBR) {
            self = this.parentNode;
        }
        var lParent = self.parentNode, rParent = null, nodesLeft = new TNode_Collection(self.elementsBeforeMyself(true));
        nodesRight = new TNode_Collection(self.elementsAfterMyself(false));
        while (lParent.parentNode && (lParent.parentNode != lParent.documentElement) && untilNodes.indexOf(lParent.parentNode.is()) == -1) {
            rParent = lParent.clone();
            nodesRight.wrapIn(rParent);
            lParent.parentNode.appendChild(rParent, lParent.siblingIndex + 1);
            nodesLeft = new TNode_Collection(lParent.elementsBeforeMyself(true));
            nodesRight = new TNode_Collection(rParent.elementsAfterMyself(true));
            lParent = lParent.parentNode;
        }
        if (lParent.parentNode) {
            rParent = lParent.clone();
            nodesRight.wrapIn(rParent);
            lParent.parentNode.appendChild(rParent, lParent.siblingIndex + 1);
        }
        else {
            throw "ERR_BAD_CUTDOWN";
        }
        return {
            "element": lParent.parentNode,
            "index": lParent.siblingIndex + 1
        };
    };
    return TNode;
})(Events);
var TNode_Text = (function (_super) {
    __extends(TNode_Text, _super);
    function TNode_Text(textContents) {
        _super.call(this);
        this._text = '';
        this.nodeType = 1 /* TEXT */;
        // on building layout, the EOL_POS will be computed. this is needed on bakeIntoFragment method
        this.EOL_POS = null;
        this._text = String(textContents || '');
    }
    TNode_Text.prototype.textContents = function (c, appendFirst) {
        if (c === void 0) { c = null; }
        if (appendFirst === void 0) { appendFirst = false; }
        if (c === null) {
            return this._text;
        }
        else {
            if (appendFirst) {
                this._text = String(c || '') + this._text;
            }
            else {
                this._text = String(c || '');
            }
            if (this.parentNode) {
                this.parentNode.fire('relayout');
            }
        }
    };
    // escapes the text for HTML exporting
    TNode_Text.prototype.escape = function () {
        var out = '', i = 0, len = this._text.length, matches;
        for (i = 0; i < len; i++) {
            if (TNode_Text.$SpecialChars[this._text[i]]) {
                out += TNode_Text.$SpecialChars[this._text[i]];
            }
            else {
                out += this._text[i];
            }
        }
        while (out.indexOf('  ') >= 0) {
            out = out.replace('  ', ' &nbsp;');
        }
        while (out.indexOf('&nbsp; ') >= 0) {
            out = out.replace('&nbsp; ', '&nbsp;&nbsp;');
        }
        return out;
    };
    TNode_Text.prototype.bakeIntoFragment = function () {
        if (this.documentElement) {
            this.FRAGMENT_START = this.documentElement.fragment.length();
            for (var i = 0, len = this._text.length; i < len; i++) {
                this.documentElement.fragment.add(TNode_Text.$FragmentTypes[this._text[i]] || 3 /* CHARACTER */);
                if (this.EOL_POS && this.EOL_POS[i]) {
                    this.documentElement.fragment.add(2 /* EOL */);
                }
            }
            this.FRAGMENT_END = this.documentElement.fragment.length() - 1;
        }
    };
    /* Fixed bug. */
    TNode_Text.prototype.textContentsFragment = function (indexStart, indexEnd) {
        var out = '', i = 0, len = 0, j = 0, eols = 0;
        j = this.FRAGMENT_START;
        for (i = 0, len = this._text.length; i < len; i++) {
            if (j >= indexStart && j <= indexEnd) {
                out += this._text[i];
            }
            if (this.EOL_POS && this.EOL_POS[i]) {
                j += 2;
            }
            else {
                j += 1;
            }
            if (j > indexEnd) {
                break;
            }
        }
        return out;
    };
    TNode_Text.prototype.deleteTextContentsBetweenFragmentPositions = function (indexStart, indexEnd) {
        var out = [], returnValue = 0;
        if (indexStart > this.FRAGMENT_START) {
            out.push(this.textContentsFragment(this.FRAGMENT_START, indexStart - 1));
            returnValue = out[0].length;
        }
        if (indexEnd < this.FRAGMENT_END) {
            out.push(this.textContentsFragment(indexEnd + 1, this.FRAGMENT_END));
        }
        this.textContents(out.join(''));
        return returnValue;
    };
    /* Fragmentates the text node @ indexes, creating in the worst case scenario two additional
       siblings, one before and one after of text contents
     */
    /*

    public createFragmentationAtIndexes( indexStart: number, indexEnd: number ): TNode_Text {

        var out = {
            "before" : null,
            "after"  : null
        }, s: string;

        if ( indexStart > this.FRAGMENT_START ) {
            s = this.textContentsFragment( this.FRAGMENT_START, indexStart - 1);
            if ( s ) {
                out.before = this.documentElement.createTextNode( s );
            }
        }

        if ( indexEnd < this.FRAGMENT_END ) {
            s = this.textContentsFragment( indexEnd + 1, this.FRAGMENT_END );
            if ( s ) {
                out.after = this.documentElement.createTextNode( s );
            }
        }

        if ( out.before || out.after ) {

            this.textContents( this.textContentsFragment( indexStart, indexEnd ) );

            if ( out.before ) {
                this.parentNode.appendChild( out.before, this.siblingIndex );
            }

            if ( out.after ) {
                this.parentNode.appendChild( out.after, this.siblingIndex + 1 );
            }

            this.FRAGMENT_START = indexStart;
            this.FRAGMENT_END   = indexEnd;

        }

        return this;

    }

    */
    // I know it seems complicated, but that's 6 hours of work for this function (with empiric tests).
    // Don't even try to understand it, cause even I will not be able to understand it in a few hours
    // from now on
    TNode_Text.prototype.insertTextAtTargetOffset = function (offset, str) {
        var buff = [], buff1 = [offset - this.FRAGMENT_START, 0], i = 0, j = 0, len = this._text.length, out = '', args, eols = 0, returnValue = 0;
        for (i = 0; i < len; i++) {
            buff.push(this._text.charCodeAt(i));
            if (this.EOL_POS && this.EOL_POS[i]) {
                buff.push(0);
            }
        }
        for (i = 0, len = str.length; i < len; i++) {
            buff1.push(str.charCodeAt(i));
        }
        for (i = 0; i < offset - this.FRAGMENT_START; i++) {
            if (buff[i] != 0) {
                eols++;
            }
        }
        returnValue = eols + str.length;
        Array.prototype.splice.apply(buff, buff1);
        for (i = 0, len = buff.length; i < len; i++) {
            if (buff[i]) {
                out += String.fromCharCode(buff[i]);
            }
        }
        this.textContents(out);
        return returnValue;
    };
    // FIXED HOPEFULLY TO A MORE OPTIMIZED AND BUGLESS VERSION.
    TNode_Text.prototype.textIndexToFragmentPosition = function (index) {
        var i = 0, retVal = 0;
        for (var i = 0; i <= index; i++) {
            if (this.EOL_POS && this.EOL_POS[i]) {
                retVal += 2;
            }
            else {
                retVal++;
            }
        }
        retVal = this.FRAGMENT_START + retVal - 1 - (this.EOL_POS && this.EOL_POS[index] ? 1 : 0);
        while (retVal > 0 && [3 /* CHARACTER */, 4 /* WHITE_SPACE */, 2 /* EOL */].indexOf(this.documentElement.fragment.at(retVal)) == -1) {
            retVal--;
        }
        return retVal;
    };
    TNode_Text.prototype.ownerBlockElement = function () {
        return this.parentNode.ownerBlockElement();
    };
    TNode_Text.$FragmentTypes = {
        "\n": 4 /* WHITE_SPACE */,
        "\t": 4 /* WHITE_SPACE */,
        " ": 4 /* WHITE_SPACE */
    };
    TNode_Text.$SpecialChars = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
    };
    return TNode_Text;
})(TNode);
var TNode_TextBreak = (function (_super) {
    __extends(TNode_TextBreak, _super);
    function TNode_TextBreak(breakElement) {
        _super.call(this, "\r");
        this.isBR = true;
        this._parentNode = breakElement;
        this.siblingIndex = 0;
    }
    Object.defineProperty(TNode_TextBreak.prototype, "parentNode", {
        get: function () {
            return this._parentNode;
        },
        set: function (node) {
            if (node != this._parentNode) {
                throw "ERR_NO_MODIFICATION_ALLOWED";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNode_TextBreak.prototype, "_text", {
        get: function () {
            return "\r";
        },
        set: function (s) {
            if (s == '' && this.parentNode) {
                this.parentNode.remove();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNode_TextBreak.prototype, "documentElement", {
        get: function () {
            if (this.parentNode) {
                return this.parentNode.documentElement;
            }
            else {
                return null;
            }
        },
        set: function (body) {
        },
        enumerable: true,
        configurable: true
    });
    TNode_TextBreak.prototype.bakeIntoFragment = function () {
        if (this.parentNode && this.parentNode.documentElement) {
            this.FRAGMENT_START = this.parentNode.documentElement.fragment.length();
            this.documentElement.fragment.add(4 /* WHITE_SPACE */);
            if (this.EOL_POS && this.EOL_POS[0])
                this.documentElement.fragment.add(2 /* EOL */);
            this.FRAGMENT_END = this.documentElement.fragment.length() - 1;
        }
    };
    TNode_TextBreak.prototype.remove = function () {
        throw "ERR_NO_MODIFICATION_ALLOWED";
    };
    TNode_TextBreak.prototype.elementsBeforeMyself = function (includingMe) {
        throw "ERR_DENIED: TNode_TextBreak.elementsAfterMyself";
    };
    TNode_TextBreak.prototype.elementsAfterMyself = function (includingMe) {
        throw "ERR_DENIED: TNode_TextBreak.elementsAfterMyself";
    };
    TNode_TextBreak.prototype.insertTextAtTargetOffset = function (offset, str) {
        var nextTextNode = this.parentNode.nextAvailableTextNode();
        nextTextNode.textContents(str, true); // append text @ beginning
        return -str.length;
    };
    TNode_TextBreak.prototype.textIndexToFragmentPosition = function (index) {
        return this.parentNode.nextAvailableTextNode().textIndexToFragmentPosition(index);
    };
    return TNode_TextBreak;
})(TNode_Text);
var TNode_Element = (function (_super) {
    __extends(TNode_Element, _super);
    /* @postStyleInit: weather to initialize the style property on this constructor,
                       or if that style property will be initialized in ancestor classes
     */
    function TNode_Element(postStyleInit) {
        if (postStyleInit === void 0) { postStyleInit = false; }
        _super.call(this);
        this.childNodes = [];
        this.nodeType = 2 /* ELEMENT */;
        this.nodeName = '';
        this.id = '';
        this.className = '';
        this.isSelectable = false; // weather the element is rendered as selected when the user clicks on it
        this.isResizable = false; // weather the element is rendered with resize handles when it's focused
        this.isPaintedSelected = false; // weather during the last paint, the element was painted as outer selected.
        this.isBlockTextNode = false; // on elements in which user can write, this property must be set to true.
        // what happens when a user press enter, the element is "cutted", or a <br /> tag is inserted at cursor position
        this.insertLinePolicy = 1 /* SURGERY */;
        this.alternateInsertLinePolicy = 0 /* BR */;
        this.isMergeable = true; // weather the "mergeWith" method works with this or with another element.
        this.isDefragmentable = false; // Two neighbour siblings like <b>...</b><b>...</b> should be defragmented in a single <b>......</b>
        this.isNegation = false; // Wether the node is a negation node ( for a "b" node, it's negation is a "!b" node ).
        this.isSelectionPaintingDisabled = false; // The node is not painted as selected as a whole, if it is included inside a text range, by any circumstances,  by the paint method ( but it's text can be if it's selected )
        this.isSelfClosingTag = false;
        this.layout = null;
        this._tabStop = 0;
        if (!postStyleInit)
            this.style = new TStyle(this);
    }
    /* Appends a node in the element. If arugment @index is mentioned ( not null ),
       the element will be inserted at position @index
     */
    TNode_Element.prototype.appendChild = function (node, index) {
        if (index === void 0) { index = null; }
        if (node && node.is() == 'multirange') {
            throw "A MultiRange node cannot be appended inside of a real node";
        }
        var ownerBlockElement;
        /* If the node has style.float left || right, we append the node @ beginning
           of our ownerBlockElement()
         */
        if (node.nodeType == 2 /* ELEMENT */ && ['left', 'right', 'center'].indexOf(node.style.float()) >= 0 && (ownerBlockElement = this.ownerBlockElement()) && this != ownerBlockElement && ownerBlockElement.is() != 'body') {
            return ownerBlockElement.appendChild(node, 0);
        }
        else {
            if (index === null) {
                node.remove();
                index = this.childNodes.length;
                this.childNodes.push(node.remove());
            }
            else {
                if (index < 0) {
                    index = 0;
                }
                else if (index > this.childNodes.length) {
                    index = this.childNodes.length;
                }
                node.remove();
                this.childNodes.splice(index, 0, node);
            }
            node.parentNode = this;
            for (var i = index, len = this.childNodes.length; i < len; i++) {
                this.childNodes[i].siblingIndex = i;
            }
            this.requestRelayout();
            return node;
        }
    };
    /* Appends a collection of elements. If argument @siblingIndex is mentioned ( not null ),
       the collection of elements will be inserted starting with @siblingIndex, otherwise the
       insertion will be made at the end of this element
     */
    TNode_Element.prototype.appendCollection = function (collection, siblingIndex) {
        if (siblingIndex === void 0) { siblingIndex = null; }
        siblingIndex = siblingIndex === null ? this.childNodes.length : siblingIndex;
        var args = [siblingIndex, 0], i = 0, len = collection.nodes.length;
        for (i = 0; i < len; i++) {
            args.push(collection.nodes[i]);
            collection.nodes[i].remove();
        }
        this.childNodes.splice.apply(this.childNodes, args);
        for (i = 0, len = this.childNodes.length; i < len; i++) {
            this.childNodes[i].parentNode = this;
            this.childNodes[i].siblingIndex = i;
        }
        this.requestRelayout();
    };
    /* Removes a child ( if direct node ) of this element
     */
    TNode_Element.prototype.removeChild = function (node) {
        for (var i = 0, len = this.childNodes.length; i < len; i++) {
            if (this.childNodes[i] == node) {
                this.childNodes.splice(i, 1);
                for (var j = i, len = this.childNodes.length; j < len; j++) {
                    this.childNodes[j].siblingIndex = j;
                }
                this.requestRelayout();
                if (this.childNodes.length == 0 && this.style.display() == 'inline') {
                    (function (me) {
                        setTimeout(function () {
                            if (me.childNodes.length == 0) {
                                Helper.warn("WATCH: removing orphan inline element: " + me.is() + ". If any bugs in 10ms, check this line of code!");
                                me.remove();
                            }
                        }, 100);
                    })(this);
                }
                return node;
            }
        }
        throw "ERR_NODE_NOT_FOUND";
    };
    /* The hasLayout property of an element returns true if the width and height of the
       element are considered, otherwise returns false ( typically for inline elements)

       Basically, an element has layout in two main cases:
            1. It contains text (nodes) or inline elements inside
            2. It is rendered with width and height ( an image, video, or plugin for example )
    */
    TNode_Element.prototype.hasLayout = function () {
        return this.style.display() == 'block' || this.style.float() != '';
    };
    /* Returns an appropriate layout for this element. It should be invoked only with elements
       for which hasLayout() returns true.

       Not invocable directly by user.
    */
    TNode_Element.prototype.createLayout = function (useParentLayout) {
        if (useParentLayout === void 0) { useParentLayout = null; }
        if (this.documentElement) {
            var left = [], center = [], right = [], argIndex = 0, i, len, returnValue;
            this.evaluateLayout(left, center, right, argIndex);
            switch (true) {
                case center.length == 0 && left.length == 0 && right.length == 0:
                    /* The node is empty */
                    if (this.hasLayout()) {
                        returnValue = new Layout_Block(this);
                    }
                    else {
                        returnValue = new Layout_BlockChar();
                    }
                    break;
                case center.length > 0 && left.length == 0 && right.length == 0:
                    /* Return a Layout_Vertical if center.length > 1 or center[0] if center.length == 1; */
                    returnValue = new Layout_Vertical(this, center);
                    break;
                case (left.length > 0 || right.length > 0) && center.length == 0:
                    for (i = 0, len = right.length; i < len; i++) {
                        left.push(right[i]);
                    }
                    returnValue = new Layout_Horizontal(this, left);
                    break;
                case (left.length > 0 || right.length > 0) && center.length > 0:
                    var cells = [];
                    if (left.length) {
                        cells.push(left.length == 1 ? left[0] : new Layout_Horizontal(null, left));
                    }
                    if (center.length) {
                        cells.push(new Layout_Vertical(null, center));
                    }
                    if (right.length) {
                        cells.push(right.length == 1 ? right[0] : new Layout_Horizontal(null, right));
                    }
                    returnValue = new Layout_Horizontal(this, cells);
                    break;
                default:
                    throw "Unhandled layout variant!";
                    break;
            }
            if (useParentLayout) {
                returnValue.parent = useParentLayout;
            }
            returnValue.buildAhead(useParentLayout);
            return returnValue;
        }
        else {
            return null;
        }
    };
    /* Returns a modified "childNodes" property of the element, sorted in such a manner that the
       "float=left" and "float=right" elements are put at first, and the rest of
       the elements are put at last
    */
    TNode_Element.prototype.childNodesSortedByFloatValues = function () {
        var out1 = [], out2 = [], i = 0, len = 0;
        for (i = 0, len = this.childNodes.length; i < len; i++) {
            if (this.childNodes[i].nodeType == 1 /* TEXT */) {
                out2.push(this.childNodes[i]);
            }
            else {
                if (['left', 'right'].indexOf(this.childNodes[i].style.float()) > -1) {
                    out1.push(this.childNodes[i]);
                }
                else {
                    out2.push(this.childNodes[i]);
                }
            }
        }
        for (i = 0, len = out2.length; i < len; i++) {
            out1.push(out2[i]);
        }
        return out1;
    };
    /* Evaluates the possible layout type for the element.

       Not invocable by the user.
    */
    TNode_Element.prototype.evaluateLayout = function (left, center, right, argIndex) {
        if (argIndex === void 0) { argIndex = 0; }
        var i = 0, len = this.childNodes.length, oldArgIndex = argIndex, currentArgIndex = argIndex, j = 0, n = 0, layoutType = '', lblock, lchar, children;
        for (i = 0, children = this.childNodesSortedByFloatValues(), len = children.length; i < len; i++) {
            if (children[i].nodeType == 1 /* TEXT */) {
                currentArgIndex = 1;
                layoutType = 'Layout_BlockChar';
            }
            else {
                switch (true) {
                    case children[i].style.display() == 'block' && ['left', 'right'].indexOf(children[i].style.float()) == -1:
                        layoutType = 'Layout_Block';
                        currentArgIndex = 1;
                        break;
                    case children[i].style.float() == 'left':
                        layoutType = 'Layout_Block';
                        currentArgIndex = 0;
                        break;
                    case children[i].style.float() == 'right':
                        layoutType = 'Layout_Block';
                        currentArgIndex = 2;
                        break;
                    default:
                        layoutType = 'Layout_BlockChar';
                        currentArgIndex = 1;
                        break;
                }
            }
            switch (layoutType) {
                case 'Layout_BlockChar':
                    if (currentArgIndex != oldArgIndex) {
                        lchar = new Layout_BlockChar();
                        center.push(lchar);
                    }
                    else {
                        lchar = ((function () {
                            if (center[center.length - 1] && center[center.length - 1].hasChars) {
                                return center[center.length - 1];
                            }
                            else {
                                return null;
                            }
                        })() || (function () {
                            lchar = new Layout_BlockChar();
                            center.push(lchar);
                            return lchar;
                        })());
                    }
                    if (children[i].nodeType == 1 /* TEXT */) {
                        lchar.addTextNode(children[i]);
                    }
                    else {
                        currentArgIndex = children[i].evaluateLayout(left, center, right, currentArgIndex);
                    }
                    break;
                case 'Layout_Block':
                    lblock = new Layout_Block(children[i]);
                    switch (currentArgIndex) {
                        case 0:
                            left.push(lblock);
                            break;
                        case 1:
                            center.push(lblock);
                            break;
                        case 2:
                            right.push(lblock);
                            break;
                    }
                    break;
            }
            oldArgIndex = currentArgIndex;
        }
        return currentArgIndex;
    };
    /* Returns or sets the concatenated outerHTML() of the child nodes
     */
    TNode_Element.prototype.innerHTML = function (setter) {
        if (setter === void 0) { setter = null; }
        if (setter === null) {
            // getter
            if (!this.childNodes.length) {
                return '';
            }
            else {
                var out = [];
                for (var i = 0, len = this.childNodes.length; i < len; i++) {
                    if (this.childNodes[i].nodeType == 1 /* TEXT */) {
                        out.push(this.childNodes[i].escape());
                    }
                    else {
                        out.push(this.childNodes[i].outerHTML());
                    }
                }
                return out.join('');
            }
        }
        else {
            var nodes = (new HTMLParser(this.documentElement, setter)).NODES;
            this.setInnerNodes(nodes);
        }
    };
    TNode_Element.prototype.xmlAttributes = function () {
        var out = [];
        if (this.style._textAlign.isSet && this.style._textAlign.value != 'left' && this.style.display() == 'block')
            out.push('align="' + this.style.textAlign() + '"');
        if (this.style._color.isSet)
            out.push('color="' + this.style.color() + '"');
        if (this.style._backgroundColor.isSet)
            out.push('bgcolor="' + this.style.backgroundColor() + '"');
        if (this._tabStop)
            out.push('data-tabstop="' + this._tabStop + '"');
        return out.join(' ');
    };
    /* Returns the element header as string ( for example for a "<p>asda</p>" it returns "<p>")
     */
    TNode_Element.prototype.xmlBeginning = function () {
        var attrs = this.xmlAttributes();
        return '<' + this.nodeName + (attrs ? ' ' + attrs : '') + (this.isSelfClosingTag ? '/' : '') + '>';
    };
    /* Returns the element footer as a string ( for example for a "<p>asda</p>", it returns the "</p>" part )
     */
    TNode_Element.prototype.xmlEnding = function () {
        if (this.isSelfClosingTag) {
            return '';
        }
        else {
            return '</' + this.nodeName + '>';
        }
    };
    /* Returns or sets the outer HTML of a node. Setter is not implemented */
    TNode_Element.prototype.outerHTML = function (setter) {
        if (setter === void 0) { setter = null; }
        if (setter === null) {
            // getter
            return this.xmlBeginning() + this.innerHTML() + this.xmlEnding();
        }
        else {
            throw "node.outerHTML: Setter not implemented yet!";
        }
    };
    /* Notifies the document element containing this node that a relayout is
       needed. Relayout is scheduled with the help of a throttler.
     */
    TNode_Element.prototype.requestRelayout = function () {
        if (this.documentElement) {
            this.documentElement.needRelayout = true;
        }
    };
    /* Notifies the document element containing this node that a repaint is
       needed. Repainting is scheduled with the help of a throttler.
     */
    TNode_Element.prototype.requestRepaint = function (originatingElement) {
        if (originatingElement === void 0) { originatingElement = null; }
        if (this.documentElement) {
            this.documentElement.requestRepaint();
        }
    };
    /* Paints the node according to @layout settings (offsetLeft, offsetTop, etc.) */
    TNode_Element.prototype.paint = function (ctx, layout, scrollLeft, scrollTop) {
        // paint border
        this.layout = layout;
        /*
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeRect( layout.offsetLeftOuter - scrollLeft, layout.offsetTopOuter - scrollTop, layout.offsetWidthOuter, layout.offsetHeightOuter );
        ctx.closePath();
        */
        var borderColor, borderWidth, backgroundColor, selection = this.documentElement.viewport.selection, range = selection.getRange(), isSelected = false;
        if ((range.equalsNode(this) && this.isSelectable) || (range.contains(this.FRAGMENT_START + 1) && range.contains(this.FRAGMENT_END - 1) && !this.isSelectionPaintingDisabled)) {
            isSelected = true;
            ctx.fillStyle = DocSelection.$Colors.focus;
            ctx.fillRect(~~(layout.innerLeft - scrollLeft), ~~(layout.innerTop - scrollTop), ~~layout.innerWidth, ~~layout.innerHeight);
        }
        this.isPaintedSelected = isSelected;
        if ((borderWidth = this.style.borderWidth())) {
            borderColor = this.style.borderColor();
            if (borderColor) {
                ctx.strokeStyle = borderColor;
                ctx.lineWidth = borderWidth;
                ctx.beginPath();
                ctx.strokeRect(layout.offsetLeft + (borderWidth / 2) - scrollLeft, layout.offsetTop + (borderWidth / 2) - scrollTop, layout.offsetWidth - borderWidth, layout.offsetHeight - borderWidth);
                ctx.closePath();
            }
            if (this.isOrphanElement() && !range.focusNode() && range.anchorNode().target == this) {
                // paint a caret inside this element
                ctx.fillStyle = '#000';
                ctx.fillRect(layout.innerLeft - scrollLeft + (this.style.textAlign() == 'center' ? (this.layout.innerWidth / 2) : (this.style.textAlign() == 'right' ? this.layout.innerWidth - 2 : 0)), layout.innerTop - scrollTop + 1, 2, this.style.fontSize() * this.style.lineHeight());
            }
        }
        else {
            if (this.isOrphanElement()) {
                ctx.strokeStyle = '#ddd';
                ctx.lineWidth = 1;
                ctx.save();
                if (ctx.setLineDash) {
                    ctx.setLineDash([1, 2]);
                }
                ctx.beginPath();
                ctx.strokeRect(layout.offsetLeft + .5 - scrollLeft, layout.offsetTop + .5 - scrollTop, layout.offsetWidth - 1, layout.offsetHeight - 1);
                ctx.closePath();
                ctx.restore();
                if (!range.focusNode() && range.anchorNode().target == this) {
                    // paint a caret inside this element
                    ctx.fillStyle = '#000';
                    ctx.fillRect(layout.innerLeft - scrollLeft + (this.style.textAlign() == 'center' ? (this.layout.innerWidth / 2) : (this.style.textAlign() == 'right' ? this.layout.innerWidth - 2 : 0)), layout.innerTop - scrollTop + 1, 2, this.style.fontSize() * this.style.lineHeight());
                }
            }
        }
        if ((backgroundColor = this.style.backgroundColor()) && !isSelected) {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(layout.offsetLeft + borderWidth - scrollLeft, layout.offsetTop + borderWidth - scrollTop, layout.offsetWidth - 2 * borderWidth, layout.offsetHeight - 2 * borderWidth);
        }
    };
    TNode_Element.prototype.paintResizeHandles = function (ctx, layout, scrollLeft, scrollTop) {
        var left = layout.offsetLeft - scrollLeft, top = layout.offsetTop - scrollTop, rng = this.documentElement.viewport.selection.getRange();
        if (!rng.focusNode() && rng.anchorNode().target == this) {
            ctx.fillStyle = '#000';
            ctx.fillRect(left, top, 4, 4);
            ctx.fillRect(left + layout.offsetWidth - 4, top, 4, 4);
            ctx.fillRect(left, top + layout.offsetHeight - 4, 4, 4);
            ctx.fillRect(left + layout.offsetWidth - 4, top + layout.offsetHeight - 4, 4, 4);
        }
    };
    TNode_Element.prototype.isSelected = function () {
        if (this.documentElement) {
            var rng = this.documentElement.viewport.selection.getRange(), focus = rng.focusNode(), anchor = rng.anchorNode();
            return !focus && anchor.target == this;
        }
        else
            return false;
    };
    TNode_Element.prototype.getResizerTypeAtMousePoint = function (point) {
        // set mouse shape, depending on which corer of the element is the mouse over
        if (this.isResizable && this.layout) {
            var left = ~~this.layout.offsetLeft, top = ~~this.layout.offsetTop, width = ~~this.layout.offsetWidth, height = ~~this.layout.offsetHeight;
            switch (true) {
                case point.x >= left && point.x <= left + 4 && point.y >= top && point.y <= top + 4:
                    return 0 /* NW */;
                    break;
                case point.x >= left + width - 4 && point.x <= left + width && point.y >= top && point.y <= top + 4:
                    return 1 /* NE */;
                    break;
                case point.x >= left && point.x <= left + 4 && point.y >= top + height - 4 && point.y <= top + height:
                    return 2 /* SW */;
                    break;
                case point.x >= left + width - 4 && point.x <= left + width && point.y >= top + height - 4 && point.y <= top + height:
                    return 3 /* SE */;
                    break;
                case point.x == left + 1:
                    return 6 /* W */;
                    break;
                case point.x == left + width - 1:
                    return 7 /* E */;
                    break;
                case point.y == top + 1:
                    return 4 /* N */;
                    break;
                case point.y == top + height - 1:
                    return 5 /* S */;
                    break;
                default:
                    return 8 /* NONE */;
            }
        }
        else {
            return 8 /* NONE */;
        }
    };
    TNode_Element.prototype.onmousemove = function (point, button, driver) {
        return false;
    };
    TNode_Element.prototype.onmousedown = function (point, button, driver) {
        return false;
    };
    // makes the array of nodes @nodesList childNodes of this element.
    // if @scope is null, the contents of this element will be erased before.
    // if @scope is NOT null, the setInnerNodes method will be executed on
    //    @scope instead of this element.
    TNode_Element.prototype.setInnerNodes = function (nodesList, scope) {
        if (scope === void 0) { scope = null; }
        var len = this.childNodes.length, i = 0, j = 0, n = 0, clearNodes = scope === null, node = null, nodeName = '';
        scope = scope || this;
        if (clearNodes)
            scope.childNodes.splice(0, len); // clear the child nodes of this element
        for (i = 0, len = nodesList.length; i < len; i++) {
            switch (nodesList[i].type) {
                case 'node':
                    nodeName = nodesList[i].nodeName;
                    if (HTML_Body.IGNORE_ELEMENTS.indexOf(nodeName) == -1) {
                        if (HTML_Body.TRAVERSE_ELEMENTS.indexOf(nodeName) == -1) {
                            node = scope.documentElement.createElement(nodeName);
                            scope.appendChild(node);
                            if (nodesList[i].attributes && (n = nodesList[i].attributes.length)) {
                                for (j = 0; j < n; j++) {
                                    node.setAttribute(nodesList[i].attributes[j].name, nodesList[i].attributes[j].value);
                                }
                            }
                        }
                        else {
                            node = scope;
                        }
                        if (nodesList[i].children && nodesList[i].children.length) {
                            node.setInnerNodes(nodesList[i].children, node);
                        }
                    }
                    break;
                case '#text':
                    if (nodesList[i].value)
                        scope.appendChild(scope.documentElement.createTextNode(nodesList[i].value));
                    break;
                default:
                    break;
            }
        }
    };
    TNode_Element.prototype.setAttribute = function (attributeName, attributeValue) {
        if (attributeName === void 0) { attributeName = ''; }
        if (attributeValue === void 0) { attributeValue = null; }
        switch (attributeName) {
            case 'id':
                this.id = String(attributeValue || '');
                break;
            case 'class':
                this.className = String(attributeValue || '');
                break;
            case 'align':
                this.style.textAlign(String(attributeValue || ''));
                break;
            case 'color':
                this.style.color(String(attributeValue || ''));
                break;
            case 'width':
                this.style.width(String(attributeValue || ''));
                break;
            case 'height':
                this.style.height(String(attributeValue || ''));
                break;
            case 'margin':
                this.style.margin(String(attributeValue || ''));
                break;
            case 'bgcolor':
                this.style.backgroundColor(String(attributeValue || ''));
                break;
        }
    };
    TNode_Element.prototype.satisfiesQuery = function (query) {
        var cond, cursor;
        for (var k in query) {
            if (query[k] === true) {
                cond = !!query[k] == this[k];
            }
            else {
                switch (true) {
                    case k == 'parentNode':
                        cond = !!this.parentNode && this.parentNode.satisfiesQuery(query.parentNode) ? true : false;
                        break;
                    case k == 'anyParentNode':
                        cond = false;
                        cursor = this.parentNode;
                        while (cursor) {
                            if (cursor.satisfiesQuery(query.anyParentNode)) {
                                cond = true;
                                break;
                            }
                            cursor = cursor.parentNode;
                        }
                        break;
                    default:
                        cond = query[k] == this[k];
                        break;
                }
            }
            if (cond == false)
                return false;
        }
        return true;
    };
    /* queryElements( {
            "nodeName": "p",
            "childNodes": true
       } )
    */
    TNode_Element.prototype.queryAll = function (query, pushIn) {
        if (pushIn === void 0) { pushIn = null; }
        pushIn = pushIn || new TNode_Collection();
        query = query || {};
        for (var i = 0, len = this.childNodes.length; i < len; i++) {
            if (this.childNodes[i].nodeType == 2 /* ELEMENT */) {
                if (this.childNodes[i].satisfiesQuery(query)) {
                    pushIn.add(this.childNodes[i]);
                }
                this.childNodes[i].queryAll(query, pushIn);
            }
        }
        return pushIn;
    };
    TNode_Element.prototype.query = function (query) {
        var sub;
        query = query || {};
        if (this.satisfiesQuery(query)) {
            return this;
        }
        else {
            for (var i = 0, len = this.childNodes.length; i < len; i++) {
                if (this.childNodes[i].nodeType == 2 /* ELEMENT */) {
                    if (sub = this.childNodes[i].query(query)) {
                        return sub;
                    }
                }
            }
        }
        return null;
    };
    TNode_Element.prototype.bakeIntoFragment = function () {
        if (this.documentElement) {
            this.FRAGMENT_START = this.documentElement.fragment.length();
            this.documentElement.fragment.add(0 /* NODE_START */);
            var i = 0, len = 0;
            if (this.childNodes && (len = this.childNodes.length)) {
                for (i = 0; i < len; i++) {
                    this.childNodes[i].bakeIntoFragment();
                }
            }
            this.FRAGMENT_END = this.documentElement.fragment.length();
            this.documentElement.fragment.add(1 /* NODE_END */);
        }
    };
    TNode_Element.prototype.containsNode = function (node) {
        if (node && this.documentElement && node.documentElement && this.documentElement == node.documentElement) {
            this.documentElement.requestRelayoutNowIfNeeded();
            return node.FRAGMENT_START > this.FRAGMENT_START && node.FRAGMENT_START < this.FRAGMENT_END;
        }
        else
            return false;
    };
    /* Compares the document position between 2 nodes in DOM.
       negative values means the node is Before, positive values means the
       node is after
     */
    TNode_Element.prototype.compareDocumentPosition = function (node) {
        if (node && this.documentElement && node.documentElement && this.documentElement == node.documentElement) {
            this.documentElement.requestRelayoutNowIfNeeded();
            return this.FRAGMENT_START - node.FRAGMENT_START;
        }
        else
            return -1;
    };
    /* Recursively finds a node that is mapped to the document fragment
       at position @index.
     */
    TNode_Element.prototype.findNodeAtIndex = function (index) {
        var i = 0, len = 0, match;
        if (this.documentElement) {
            this.documentElement.requestRelayoutNowIfNeeded();
            if (index == this.FRAGMENT_START || index == this.FRAGMENT_END) {
                return this;
            }
            else if (index < this.FRAGMENT_START || index > this.FRAGMENT_END) {
                return null;
            }
            else {
                for (i = 0, len = this.childNodes.length; i < len; i++) {
                    if (this.childNodes && (len = this.childNodes.length)) {
                        if (this.childNodes[i].nodeType == 1 /* TEXT */) {
                            if (index >= this.childNodes[i].FRAGMENT_START && index <= this.childNodes[i].FRAGMENT_END) {
                                return this.childNodes[i];
                            }
                        }
                        else {
                            match = this.childNodes[i].findNodeAtIndex(index);
                            if (match !== null) {
                                return match;
                            }
                        }
                    }
                }
                return this;
            }
        }
        else
            return null;
    };
    // removes the empty text nodes from the element or this element if it has
    // no nodes.
    TNode_Element.prototype.removeOrphanNodes = function () {
        if (this.childNodes) {
            if (!this.childNodes.length) {
                this.remove();
            }
            else {
                for (var i = this.childNodes.length - 1; i >= 0; i--) {
                    if (this.childNodes[i].nodeType == 2 /* ELEMENT */) {
                        this.childNodes[i].removeOrphanNodes();
                    }
                    else {
                        if (this.childNodes[i].textContents() == '') {
                            this.childNodes[i].remove();
                        }
                    }
                }
                if (!this.childNodes.length) {
                    this.remove();
                }
            }
        }
    };
    /* If this is an element in which the user can write (p, td, h*, etc, ) returns
       this element, otherwise scans recursive the parents until it find one and
       returns it.
     */
    TNode_Element.prototype.ownerBlockElement = function () {
        if (this.isBlockTextNode) {
            return this;
        }
        else {
            if (this.parentNode) {
                return this.parentNode.ownerBlockElement();
            }
            else {
                return null;
            }
        }
    };
    /* A very special function. It cuts the element sub-tree until or deeper this element.
       This function is needed for inserting BR's, and for executing the "bold", "italic", etc commands.

       This function is executed on elements which contains text nodes or inline elements.

       @fragmentIndex: an index somewhere *between* node fragment start and node fragment end.

       @createNodeAfter: boolean: weather to create a node after this node, or to make the
                         surgery inside of the node

       @nodeNameAfter argument is taken in consideration only if 2nd argument is true:
            - if nodeNameAfter === null, a node with the same name as this node will be used.
            - otherwise, a node with a nodeNameAfter will be appended in this document.

        returns the FRAGMENT_START of the right cutted part.

        Note that some aspects of this function are hardcoded.

        Not invocable by the user.

        returns the fragment position of the surgeried position.

        The @hint setting should not be used by the user

    */
    TNode_Element.prototype.createSurgery = function (atFragmentIndex, createNodeAfter, nodeNameAfter, hint) {
        //console.info( 'surgery in ' + this.xmlBeginning() + " " + atFragmentIndex + ", bounds are: " + this.FRAGMENT_START + "," + this.FRAGMENT_END );
        if (createNodeAfter === void 0) { createNodeAfter = true; }
        if (nodeNameAfter === void 0) { nodeNameAfter = null; }
        if (hint === void 0) { hint = 0 /* NONE */; }
        var splitNode, lParent, rParent = null, t1 = '', t2 = '', leftCol, rightCol, rNode, whiteSpace = hint == 0 /* NONE */ ? ' ' : '';
        if (atFragmentIndex <= this.FRAGMENT_START || atFragmentIndex >= this.FRAGMENT_END) {
            if (atFragmentIndex <= this.FRAGMENT_START) {
                atFragmentIndex = this.FRAGMENT_START + 1;
            }
            else if (atFragmentIndex >= this.FRAGMENT_END) {
                atFragmentIndex = this.FRAGMENT_END - 1;
            }
        }
        if ((atFragmentIndex == this.FRAGMENT_START + 1) && createNodeAfter === false) {
            return atFragmentIndex;
        }
        if ((atFragmentIndex == this.FRAGMENT_END - 1)) {
            if (createNodeAfter === false) {
                return atFragmentIndex;
            }
            else {
                if (nodeNameAfter === null) {
                    rParent = this.documentElement.createElement(nodeNameAfter);
                }
                else {
                    rParent = this.clone();
                }
                rParent.appendChild(this.documentElement.createTextNode(whiteSpace));
                this.parentNode.appendChild(rParent, this.siblingIndex + 1);
                this.documentElement.relayout(true);
                return rParent.FRAGMENT_START;
            }
        }
        // find the exact element which has the atFragmentIndex position
        splitNode = this.findNodeAtIndex(atFragmentIndex);
        // avoid spliting the TNodeText inside br tags. ( split after ).
        if (splitNode.nodeType == 1 /* TEXT */ && splitNode.isBR) {
            splitNode = splitNode.parentNode;
            atFragmentIndex = splitNode.FRAGMENT_END;
        }
        if (splitNode.nodeType == 1 /* TEXT */ && splitNode.FRAGMENT_START != atFragmentIndex && splitNode.FRAGMENT_END + 1 != atFragmentIndex) {
            // we split at text
            t1 = splitNode.textContentsFragment(splitNode.FRAGMENT_START, atFragmentIndex - 1);
            t2 = splitNode.textContentsFragment(atFragmentIndex, splitNode.FRAGMENT_END);
            leftCol = new TNode_Collection([splitNode]);
            rightCol = new TNode_Collection(splitNode.elementsAfterMyself(true));
            rightCol.addFirst(this.documentElement.createTextNode(t2 || whiteSpace));
            splitNode.textContents(t1 || whiteSpace);
            splitNode.parentNode.appendChild(rightCol.at(0), splitNode.siblingIndex + 1);
            lParent = splitNode.parentNode;
            rParent = lParent.clone();
            rightCol = rightCol.wrapIn(rParent);
            leftCol = leftCol.wrapIn(lParent);
        }
        else {
            // we split before or after an element
            if (atFragmentIndex == splitNode.FRAGMENT_START) {
                //before
                leftCol = new TNode_Collection(splitNode.elementsBeforeMyself(false));
                rightCol = new TNode_Collection(splitNode.elementsAfterMyself(true));
            }
            else {
                leftCol = new TNode_Collection(splitNode.elementsBeforeMyself(true));
                rightCol = new TNode_Collection(splitNode.elementsAfterMyself(false));
            }
            lParent = splitNode.parentNode;
            rParent = lParent.clone();
            rightCol.wrapIn(rParent);
        }
        while (lParent != this) {
            leftCol = new TNode_Collection(lParent.elementsBeforeMyself(true));
            rightCol = new TNode_Collection(lParent.elementsAfterMyself(false));
            rightCol.addFirst(rParent);
            rParent = lParent.parentNode.clone();
            rightCol.wrapIn(rParent);
            lParent = lParent.parentNode;
        }
        //console.log( rightCol );
        if (createNodeAfter) {
            if (nodeNameAfter === null || nodeNameAfter == this.nodeName) {
            }
            else {
                (rightCol = new TNode_Collection(rParent.childNodes)).wrapIn(rParent = this.documentElement.createElement(nodeNameAfter));
                rightCol.wrapIn(rParent);
            }
            this.parentNode.appendChild(rParent, this.siblingIndex + 1);
            if (rParent.innerHTML() == '') {
                rParent.removeAllChildNodes();
                if (whiteSpace)
                    rParent.appendChild(this.documentElement.createTextNode(whiteSpace));
            }
        }
        else {
            rightCol = new TNode_Collection(rParent.childNodes);
            // append all the contents of the rParent to myself
            rightCol.wrapIn(this);
            this.documentElement.relayout(true);
            if (rightCol.length) {
                return rightCol.at(0).FRAGMENT_START;
            }
            else {
                return this.FRAGMENT_END - 1;
            }
        }
        if (this.innerHTML() == '') {
            this.removeAllChildNodes();
            if (whiteSpace)
                this.appendChild(this.documentElement.createTextNode(whiteSpace));
        }
        // force a document relayout, mandatory!
        this.documentElement.relayout(true);
        return rParent.FRAGMENT_START;
    };
    /* Takes moves the contents of the @element inside this element, and removes the @element afterwards
     */
    TNode_Element.prototype.mergeWith = function (element) {
        if (this.isMergeable && element.isMergeable) {
            if (element.nodeName != 'br' && element.childNodes && element.childNodes.length) {
                var nodes = Array.prototype.slice.call(element.childNodes, 0), i = 0, len = nodes.length;
                for (i = 0; i < len; i++) {
                    this.appendChild(nodes[i]);
                }
            }
            element.remove();
        }
        else {
            throw "ERR_CANNOT_MERGE_ELEMENTS";
        }
    };
    /* Returns the last child Node of the element */
    TNode_Element.prototype.lastChild = function () {
        return !this.childNodes ? null : (this.childNodes[this.childNodes.length - 1] || null);
    };
    /* Returns the first child Node of the element */
    TNode_Element.prototype.firstChild = function () {
        return !this.childNodes ? null : (this.childNodes[0] || null);
    };
    /* When the user press Delete or Backspace key, and this element is Focused,
       and selection is of type NODE, this function implements what happens then
     */
    TNode_Element.prototype.removeFromDOMAtUserCommand = function () {
        if (this.style.display() == 'block' && this != this.documentElement) {
            this.remove();
            return true;
        }
    };
    /* Removes all the child nodes of the element */
    TNode_Element.prototype.removeAllChildNodes = function () {
        if (this.childNodes) {
            for (var i = this.childNodes.length - 1; i >= 0; i--) {
                this.removeChild(this.childNodes[i]);
            }
        }
    };
    /* Moves all the direct child nodes of this element in the element parent, insertion
       being made after the element.

       After the unwrapping, the element (this) is removed from the DOM.
     */
    TNode_Element.prototype.unwrap = function () {
        var collection = new TNode_Collection([]);
        //append my child nodes after me...
        if (this.parentNode) {
            this.parentNode.appendCollection(collection = new TNode_Collection(this.childNodes), this.siblingIndex + 1);
            this.remove();
        }
        else {
            collection = new TNode_Collection(this.childNodes);
        }
        return collection;
    };
    /* Returns the node name minus the "!" sign at is's beginning, if it's the case */
    TNode_Element.prototype.nodeNameWithoutNegation = function () {
        if (this.nodeName[0] == '!') {
            return this.nodeName.slice(1);
        }
        else {
            return this.nodeName;
        }
    };
    /* Returns true if element negates other element */
    TNode_Element.prototype.negates = function (node) {
        return ((~~this.isNegation + ~~node.isNegation) == 1) && (node.nodeNameWithoutNegation() == this.nodeNameWithoutNegation());
    };
    /* - Attempts to create an optized version of DOM for a node.
       - Remove unnecessary negation nodes
       @param removeOrphans should not be used.
     */
    TNode_Element.prototype.defragment = function (removeOrphans) {
        if (removeOrphans === void 0) { removeOrphans = true; }
        if (!this.childNodes) {
            return;
        }
        if (removeOrphans) {
            this.removeOrphanNodes();
        }
        var i = 0, len = this.childNodes.length, returnValue = 0;
        if (this.childNodes.length == 1 && this.childNodes[0].nodeType == 2 /* ELEMENT */) {
            if (this.childNodes[0].negates(this)) {
                returnValue = this.childNodes[0].childNodes.length - 1;
                this.parentNode.appendCollection(new TNode_Collection(this.childNodes[0].childNodes), this.siblingIndex + 1);
                this.remove();
                return returnValue;
            }
        }
        if (len != 1) {
            for (i = len - 1; i >= 1; i--) {
                if (this.childNodes[i].nodeType == 1 /* TEXT */ && this.childNodes[i - 1].nodeType == 1 /* TEXT */) {
                    this.childNodes[i - 1].textContents(this.childNodes[i - 1].textContents() + this.childNodes[i].textContents());
                    this.childNodes[i].remove();
                }
                else {
                    if (this.childNodes[i].nodeType == 2 /* ELEMENT */) {
                        if (this.childNodes[i - 1].nodeType == 2 /* ELEMENT */) {
                            if (this.childNodes[i].nodeName == this.childNodes[i - 1].nodeName && this.childNodes[i].isDefragmentable && this.childNodes[i].canDefragmentWith(this.childNodes[i - 1]))
                                this.childNodes[i - 1].mergeWith(this.childNodes[i]);
                            else
                                len += this.childNodes[i].defragment(false);
                        }
                        else
                            len += this.childNodes[i].defragment(false);
                    }
                }
            }
        }
        else {
            if (this.childNodes[0].nodeType == 2 /* ELEMENT */) {
                this.childNodes[i].defragment(false);
            }
        }
        return 0;
    };
    /* Returns the text contents of the element */
    TNode_Element.prototype.textContents = function (contents) {
        if (contents === void 0) { contents = null; }
        if (contents !== null) {
            throw "Setter not implemented";
        }
        else {
            if (!this.childNodes) {
                return '';
            }
            else {
                var i = 0, len = this.childNodes.length, out = [];
                for (i = 0; i < len; i++) {
                    if (this.childNodes[i].nodeType == 1 /* TEXT */) {
                        out.push(this.childNodes[i].textContents());
                    }
                    else {
                        out.push(this.childNodes[i].textContents());
                    }
                }
                return out.join('');
            }
        }
    };
    /* Returns an element with exactly the same settings like this.
       Should be overrided if needed.
     */
    TNode_Element.prototype.clone = function () {
        return this.documentElement.createElement(this.nodeName);
    };
    /* Used in the process of defragmentation, for disallowing a <font color="red"> to be merged with a <font color="blue">
     */
    TNode_Element.prototype.canDefragmentWith = function (element) {
        return true;
    };
    /* Morphs this element into another element */
    TNode_Element.prototype.becomeElement = function (elementName) {
        if (!this.parentNode) {
            throw "ERR_NO_PARENT_NODE";
        }
        else {
            if (elementName != 'li' && elementName != 'ul' && elementName != 'ol') {
                var result = this.documentElement.createElement(elementName);
                this.parentNode.appendChild(result, this.siblingIndex);
                result.mergeWith(this);
                return result;
            }
            else {
                var result = this.documentElement.createElement(['li', 'ul'].indexOf(elementName) >= 0 ? 'ul' : 'ol');
                this.parentNode.appendChild(result, this.siblingIndex);
                var li = (result.appendChild(this.documentElement.createElement('li')));
                li.mergeWith(this);
                li.parentNode.parentNode.mergeAdjacentLists();
                return li;
            }
        }
    };
    /* Merges <ul>...</ul><ul>...</ul> and <ol>...</ol><ol>...</ol> into single lists. */
    TNode_Element.prototype.mergeAdjacentLists = function () {
        for (var i = this.childNodes.length - 1; i > 0; i--) {
            if ((this.childNodes[i].nodeType == 2 /* ELEMENT */) && (this.childNodes[i - 1].nodeType == 2 /* ELEMENT */) && (this.childNodes[i].nodeName == this.childNodes[i - 1].nodeName) && ['ul', 'ol'].indexOf(this.childNodes[i].nodeName) >= 0) {
                this.childNodes[i - 1].mergeWith(this.childNodes[i]);
            }
            else if ((this.childNodes[i].nodeType == 2 /* ELEMENT */) && ['ul', 'ol'].indexOf(this.childNodes[i].nodeName) >= 0 && this.childNodes[i].childNodes.length == 0) {
                this.childNodes[i].remove();
            }
        }
    };
    TNode_Element.prototype.tabStop = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this._tabStop;
        }
        else {
            //setter
            this._tabStop = ~~value;
            this._tabStop = this._tabStop < 0 ? 0 : this._tabStop;
            if (this.documentElement) {
                this.documentElement.requestRelayout();
                this.documentElement.changeThrottler.run();
            }
            return this._tabStop;
        }
    };
    TNode_Element.prototype.allTextNodes = function () {
        var out = [], sub = [], i = 0, len = 0, j = 0, k = 0;
        if (this.childNodes && this.childNodes.length) {
            for (i = 0, len = this.childNodes.length; i < len; i++) {
                if (this.childNodes[i].nodeType == 1 /* TEXT */) {
                    out.push(this.childNodes[i]);
                }
                else {
                    sub = this.childNodes[i].allTextNodes();
                    if (k = sub.length) {
                        for (j = 0; j < k; j++) {
                            out.push(sub[j]);
                        }
                    }
                }
            }
            return out;
        }
        else {
            return [];
        }
    };
    TNode_Element.prototype.allSubElements = function () {
        var out = [], sub = [], i = 0, len = 0, j = 0, k = 0;
        if (this.childNodes && this.childNodes.length) {
            if (this.childNodes[i].nodeType == 2 /* ELEMENT */) {
                out.push(this.childNodes[i]);
                sub = this.childNodes[i].allSubElements();
                if (k = sub.length) {
                    for (j = 0; j < k; j++) {
                        out.push(sub[j]);
                    }
                }
            }
            return out;
        }
        else {
            return [];
        }
    };
    TNode_Element.prototype.createCaretTarget = function (atEnd) {
        if (atEnd === void 0) { atEnd = false; }
        if (!this.childNodes || !this.childNodes.length) {
            return null;
        }
        var textNodes = this.allTextNodes();
        if (!textNodes.length) {
            return null;
        }
        if (atEnd) {
            return new TRange_Target(textNodes[textNodes.length - 1], textNodes[textNodes.length - 1].FRAGMENT_END);
        }
        else {
            return new TRange_Target(textNodes[0], textNodes[0].FRAGMENT_START);
        }
    };
    return TNode_Element;
})(TNode);
var TNode_Collection = (function () {
    function TNode_Collection(addNodes) {
        if (addNodes === void 0) { addNodes = null; }
        this.nodes = [];
        this.parentNode = null; // will be used in TNode_Collection_Dettached later, but is declared here for wrapInElement/unwrapInElement
        this.leftSibling = null; // will be used in TNode_Collection_Dettached later, but is declared here for wrapInElement/unwrapInElement
        if (addNodes !== null) {
            for (var i = 0, len = addNodes.length; i < len; i++) {
                this.nodes.push(addNodes[i]);
            }
        }
    }
    TNode_Collection.prototype.isBlock = function (node) {
        var is = node.is();
        if (is == '#text') {
            return false;
        }
        else {
            if (TNode_Collection.BLOCK_NODES_LIST.indexOf(is) >= 0 && ['left', 'right'].indexOf(node.style.float()) == -1) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    TNode_Collection.prototype.isInline = function (node) {
        var is = node.is();
        if (is == '#text') {
            return true;
        }
        else {
            if (TNode_Collection.INLINE_NODES_LIST.indexOf(is) >= 0 || ['left', 'right'].indexOf(node.style.float()) >= 0) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    Object.defineProperty(TNode_Collection.prototype, "length", {
        get: function () {
            return this.nodes.length;
        },
        enumerable: true,
        configurable: true
    });
    TNode_Collection.prototype.each = function (callback) {
        if (callback) {
            for (var i = 0, len = this.nodes.length; i < len; i++) {
                if (this.nodes[i]) {
                    callback.call(this.nodes[i]);
                }
            }
        }
        return this;
    };
    TNode_Collection.prototype.add = function (node) {
        this.nodes.push(node);
    };
    TNode_Collection.prototype.addFirst = function (node) {
        this.nodes.splice(0, 0, node);
    };
    TNode_Collection.prototype.wrapIn = function (node) {
        for (var i = 0, len = this.nodes.length; i < len; i++) {
            node.appendChild(this.nodes[i]);
        }
        return new TNode_Collection([node]);
    };
    TNode_Collection.prototype.innerHTML = function () {
        var i = 0, len = this.nodes.length, out = [];
        for (i = 0; i < len; i++) {
            if (this.nodes[i].nodeType == 1 /* TEXT */) {
                out.push(this.nodes[i].textContents());
            }
            else {
                out.push(this.nodes[i].outerHTML());
            }
        }
        return out.join('');
    };
    TNode_Collection.prototype.at = function (index) {
        return this.nodes[index];
    };
    /* Finds a succession of nodes whose names are @nodeNameIs, remove it from this collection and
       returns them into a new subcollection. Original index for the first removed item is returned
       in the @index.
     */
    TNode_Collection.prototype.spliceByNodeName = function (nodeNameIs) {
        var i = 0, j = 0, len = 0, nodes = [], m = 0;
        for (i = 0, len = this.nodes.length; i < len; i++) {
            if (this.nodes[i].is() == nodeNameIs) {
                m = 1;
                for (j = i + 1; j < len; j++) {
                    if (this.nodes[j].is() == nodeNameIs) {
                        m++;
                    }
                    else {
                        break;
                    }
                }
                nodes = this.nodes.splice(i, m);
                return { "collection": new TNode_Collection(nodes), index: i };
            }
        }
        return null;
    };
    /* Finds a succession of inline nodes, remove them from this collection and
       returns them into a new subcollection. Original index for the first removed item is returned
       in the @index.
     */
    TNode_Collection.prototype.spliceByInlineNodes = function (minAfterLength, maxBeforeLength) {
        if (minAfterLength === void 0) { minAfterLength = 0; }
        if (maxBeforeLength === void 0) { maxBeforeLength = 0; }
        var i = 0, j = 0, len = this.nodes.length - maxBeforeLength, nodes = [], m = 0;
        for (i = minAfterLength; i < len; i++) {
            if (this.isInline(this.nodes[i])) {
                m = 1;
                for (j = i + 1; j < len; j++) {
                    if (this.isInline(this.nodes[j])) {
                        m++;
                    }
                    else {
                        break;
                    }
                }
                nodes = this.nodes.splice(i, m);
                return { "collection": new TNode_Collection(nodes), index: i };
            }
        }
        return null;
    };
    /* Finds a succession of inline nodes, remove them from this collection and
       returns them into a new subcollection. Original index for the first removed item is returned
       in the @index.
     */
    TNode_Collection.prototype.spliceByBlockNodes = function (minAfterLength, maxBeforeLength) {
        if (minAfterLength === void 0) { minAfterLength = 0; }
        if (maxBeforeLength === void 0) { maxBeforeLength = 0; }
        var i = 0, j = 0, len = this.nodes.length - maxBeforeLength, nodes = [], m = 0;
        for (i = minAfterLength; i < len; i++) {
            if (this.isBlock(this.nodes[i])) {
                m = 1;
                for (j = i + 1; j < len; j++) {
                    if (this.isBlock(this.nodes[j])) {
                        m++;
                    }
                    else {
                        break;
                    }
                }
                nodes = this.nodes.splice(i, m);
                return { "collection": new TNode_Collection(nodes), index: i };
            }
        }
        return null;
    };
    /* Needed for normalizeForHost function only */
    TNode_Collection.prototype.computeInlineStartNodes = function () {
        var i = 0, len = 0, inlineStartNodes = 0;
        for (i = 0, len = this.nodes.length; i < len; i++) {
            if (this.isInline(this.nodes[i])) {
                inlineStartNodes++;
            }
            else {
                break;
            }
        }
        return inlineStartNodes;
    };
    /* Normalize (prepares)the collection for being able to be inserted inside of a host element.
     * This method is used by Selection.insertHTML.
     */
    TNode_Collection.prototype.normalizeForHost = function (hostNodeName, unwrapNodes) {
        //console.warn( unwrapNodes );
        var doc = this.nodes.length ? this.nodes[0].documentElement : null, seq = null, wrap, inlineStartNodes = 0, inlineEndNodes = 0, len = 0, i = 0, j = 0, n = 0;
        if (doc === null) {
            return this;
        }
        while (seq = this.spliceByNodeName('td')) {
            wrap = doc.createElement('tr');
            Helper.spliceApply(this.nodes, seq.index, 0, [seq.collection.wrapIn(wrap).at(0)]);
        }
        while (seq = this.spliceByNodeName('tr')) {
            wrap = doc.createElement('table');
            wrap.setAttribute('border', '1');
            wrap.setAttribute('bordercolor', 'black');
            Helper.spliceApply(this.nodes, seq.index, 0, [seq.collection.wrapIn(wrap).at(0)]);
        }
        while (seq = this.spliceByNodeName('li')) {
            wrap = doc.createElement('ul');
            Helper.spliceApply(this.nodes, seq.index, 0, [seq.collection.wrapIn(wrap).at(0)]);
        }
        inlineStartNodes = this.computeInlineStartNodes();
        for (j = 0, n = unwrapNodes.length; j < n; j++) {
            this.unwrapFromElement(unwrapNodes[j], null, 0, inlineStartNodes - 1);
            inlineStartNodes = this.computeInlineStartNodes();
        }
        if (inlineStartNodes < len) {
            for (i = len - 1; i >= 0; i--) {
                if (this.isInline(this.nodes[i])) {
                    inlineEndNodes++;
                }
                else {
                    break;
                }
            }
        }
        if (hostNodeName == 'td') {
            this.unwrapFromElement('p', null, inlineStartNodes, this.nodes.length - inlineEndNodes, 'br', 'br');
            this.unwrapFromElement('table', null, inlineStartNodes, this.nodes.length - inlineEndNodes);
            this.unwrapFromElement('tr', null, inlineStartNodes, this.nodes.length - inlineEndNodes);
            this.unwrapFromElement('td', null, inlineStartNodes, this.nodes.length - inlineEndNodes, 'br', 'br');
        }
        else {
            while (seq = this.spliceByInlineNodes(inlineStartNodes, inlineEndNodes)) {
                wrap = doc.createElement('p');
                Helper.spliceApply(this.nodes, seq.index, 0, [seq.collection.wrapIn(wrap).at(0)]);
            }
        }
        inlineStartNodes = this.computeInlineStartNodes();
        this.normalizedInlineStartNodes = inlineStartNodes;
        this.normalizedInlineEndNodes = inlineEndNodes;
        return this;
    };
    /* @nodeName: THe element name which is search for unwrapping process.

       @iFunc: A function which is evaluated on the parentNode context (this=parentNode), which if returns false,
               aborts the unwrap process.

       @indexStart, @indexEnd: Unwrap in the root only between @indexStart and @indexEnd.

       @addNodeAfterUnwrap: After unwrapping a node *in the root*, insert a element with node name addNodeAfterUnwrap.
       This is needed for example if we want to unwrap the p's, but add a <br/> after each p.
     */
    TNode_Collection.prototype.unwrapFromElement = function (nodeName, ifFunc, indexStart, indexEnd, addNodeBeforeUnwrap, addNodeAfterUnwrap) {
        if (ifFunc === void 0) { ifFunc = null; }
        if (indexStart === void 0) { indexStart = null; }
        if (indexEnd === void 0) { indexEnd = null; }
        if (addNodeBeforeUnwrap === void 0) { addNodeBeforeUnwrap = null; }
        if (addNodeAfterUnwrap === void 0) { addNodeAfterUnwrap = null; }
        if (this.parentNode !== null && ifFunc !== null && !(ifFunc.call(this.parentNode))) {
            return;
        }
        var subWraps = [], i = 0, len = this.nodes.length, addLen = 0, subChildren = [], unwrapped, doc;
        if (indexStart === null) {
            indexStart = 0;
        }
        if (indexEnd === null) {
            indexEnd = len;
        }
        if (len == 0) {
            return;
        }
        doc = this.nodes[0].documentElement;
        for (i = indexStart; i < indexEnd; i++) {
            switch (this.nodes[i].nodeType) {
                case 1 /* TEXT */:
                    break;
                case 2 /* ELEMENT */:
                    if (this.nodes[i].nodeName == nodeName) {
                        if (addNodeBeforeUnwrap) {
                            this.nodes.splice(i, 0, doc.createElement(addNodeBeforeUnwrap));
                            i++;
                        }
                        unwrapped = this.nodes[i].unwrap();
                        Helper.spliceApply(this.nodes, i, 1, unwrapped.nodes);
                        if (addNodeAfterUnwrap) {
                            this.nodes.splice(i + unwrapped.nodes.length, 0, doc.createElement(addNodeAfterUnwrap));
                        }
                        indexEnd = this.nodes.length;
                        i += unwrapped.nodes.length + (addNodeAfterUnwrap ? 0 : -1);
                    }
                    break;
            }
        }
        for (i = indexStart; i < indexEnd; i++) {
            if (this.nodes[i].nodeType == 2 /* ELEMENT */) {
                this.nodes[i].queryAll({ "nodeName": nodeName }).each(function () {
                    this.unwrap();
                });
            }
        }
    };
    TNode_Collection.prototype.wrapInElement = function (nodeName, elAttributeName, elAttributeValue, ifFunc) {
        if (elAttributeName === void 0) { elAttributeName = null; }
        if (elAttributeValue === void 0) { elAttributeValue = null; }
        if (ifFunc === void 0) { ifFunc = null; }
        if (this.parentNode && ifFunc !== null && !(ifFunc.call(this.parentNode))) {
            return;
        }
        var node = this.parentNode.documentElement.createElement(nodeName), i = 0, len = this.nodes.length, j = 0, k = 0;
        if (elAttributeName !== null) {
            if (typeof elAttributeName == 'string') {
                node.setAttribute(elAttributeName, elAttributeValue || '');
            }
            else {
                if (elAttributeName && elAttributeValue && elAttributeName.length == elAttributeValue.length) {
                    for (j = 0, k = elAttributeName.length; j < k; j++) {
                        node.setAttribute(elAttributeName[j], elAttributeValue[j]);
                    }
                }
            }
        }
        for (i = 0; i < len; i++) {
            node.appendChild(this.nodes[i]);
        }
        this.nodes = [node];
        if (this.parentNode)
            this.parentNode.appendChild(node, this.leftSibling === null ? 0 : this.leftSibling.siblingIndex + 1);
    };
    TNode_Collection.prototype.splice = function (indexStart, length) {
        var out = this.nodes.splice(indexStart, length);
        return new TNode_Collection(out);
    };
    TNode_Collection.INLINE_NODES_LIST = [
        "#text",
        "a",
        "b",
        "!b",
        "i",
        "!i",
        "u",
        "!u",
        "strike",
        "!strike",
        "sup",
        "!sup",
        "sub",
        "!sub",
        "span",
        "color",
        "font",
        "size",
        "br",
        "source"
    ];
    TNode_Collection.BLOCK_NODES_LIST = [
        "body",
        "ul",
        "li",
        "ol",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "img",
        "table",
        "tr",
        "td",
        "blockquote",
        "video"
    ];
    return TNode_Collection;
})();
var TNode_Collection_Dettached = (function (_super) {
    __extends(TNode_Collection_Dettached, _super);
    function TNode_Collection_Dettached(parentNode, surgeryStart, surgeryEnd) {
        if (surgeryStart === void 0) { surgeryStart = 0; }
        if (surgeryEnd === void 0) { surgeryEnd = 0; }
        _super.call(this, []);
        this.surgeryStart = 0;
        this.surgeryEnd = 0;
        this.fragLTR = 0;
        this.fragRTL = 0;
        this.parentNode = parentNode;
        this.surgeryStart = Math.max(this.parentNode.FRAGMENT_START + 1, surgeryStart);
        this.surgeryEnd = Math.min(this.parentNode.FRAGMENT_END - 1, surgeryEnd) + 1;
        var i = 0, fragment = this.parentNode.documentElement.fragment, at = null;
        for (i = parentNode.FRAGMENT_START + 1; i < surgeryStart; i++) {
            at = fragment.at(i);
            if (at != 2 /* EOL */) {
                this.fragLTR++;
            }
        }
        for (i = parentNode.FRAGMENT_END - 1; i >= surgeryEnd; i--) {
            at = fragment.at(i);
            if (at != 2 /* EOL */) {
                this.fragRTL++;
            }
        }
    }
    TNode_Collection_Dettached.prototype.createSlices = function () {
        this.parentNode.createSurgery(this.surgeryEnd, false, null, 2 /* RIGHT */);
        this.parentNode.createSurgery(this.surgeryStart, false, null, 1 /* LEFT */);
    };
    TNode_Collection_Dettached.prototype.createRanges = function () {
        var at = null, fragment = this.parentNode.documentElement.fragment, i = 0, len = 0, computeLeftSibling = false, node;
        this.surgeryStart = this.parentNode.FRAGMENT_START;
        this.surgeryEnd = this.parentNode.FRAGMENT_END;
        i = 0;
        while (this.fragLTR > 0) {
            at = fragment.at(this.surgeryStart + i);
            if (at != 2 /* EOL */) {
                this.fragLTR--;
            }
            i++;
        }
        this.surgeryStart += i;
        i = 0;
        while (this.fragRTL > 0) {
            at = fragment.at(this.surgeryEnd - i);
            if (at != 2 /* EOL */) {
                this.fragRTL--;
            }
            i++;
        }
        this.surgeryEnd -= i;
        computeLeftSibling = true;
        for (i = 0, len = this.parentNode.childNodes.length; i < len; i++) {
            if (this.parentNode.childNodes[i].FRAGMENT_START >= this.surgeryStart && this.parentNode.childNodes[i].FRAGMENT_END <= this.surgeryEnd) {
                this.add(this.parentNode.childNodes[i]);
                if (computeLeftSibling) {
                    this.leftSibling = this.parentNode.childNodes[i - 1] || null;
                }
                computeLeftSibling = false;
            }
        }
    };
    TNode_Collection_Dettached.prototype.reInsert = function () {
        this.parentNode.appendCollection(this, this.leftSibling ? this.leftSibling.siblingIndex + 1 : 0);
        this.parentNode.removeOrphanNodes();
    };
    TNode_Collection_Dettached.prototype.toString = function (separator) {
        if (separator === void 0) { separator = ''; }
        var out = [], i = 0, len = this.nodes.length;
        for (i = 0; i < len; i++) {
            switch (this.nodes[i].nodeType) {
                case 1 /* TEXT */:
                    out.push(this.nodes[i].textContents());
                    break;
                default:
                    out.push(this.nodes[i].outerHTML());
                    break;
            }
        }
        return out.join(separator);
    };
    return TNode_Collection_Dettached;
})(TNode_Collection);
var HTMLParser = (function () {
    function HTMLParser(document, data) {
        this.document = document;
        this.NODES = [];
        this.loops = 0;
        if (data) {
            this.parse(data, null);
            this.removeWhiteSpaces(this.NODES);
        }
    }
    HTMLParser.prototype.removeWhiteSpaces = function (nodes) {
        var len = nodes.length, i = 0;
        for (i = len - 1; i >= 0; i--) {
            if (nodes[i].type == '#text' && nodes[i].value == ' ' && (i == 0 || i == len - 1 || nodes[i - 1] && nodes[i + 1] && nodes[i - 1].type != '#text' && nodes[i + 1].type != '#text')) {
                nodes.splice(i, 1);
            }
            else if (nodes[i].type == 'node' && nodes[i].children)
                this.removeWhiteSpaces(nodes[i].children);
        }
    };
    HTMLParser.READ_TEXT = function (data) {
        var matches = /^[^\<]+/.exec(data);
        if (matches) {
            return matches[0];
        }
        else
            return null;
    };
    HTMLParser.READ_ATTRIBUTE = function (data) {
        if (/^[\s]+$/.test(data))
            return null;
        var out = {
            "name": null,
            "value": null,
            "clearBuffer": null
        }, matches;
        if (matches = /^([\s]+)?([^\"\'\=\>]+)(\=([^\"\'\s>]+|\"[^\"]+\"|\'[^\']+')?)?([\s]+)?/.exec(data)) {
            out.name = matches[2];
            out.value = matches[4] || "";
            out.clearBuffer = matches[0];
            if (out.value.length >= 2 && ((out.value[0] == '"' && out.value[out.value.length - 1] == '"') || (out.value[0] == "'" && out.value[out.value.length - 1] == "'"))) {
                out.value = out.value.substr(1, out.value.length - 2);
            }
            return out;
        }
        else
            return null;
    };
    HTMLParser.HAS_ATTRIBUTE = function (node, attributeName) {
        for (var i = 0, len = node.attributes.length; i < len; i++) {
            if (node.attributes[i].name == attributeName && node.attributes[i].value) {
                return true;
            }
        }
        return false;
    };
    HTMLParser.GET_ATTRIBUTE = function (node, attributeName) {
        for (var i = 0, len = node.attributes.length; i < len; i++) {
            if (node.attributes[i].name == attributeName) {
                return String(node.attributes[i].value || '');
            }
        }
        return '';
    };
    HTMLParser.SET_ATTRIBUTE = function (node, attributeName, attributeValue) {
        for (var i = 0, len = node.attributes.length; i < len; i++) {
            if (node.attributes[i].name == attributeName) {
                if (attributeValue === null) {
                    node.attributes.splice(i, 1);
                    return;
                }
                else {
                    node.attributes[i].value = String(attributeValue || '');
                    return;
                }
            }
        }
        if (attributeValue !== null) {
            node.attributes.push({
                "name": String(attributeName || ''),
                "value": String(attributeValue || '')
            });
        }
    };
    HTMLParser.READ_NODE = function (data, doc) {
        var out = {
            "nodeName": "",
            "autoClose": false,
            "clearBuffer": "",
            "attributes": [],
            "children": [],
            "overrideNodeName": null
        }, matches, matches1, matches2, attribute, textContents = '', r, insensitive = true, overrideNodeName = null, dataTagAttribute = '', dataTagAttributeValue = '';
        if (matches = /^\<([^\s\>\/]+)([^\>]+)?\>/.exec(data)) {
            out.clearBuffer = matches[0];
            if (matches[1] && /\/$/.test(matches[1])) {
                matches[1] = matches[1].substr(0, matches[1].length - 1);
                out.autoClose = true;
            }
            out.nodeName = insensitive ? matches[1].toLowerCase() : matches[1];
            if (!out.autoClose && HTML_Body.AUTOCLOSE_TAGS.indexOf(out.nodeName) >= 0)
                out.autoClose = true;
            if (matches[2]) {
                if (/\/$/.test(matches[2]))
                    matches[2] = matches[2].substr(0, matches[2].length - 1);
                while (matches[2] && (attribute = HTMLParser.READ_ATTRIBUTE(matches[2]))) {
                    matches[2] = matches[2].substr(attribute.clearBuffer.length);
                    out.attributes.push({ "name": attribute.name, "value": attribute.value });
                }
            }
            if (out.nodeName == 'span') {
                /* We override the spans, if they have the data-tag set, with their internal node names */
                dataTagAttribute = HTMLParser.GET_ATTRIBUTE(out, 'data-tag');
                switch (true) {
                    case dataTagAttribute == '!b':
                    case dataTagAttribute == '!i':
                    case dataTagAttribute == '!u':
                    case dataTagAttribute == '!strike':
                    case dataTagAttribute == '!sub':
                    case dataTagAttribute == '!sup':
                        overrideNodeName = dataTagAttribute;
                        HTMLParser.SET_ATTRIBUTE(out, 'data-tag', null);
                        break;
                    case (matches2 = /^(color|font|size)\:(.*)?$/.exec(dataTagAttribute)) ? true : false:
                        HTMLParser.SET_ATTRIBUTE(out, 'data-tag', null);
                        dataTagAttribute = matches2[1];
                        dataTagAttributeValue = matches2[2] || '';
                        overrideNodeName = dataTagAttribute;
                        if (dataTagAttributeValue) {
                            switch (dataTagAttribute) {
                                case 'font':
                                    HTMLParser.SET_ATTRIBUTE(out, 'name', dataTagAttributeValue);
                                    break;
                                case 'color':
                                    HTMLParser.SET_ATTRIBUTE(out, 'name', dataTagAttributeValue);
                                    break;
                                case 'size':
                                    HTMLParser.SET_ATTRIBUTE(out, 'value', dataTagAttributeValue);
                                    break;
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
            /* If the node is one of type with unescaped text, read it's text content,
               append a child text node inside it, set autoClose to false, and return up
               to the close tag
            */
            if (HTML_Body.FORCE_TEXT_NODES.indexOf(out.nodeName) >= 0 && !out.autoClose) {
                r = new RegExp('([\\s\\S]+)?<\\/' + out.nodeName + '([\s]+)?>', insensitive ? 'i' : '');
                matches1 = r.exec(data.substr(matches[0].length));
                if (matches1) {
                    textContents = matches1[1];
                    out.clearBuffer = out.clearBuffer.concat(textContents);
                    out.children.push({
                        "type": "#text",
                        "value": textContents
                    });
                }
                else {
                    // consider all the text upto the end of the string is the text contents of this node
                    out.clearBuffer = data;
                }
            }
            if (overrideNodeName) {
                out.overrideNodeName = overrideNodeName;
            }
            return out;
        }
        else
            return null;
    };
    HTMLParser.READ_END_NODE = function (data, nodeName, doc) {
        if (!data)
            throw "ERR_UNEXPECTED_END_OF_BUFFER";
        var matches;
        if (matches = (new RegExp('^<\\/' + nodeName + '([\\s]+)?>', 'i')).exec(data)) {
            return matches[0];
        }
        else
            return null;
    };
    HTMLParser.READ_COMMENT = function (data) {
        var matches;
        if (matches = /^<\!--([\s\S]+)?\-\-\>/.exec(data)) {
            return {
                "value": matches[1] || '',
                "clearBuffer": matches[0]
            };
        }
        else
            return null;
    };
    HTMLParser.READ_CDATA = function (data) {
        var matches;
        if (matches = /^\<\!\[CDATA\[([\s\S]+)?\]\]\>/.exec(data)) {
            return {
                "value": matches[1] || '',
                "clearBuffer": matches[0]
            };
        }
        else
            return null;
    };
    HTMLParser.prototype.parse = function (data, pushIn) {
        this.loops++;
        if (this.loops > 1000000)
            throw "ERR_DOCUMENT_TOO_BIG";
        var token1 = '', token2 = {}, token3 = '', subData = '';
        pushIn = pushIn || null;
        if (pushIn === null) {
            this.NODES = [];
            this.loops = 1;
            pushIn = this.NODES;
            data;
        }
        while (data) {
            if ((token1 = HTMLParser.READ_TEXT(data)) !== null) {
                pushIn.push({
                    "type": "#text",
                    "value": token1.replace(/[\s]/g, ' ').replace(/[\s]+/g, ' ').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
                });
                data = data.substr(token1.length);
            }
            else {
                if ((token2 = HTMLParser.READ_COMMENT(data)) !== null) {
                    token2.type = 'comment';
                    data = data.substr(token2.clearBuffer.length);
                    delete token2.clearBuffer;
                    pushIn.push(token2);
                }
                else {
                    if ((token2 = HTMLParser.READ_CDATA(data)) !== null) {
                        token2.type = 'cdata';
                        data = data.substr(token2.clearBuffer.length);
                        delete token2.clearBuffer;
                        pushIn.push(token2);
                    }
                    else {
                        if ((token2 = HTMLParser.READ_NODE(data, this.document)) !== null) {
                            token2.type = 'node';
                            pushIn.push(token2);
                            data = data.substr(token2['clearBuffer'].length);
                            delete token2.clearBuffer;
                            if (!token2['autoClose']) {
                                while (!(token3 = HTMLParser.READ_END_NODE(data, token2.nodeName, this.document))) {
                                    subData = this.parse(data, token2.children);
                                    if (subData != data) {
                                        data = subData;
                                    }
                                    else {
                                        token3 = '';
                                        break;
                                    }
                                }
                                if (token2.overrideNodeName) {
                                    token2.nodeName = token2.overrideNodeName;
                                }
                                data = data.substr(token3.length);
                            }
                        }
                        else
                            return data;
                    }
                }
            }
        }
        return data;
    };
    HTMLParser.encodeOptions = {
        'allowUnsafeSymbols': false,
        'encodeEverything': false,
        'strict': false,
        'useNamedReferences': false
    };
    HTMLParser.decodeOptions = {
        'isAttributeValue': false,
        'strict': false
    };
    HTMLParser.encode = null;
    HTMLParser.decode = null;
    HTMLParser.escape = null;
    return HTMLParser;
})();
(function () {
    // THE FOLLOWING CODE IS ADAPTED FROM PROJECT he => https://github.com/mathiasbynens/he,
    // WHICH COMES WITH A MIT LICENSE.
    // CREDITS FOR THIS CODE SHOULD BE GIVEN TO Mathias Bynens => https://mathiasbynens.be/
    var 
    // All astral symbols.
    regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, 
    // All ASCII symbols (not just printable ASCII) except those listed in the
    // first column of the overrides table.
    // https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
    regexAsciiWhitelist = /[\x01-\x7F]/g, 
    // All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
    // code points listed in the first column of the overrides table on
    // https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
    regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g, encodeMap = {
        '\xC1': 'Aacute',
        '\xE1': 'aacute',
        '\u0102': 'Abreve',
        '\u0103': 'abreve',
        '\u223E': 'ac',
        '\u223F': 'acd',
        '\u223E\u0333': 'acE',
        '\xC2': 'Acirc',
        '\xE2': 'acirc',
        '\xB4': 'acute',
        '\u0410': 'Acy',
        '\u0430': 'acy',
        '\xC6': 'AElig',
        '\xE6': 'aelig',
        '\u2061': 'af',
        '\uD835\uDD04': 'Afr',
        '\uD835\uDD1E': 'afr',
        '\xC0': 'Agrave',
        '\xE0': 'agrave',
        '\u2135': 'aleph',
        '\u0391': 'Alpha',
        '\u03B1': 'alpha',
        '\u0100': 'Amacr',
        '\u0101': 'amacr',
        '\u2A3F': 'amalg',
        '&': 'amp',
        '\u2A55': 'andand',
        '\u2A53': 'And',
        '\u2227': 'and',
        '\u2A5C': 'andd',
        '\u2A58': 'andslope',
        '\u2A5A': 'andv',
        '\u2220': 'ang',
        '\u29A4': 'ange',
        '\u29A8': 'angmsdaa',
        '\u29A9': 'angmsdab',
        '\u29AA': 'angmsdac',
        '\u29AB': 'angmsdad',
        '\u29AC': 'angmsdae',
        '\u29AD': 'angmsdaf',
        '\u29AE': 'angmsdag',
        '\u29AF': 'angmsdah',
        '\u2221': 'angmsd',
        '\u221F': 'angrt',
        '\u22BE': 'angrtvb',
        '\u299D': 'angrtvbd',
        '\u2222': 'angsph',
        '\xC5': 'angst',
        '\u237C': 'angzarr',
        '\u0104': 'Aogon',
        '\u0105': 'aogon',
        '\uD835\uDD38': 'Aopf',
        '\uD835\uDD52': 'aopf',
        '\u2A6F': 'apacir',
        '\u2248': 'ap',
        '\u2A70': 'apE',
        '\u224A': 'ape',
        '\u224B': 'apid',
        '\'': 'apos',
        '\xE5': 'aring',
        '\uD835\uDC9C': 'Ascr',
        '\uD835\uDCB6': 'ascr',
        '\u2254': 'colone',
        '*': 'ast',
        '\u224D': 'CupCap',
        '\xC3': 'Atilde',
        '\xE3': 'atilde',
        '\xC4': 'Auml',
        '\xE4': 'auml',
        '\u2233': 'awconint',
        '\u2A11': 'awint',
        '\u224C': 'bcong',
        '\u03F6': 'bepsi',
        '\u2035': 'bprime',
        '\u223D': 'bsim',
        '\u22CD': 'bsime',
        '\u2216': 'setmn',
        '\u2AE7': 'Barv',
        '\u22BD': 'barvee',
        '\u2305': 'barwed',
        '\u2306': 'Barwed',
        '\u23B5': 'bbrk',
        '\u23B6': 'bbrktbrk',
        '\u0411': 'Bcy',
        '\u0431': 'bcy',
        '\u201E': 'bdquo',
        '\u2235': 'becaus',
        '\u29B0': 'bemptyv',
        '\u212C': 'Bscr',
        '\u0392': 'Beta',
        '\u03B2': 'beta',
        '\u2136': 'beth',
        '\u226C': 'twixt',
        '\uD835\uDD05': 'Bfr',
        '\uD835\uDD1F': 'bfr',
        '\u22C2': 'xcap',
        '\u25EF': 'xcirc',
        '\u22C3': 'xcup',
        '\u2A00': 'xodot',
        '\u2A01': 'xoplus',
        '\u2A02': 'xotime',
        '\u2A06': 'xsqcup',
        '\u2605': 'starf',
        '\u25BD': 'xdtri',
        '\u25B3': 'xutri',
        '\u2A04': 'xuplus',
        '\u22C1': 'Vee',
        '\u22C0': 'Wedge',
        '\u290D': 'rbarr',
        '\u29EB': 'lozf',
        '\u25AA': 'squf',
        '\u25B4': 'utrif',
        '\u25BE': 'dtrif',
        '\u25C2': 'ltrif',
        '\u25B8': 'rtrif',
        '\u2423': 'blank',
        '\u2592': 'blk12',
        '\u2591': 'blk14',
        '\u2593': 'blk34',
        '\u2588': 'block',
        '=\u20E5': 'bne',
        '\u2261\u20E5': 'bnequiv',
        '\u2AED': 'bNot',
        '\u2310': 'bnot',
        '\uD835\uDD39': 'Bopf',
        '\uD835\uDD53': 'bopf',
        '\u22A5': 'bot',
        '\u22C8': 'bowtie',
        '\u29C9': 'boxbox',
        '\u2510': 'boxdl',
        '\u2555': 'boxdL',
        '\u2556': 'boxDl',
        '\u2557': 'boxDL',
        '\u250C': 'boxdr',
        '\u2552': 'boxdR',
        '\u2553': 'boxDr',
        '\u2554': 'boxDR',
        '\u2500': 'boxh',
        '\u2550': 'boxH',
        '\u252C': 'boxhd',
        '\u2564': 'boxHd',
        '\u2565': 'boxhD',
        '\u2566': 'boxHD',
        '\u2534': 'boxhu',
        '\u2567': 'boxHu',
        '\u2568': 'boxhU',
        '\u2569': 'boxHU',
        '\u229F': 'minusb',
        '\u229E': 'plusb',
        '\u22A0': 'timesb',
        '\u2518': 'boxul',
        '\u255B': 'boxuL',
        '\u255C': 'boxUl',
        '\u255D': 'boxUL',
        '\u2514': 'boxur',
        '\u2558': 'boxuR',
        '\u2559': 'boxUr',
        '\u255A': 'boxUR',
        '\u2502': 'boxv',
        '\u2551': 'boxV',
        '\u253C': 'boxvh',
        '\u256A': 'boxvH',
        '\u256B': 'boxVh',
        '\u256C': 'boxVH',
        '\u2524': 'boxvl',
        '\u2561': 'boxvL',
        '\u2562': 'boxVl',
        '\u2563': 'boxVL',
        '\u251C': 'boxvr',
        '\u255E': 'boxvR',
        '\u255F': 'boxVr',
        '\u2560': 'boxVR',
        '\u02D8': 'breve',
        '\xA6': 'brvbar',
        '\uD835\uDCB7': 'bscr',
        '\u204F': 'bsemi',
        '\u29C5': 'bsolb',
        '\\': 'bsol',
        '\u27C8': 'bsolhsub',
        '\u2022': 'bull',
        '\u224E': 'bump',
        '\u2AAE': 'bumpE',
        '\u224F': 'bumpe',
        '\u0106': 'Cacute',
        '\u0107': 'cacute',
        '\u2A44': 'capand',
        '\u2A49': 'capbrcup',
        '\u2A4B': 'capcap',
        '\u2229': 'cap',
        '\u22D2': 'Cap',
        '\u2A47': 'capcup',
        '\u2A40': 'capdot',
        '\u2145': 'DD',
        '\u2229\uFE00': 'caps',
        '\u2041': 'caret',
        '\u02C7': 'caron',
        '\u212D': 'Cfr',
        '\u2A4D': 'ccaps',
        '\u010C': 'Ccaron',
        '\u010D': 'ccaron',
        '\xC7': 'Ccedil',
        '\xE7': 'ccedil',
        '\u0108': 'Ccirc',
        '\u0109': 'ccirc',
        '\u2230': 'Cconint',
        '\u2A4C': 'ccups',
        '\u2A50': 'ccupssm',
        '\u010A': 'Cdot',
        '\u010B': 'cdot',
        '\xB8': 'cedil',
        '\u29B2': 'cemptyv',
        '\xA2': 'cent',
        '\xB7': 'middot',
        '\uD835\uDD20': 'cfr',
        '\u0427': 'CHcy',
        '\u0447': 'chcy',
        '\u2713': 'check',
        '\u03A7': 'Chi',
        '\u03C7': 'chi',
        '\u02C6': 'circ',
        '\u2257': 'cire',
        '\u21BA': 'olarr',
        '\u21BB': 'orarr',
        '\u229B': 'oast',
        '\u229A': 'ocir',
        '\u229D': 'odash',
        '\u2299': 'odot',
        '\xAE': 'reg',
        '\u24C8': 'oS',
        '\u2296': 'ominus',
        '\u2295': 'oplus',
        '\u2297': 'otimes',
        '\u25CB': 'cir',
        '\u29C3': 'cirE',
        '\u2A10': 'cirfnint',
        '\u2AEF': 'cirmid',
        '\u29C2': 'cirscir',
        '\u2232': 'cwconint',
        '\u201D': 'rdquo',
        '\u2019': 'rsquo',
        '\u2663': 'clubs',
        ':': 'colon',
        '\u2237': 'Colon',
        '\u2A74': 'Colone',
        ',': 'comma',
        '@': 'commat',
        '\u2201': 'comp',
        '\u2218': 'compfn',
        '\u2102': 'Copf',
        '\u2245': 'cong',
        '\u2A6D': 'congdot',
        '\u2261': 'equiv',
        '\u222E': 'oint',
        '\u222F': 'Conint',
        '\uD835\uDD54': 'copf',
        '\u2210': 'coprod',
        '\xA9': 'copy',
        '\u2117': 'copysr',
        '\u21B5': 'crarr',
        '\u2717': 'cross',
        '\u2A2F': 'Cross',
        '\uD835\uDC9E': 'Cscr',
        '\uD835\uDCB8': 'cscr',
        '\u2ACF': 'csub',
        '\u2AD1': 'csube',
        '\u2AD0': 'csup',
        '\u2AD2': 'csupe',
        '\u22EF': 'ctdot',
        '\u2938': 'cudarrl',
        '\u2935': 'cudarrr',
        '\u22DE': 'cuepr',
        '\u22DF': 'cuesc',
        '\u21B6': 'cularr',
        '\u293D': 'cularrp',
        '\u2A48': 'cupbrcap',
        '\u2A46': 'cupcap',
        '\u222A': 'cup',
        '\u22D3': 'Cup',
        '\u2A4A': 'cupcup',
        '\u228D': 'cupdot',
        '\u2A45': 'cupor',
        '\u222A\uFE00': 'cups',
        '\u21B7': 'curarr',
        '\u293C': 'curarrm',
        '\u22CE': 'cuvee',
        '\u22CF': 'cuwed',
        '\xA4': 'curren',
        '\u2231': 'cwint',
        '\u232D': 'cylcty',
        '\u2020': 'dagger',
        '\u2021': 'Dagger',
        '\u2138': 'daleth',
        '\u2193': 'darr',
        '\u21A1': 'Darr',
        '\u21D3': 'dArr',
        '\u2010': 'dash',
        '\u2AE4': 'Dashv',
        '\u22A3': 'dashv',
        '\u290F': 'rBarr',
        '\u02DD': 'dblac',
        '\u010E': 'Dcaron',
        '\u010F': 'dcaron',
        '\u0414': 'Dcy',
        '\u0434': 'dcy',
        '\u21CA': 'ddarr',
        '\u2146': 'dd',
        '\u2911': 'DDotrahd',
        '\u2A77': 'eDDot',
        '\xB0': 'deg',
        '\u2207': 'Del',
        '\u0394': 'Delta',
        '\u03B4': 'delta',
        '\u29B1': 'demptyv',
        '\u297F': 'dfisht',
        '\uD835\uDD07': 'Dfr',
        '\uD835\uDD21': 'dfr',
        '\u2965': 'dHar',
        '\u21C3': 'dharl',
        '\u21C2': 'dharr',
        '\u02D9': 'dot',
        '`': 'grave',
        '\u02DC': 'tilde',
        '\u22C4': 'diam',
        '\u2666': 'diams',
        '\xA8': 'die',
        '\u03DD': 'gammad',
        '\u22F2': 'disin',
        '\xF7': 'div',
        '\u22C7': 'divonx',
        '\u0402': 'DJcy',
        '\u0452': 'djcy',
        '\u231E': 'dlcorn',
        '\u230D': 'dlcrop',
        '$': 'dollar',
        '\uD835\uDD3B': 'Dopf',
        '\uD835\uDD55': 'dopf',
        '\u20DC': 'DotDot',
        '\u2250': 'doteq',
        '\u2251': 'eDot',
        '\u2238': 'minusd',
        '\u2214': 'plusdo',
        '\u22A1': 'sdotb',
        '\u21D0': 'lArr',
        '\u21D4': 'iff',
        '\u27F8': 'xlArr',
        '\u27FA': 'xhArr',
        '\u27F9': 'xrArr',
        '\u21D2': 'rArr',
        '\u22A8': 'vDash',
        '\u21D1': 'uArr',
        '\u21D5': 'vArr',
        '\u2225': 'par',
        '\u2913': 'DownArrowBar',
        '\u21F5': 'duarr',
        '\u0311': 'DownBreve',
        '\u2950': 'DownLeftRightVector',
        '\u295E': 'DownLeftTeeVector',
        '\u2956': 'DownLeftVectorBar',
        '\u21BD': 'lhard',
        '\u295F': 'DownRightTeeVector',
        '\u2957': 'DownRightVectorBar',
        '\u21C1': 'rhard',
        '\u21A7': 'mapstodown',
        '\u22A4': 'top',
        '\u2910': 'RBarr',
        '\u231F': 'drcorn',
        '\u230C': 'drcrop',
        '\uD835\uDC9F': 'Dscr',
        '\uD835\uDCB9': 'dscr',
        '\u0405': 'DScy',
        '\u0455': 'dscy',
        '\u29F6': 'dsol',
        '\u0110': 'Dstrok',
        '\u0111': 'dstrok',
        '\u22F1': 'dtdot',
        '\u25BF': 'dtri',
        '\u296F': 'duhar',
        '\u29A6': 'dwangle',
        '\u040F': 'DZcy',
        '\u045F': 'dzcy',
        '\u27FF': 'dzigrarr',
        '\xC9': 'Eacute',
        '\xE9': 'eacute',
        '\u2A6E': 'easter',
        '\u011A': 'Ecaron',
        '\u011B': 'ecaron',
        '\xCA': 'Ecirc',
        '\xEA': 'ecirc',
        '\u2256': 'ecir',
        '\u2255': 'ecolon',
        '\u042D': 'Ecy',
        '\u044D': 'ecy',
        '\u0116': 'Edot',
        '\u0117': 'edot',
        '\u2147': 'ee',
        '\u2252': 'efDot',
        '\uD835\uDD08': 'Efr',
        '\uD835\uDD22': 'efr',
        '\u2A9A': 'eg',
        '\xC8': 'Egrave',
        '\xE8': 'egrave',
        '\u2A96': 'egs',
        '\u2A98': 'egsdot',
        '\u2A99': 'el',
        '\u2208': 'in',
        '\u23E7': 'elinters',
        '\u2113': 'ell',
        '\u2A95': 'els',
        '\u2A97': 'elsdot',
        '\u0112': 'Emacr',
        '\u0113': 'emacr',
        '\u2205': 'empty',
        '\u25FB': 'EmptySmallSquare',
        '\u25AB': 'EmptyVerySmallSquare',
        '\u2004': 'emsp13',
        '\u2005': 'emsp14',
        '\u2003': 'emsp',
        '\u014A': 'ENG',
        '\u014B': 'eng',
        '\u2002': 'ensp',
        '\u0118': 'Eogon',
        '\u0119': 'eogon',
        '\uD835\uDD3C': 'Eopf',
        '\uD835\uDD56': 'eopf',
        '\u22D5': 'epar',
        '\u29E3': 'eparsl',
        '\u2A71': 'eplus',
        '\u03B5': 'epsi',
        '\u0395': 'Epsilon',
        '\u03F5': 'epsiv',
        '\u2242': 'esim',
        '\u2A75': 'Equal',
        '=': 'equals',
        '\u225F': 'equest',
        '\u21CC': 'rlhar',
        '\u2A78': 'equivDD',
        '\u29E5': 'eqvparsl',
        '\u2971': 'erarr',
        '\u2253': 'erDot',
        '\u212F': 'escr',
        '\u2130': 'Escr',
        '\u2A73': 'Esim',
        '\u0397': 'Eta',
        '\u03B7': 'eta',
        '\xD0': 'ETH',
        '\xF0': 'eth',
        '\xCB': 'Euml',
        '\xEB': 'euml',
        '\u20AC': 'euro',
        '!': 'excl',
        '\u2203': 'exist',
        '\u0424': 'Fcy',
        '\u0444': 'fcy',
        '\u2640': 'female',
        '\uFB03': 'ffilig',
        '\uFB00': 'fflig',
        '\uFB04': 'ffllig',
        '\uD835\uDD09': 'Ffr',
        '\uD835\uDD23': 'ffr',
        '\uFB01': 'filig',
        '\u25FC': 'FilledSmallSquare',
        'fj': 'fjlig',
        '\u266D': 'flat',
        '\uFB02': 'fllig',
        '\u25B1': 'fltns',
        '\u0192': 'fnof',
        '\uD835\uDD3D': 'Fopf',
        '\uD835\uDD57': 'fopf',
        '\u2200': 'forall',
        '\u22D4': 'fork',
        '\u2AD9': 'forkv',
        '\u2131': 'Fscr',
        '\u2A0D': 'fpartint',
        '\xBD': 'half',
        '\u2153': 'frac13',
        '\xBC': 'frac14',
        '\u2155': 'frac15',
        '\u2159': 'frac16',
        '\u215B': 'frac18',
        '\u2154': 'frac23',
        '\u2156': 'frac25',
        '\xBE': 'frac34',
        '\u2157': 'frac35',
        '\u215C': 'frac38',
        '\u2158': 'frac45',
        '\u215A': 'frac56',
        '\u215D': 'frac58',
        '\u215E': 'frac78',
        '\u2044': 'frasl',
        '\u2322': 'frown',
        '\uD835\uDCBB': 'fscr',
        '\u01F5': 'gacute',
        '\u0393': 'Gamma',
        '\u03B3': 'gamma',
        '\u03DC': 'Gammad',
        '\u2A86': 'gap',
        '\u011E': 'Gbreve',
        '\u011F': 'gbreve',
        '\u0122': 'Gcedil',
        '\u011C': 'Gcirc',
        '\u011D': 'gcirc',
        '\u0413': 'Gcy',
        '\u0433': 'gcy',
        '\u0120': 'Gdot',
        '\u0121': 'gdot',
        '\u2265': 'ge',
        '\u2267': 'gE',
        '\u2A8C': 'gEl',
        '\u22DB': 'gel',
        '\u2A7E': 'ges',
        '\u2AA9': 'gescc',
        '\u2A80': 'gesdot',
        '\u2A82': 'gesdoto',
        '\u2A84': 'gesdotol',
        '\u22DB\uFE00': 'gesl',
        '\u2A94': 'gesles',
        '\uD835\uDD0A': 'Gfr',
        '\uD835\uDD24': 'gfr',
        '\u226B': 'gg',
        '\u22D9': 'Gg',
        '\u2137': 'gimel',
        '\u0403': 'GJcy',
        '\u0453': 'gjcy',
        '\u2AA5': 'gla',
        '\u2277': 'gl',
        '\u2A92': 'glE',
        '\u2AA4': 'glj',
        '\u2A8A': 'gnap',
        '\u2A88': 'gne',
        '\u2269': 'gnE',
        '\u22E7': 'gnsim',
        '\uD835\uDD3E': 'Gopf',
        '\uD835\uDD58': 'gopf',
        '\u2AA2': 'GreaterGreater',
        '\u2273': 'gsim',
        '\uD835\uDCA2': 'Gscr',
        '\u210A': 'gscr',
        '\u2A8E': 'gsime',
        '\u2A90': 'gsiml',
        '\u2AA7': 'gtcc',
        '\u2A7A': 'gtcir',
        '>': 'gt',
        '\u22D7': 'gtdot',
        '\u2995': 'gtlPar',
        '\u2A7C': 'gtquest',
        '\u2978': 'gtrarr',
        '\u2269\uFE00': 'gvnE',
        '\u200A': 'hairsp',
        '\u210B': 'Hscr',
        '\u042A': 'HARDcy',
        '\u044A': 'hardcy',
        '\u2948': 'harrcir',
        '\u2194': 'harr',
        '\u21AD': 'harrw',
        '^': 'Hat',
        '\u210F': 'hbar',
        '\u0124': 'Hcirc',
        '\u0125': 'hcirc',
        '\u2665': 'hearts',
        '\u2026': 'mldr',
        '\u22B9': 'hercon',
        '\uD835\uDD25': 'hfr',
        '\u210C': 'Hfr',
        '\u2925': 'searhk',
        '\u2926': 'swarhk',
        '\u21FF': 'hoarr',
        '\u223B': 'homtht',
        '\u21A9': 'larrhk',
        '\u21AA': 'rarrhk',
        '\uD835\uDD59': 'hopf',
        '\u210D': 'Hopf',
        '\u2015': 'horbar',
        '\uD835\uDCBD': 'hscr',
        '\u0126': 'Hstrok',
        '\u0127': 'hstrok',
        '\u2043': 'hybull',
        '\xCD': 'Iacute',
        '\xED': 'iacute',
        '\u2063': 'ic',
        '\xCE': 'Icirc',
        '\xEE': 'icirc',
        '\u0418': 'Icy',
        '\u0438': 'icy',
        '\u0130': 'Idot',
        '\u0415': 'IEcy',
        '\u0435': 'iecy',
        '\xA1': 'iexcl',
        '\uD835\uDD26': 'ifr',
        '\u2111': 'Im',
        '\xCC': 'Igrave',
        '\xEC': 'igrave',
        '\u2148': 'ii',
        '\u2A0C': 'qint',
        '\u222D': 'tint',
        '\u29DC': 'iinfin',
        '\u2129': 'iiota',
        '\u0132': 'IJlig',
        '\u0133': 'ijlig',
        '\u012A': 'Imacr',
        '\u012B': 'imacr',
        '\u2110': 'Iscr',
        '\u0131': 'imath',
        '\u22B7': 'imof',
        '\u01B5': 'imped',
        '\u2105': 'incare',
        '\u221E': 'infin',
        '\u29DD': 'infintie',
        '\u22BA': 'intcal',
        '\u222B': 'int',
        '\u222C': 'Int',
        '\u2124': 'Zopf',
        '\u2A17': 'intlarhk',
        '\u2A3C': 'iprod',
        '\u2062': 'it',
        '\u0401': 'IOcy',
        '\u0451': 'iocy',
        '\u012E': 'Iogon',
        '\u012F': 'iogon',
        '\uD835\uDD40': 'Iopf',
        '\uD835\uDD5A': 'iopf',
        '\u0399': 'Iota',
        '\u03B9': 'iota',
        '\xBF': 'iquest',
        '\uD835\uDCBE': 'iscr',
        '\u22F5': 'isindot',
        '\u22F9': 'isinE',
        '\u22F4': 'isins',
        '\u22F3': 'isinsv',
        '\u0128': 'Itilde',
        '\u0129': 'itilde',
        '\u0406': 'Iukcy',
        '\u0456': 'iukcy',
        '\xCF': 'Iuml',
        '\xEF': 'iuml',
        '\u0134': 'Jcirc',
        '\u0135': 'jcirc',
        '\u0419': 'Jcy',
        '\u0439': 'jcy',
        '\uD835\uDD0D': 'Jfr',
        '\uD835\uDD27': 'jfr',
        '\u0237': 'jmath',
        '\uD835\uDD41': 'Jopf',
        '\uD835\uDD5B': 'jopf',
        '\uD835\uDCA5': 'Jscr',
        '\uD835\uDCBF': 'jscr',
        '\u0408': 'Jsercy',
        '\u0458': 'jsercy',
        '\u0404': 'Jukcy',
        '\u0454': 'jukcy',
        '\u039A': 'Kappa',
        '\u03BA': 'kappa',
        '\u03F0': 'kappav',
        '\u0136': 'Kcedil',
        '\u0137': 'kcedil',
        '\u041A': 'Kcy',
        '\u043A': 'kcy',
        '\uD835\uDD0E': 'Kfr',
        '\uD835\uDD28': 'kfr',
        '\u0138': 'kgreen',
        '\u0425': 'KHcy',
        '\u0445': 'khcy',
        '\u040C': 'KJcy',
        '\u045C': 'kjcy',
        '\uD835\uDD42': 'Kopf',
        '\uD835\uDD5C': 'kopf',
        '\uD835\uDCA6': 'Kscr',
        '\uD835\uDCC0': 'kscr',
        '\u21DA': 'lAarr',
        '\u0139': 'Lacute',
        '\u013A': 'lacute',
        '\u29B4': 'laemptyv',
        '\u2112': 'Lscr',
        '\u039B': 'Lambda',
        '\u03BB': 'lambda',
        '\u27E8': 'lang',
        '\u27EA': 'Lang',
        '\u2991': 'langd',
        '\u2A85': 'lap',
        '\xAB': 'laquo',
        '\u21E4': 'larrb',
        '\u291F': 'larrbfs',
        '\u2190': 'larr',
        '\u219E': 'Larr',
        '\u291D': 'larrfs',
        '\u21AB': 'larrlp',
        '\u2939': 'larrpl',
        '\u2973': 'larrsim',
        '\u21A2': 'larrtl',
        '\u2919': 'latail',
        '\u291B': 'lAtail',
        '\u2AAB': 'lat',
        '\u2AAD': 'late',
        '\u2AAD\uFE00': 'lates',
        '\u290C': 'lbarr',
        '\u290E': 'lBarr',
        '\u2772': 'lbbrk',
        '{': 'lcub',
        '[': 'lsqb',
        '\u298B': 'lbrke',
        '\u298F': 'lbrksld',
        '\u298D': 'lbrkslu',
        '\u013D': 'Lcaron',
        '\u013E': 'lcaron',
        '\u013B': 'Lcedil',
        '\u013C': 'lcedil',
        '\u2308': 'lceil',
        '\u041B': 'Lcy',
        '\u043B': 'lcy',
        '\u2936': 'ldca',
        '\u201C': 'ldquo',
        '\u2967': 'ldrdhar',
        '\u294B': 'ldrushar',
        '\u21B2': 'ldsh',
        '\u2264': 'le',
        '\u2266': 'lE',
        '\u21C6': 'lrarr',
        '\u27E6': 'lobrk',
        '\u2961': 'LeftDownTeeVector',
        '\u2959': 'LeftDownVectorBar',
        '\u230A': 'lfloor',
        '\u21BC': 'lharu',
        '\u21C7': 'llarr',
        '\u21CB': 'lrhar',
        '\u294E': 'LeftRightVector',
        '\u21A4': 'mapstoleft',
        '\u295A': 'LeftTeeVector',
        '\u22CB': 'lthree',
        '\u29CF': 'LeftTriangleBar',
        '\u22B2': 'vltri',
        '\u22B4': 'ltrie',
        '\u2951': 'LeftUpDownVector',
        '\u2960': 'LeftUpTeeVector',
        '\u2958': 'LeftUpVectorBar',
        '\u21BF': 'uharl',
        '\u2952': 'LeftVectorBar',
        '\u2A8B': 'lEg',
        '\u22DA': 'leg',
        '\u2A7D': 'les',
        '\u2AA8': 'lescc',
        '\u2A7F': 'lesdot',
        '\u2A81': 'lesdoto',
        '\u2A83': 'lesdotor',
        '\u22DA\uFE00': 'lesg',
        '\u2A93': 'lesges',
        '\u22D6': 'ltdot',
        '\u2276': 'lg',
        '\u2AA1': 'LessLess',
        '\u2272': 'lsim',
        '\u297C': 'lfisht',
        '\uD835\uDD0F': 'Lfr',
        '\uD835\uDD29': 'lfr',
        '\u2A91': 'lgE',
        '\u2962': 'lHar',
        '\u296A': 'lharul',
        '\u2584': 'lhblk',
        '\u0409': 'LJcy',
        '\u0459': 'ljcy',
        '\u226A': 'll',
        '\u22D8': 'Ll',
        '\u296B': 'llhard',
        '\u25FA': 'lltri',
        '\u013F': 'Lmidot',
        '\u0140': 'lmidot',
        '\u23B0': 'lmoust',
        '\u2A89': 'lnap',
        '\u2A87': 'lne',
        '\u2268': 'lnE',
        '\u22E6': 'lnsim',
        '\u27EC': 'loang',
        '\u21FD': 'loarr',
        '\u27F5': 'xlarr',
        '\u27F7': 'xharr',
        '\u27FC': 'xmap',
        '\u27F6': 'xrarr',
        '\u21AC': 'rarrlp',
        '\u2985': 'lopar',
        '\uD835\uDD43': 'Lopf',
        '\uD835\uDD5D': 'lopf',
        '\u2A2D': 'loplus',
        '\u2A34': 'lotimes',
        '\u2217': 'lowast',
        '_': 'lowbar',
        '\u2199': 'swarr',
        '\u2198': 'searr',
        '\u25CA': 'loz',
        '(': 'lpar',
        '\u2993': 'lparlt',
        '\u296D': 'lrhard',
        '\u200E': 'lrm',
        '\u22BF': 'lrtri',
        '\u2039': 'lsaquo',
        '\uD835\uDCC1': 'lscr',
        '\u21B0': 'lsh',
        '\u2A8D': 'lsime',
        '\u2A8F': 'lsimg',
        '\u2018': 'lsquo',
        '\u201A': 'sbquo',
        '\u0141': 'Lstrok',
        '\u0142': 'lstrok',
        '\u2AA6': 'ltcc',
        '\u2A79': 'ltcir',
        '<': 'lt',
        '\u22C9': 'ltimes',
        '\u2976': 'ltlarr',
        '\u2A7B': 'ltquest',
        '\u25C3': 'ltri',
        '\u2996': 'ltrPar',
        '\u294A': 'lurdshar',
        '\u2966': 'luruhar',
        '\u2268\uFE00': 'lvnE',
        '\xAF': 'macr',
        '\u2642': 'male',
        '\u2720': 'malt',
        '\u2905': 'Map',
        '\u21A6': 'map',
        '\u21A5': 'mapstoup',
        '\u25AE': 'marker',
        '\u2A29': 'mcomma',
        '\u041C': 'Mcy',
        '\u043C': 'mcy',
        '\u2014': 'mdash',
        '\u223A': 'mDDot',
        '\u205F': 'MediumSpace',
        '\u2133': 'Mscr',
        '\uD835\uDD10': 'Mfr',
        '\uD835\uDD2A': 'mfr',
        '\u2127': 'mho',
        '\xB5': 'micro',
        '\u2AF0': 'midcir',
        '\u2223': 'mid',
        '\u2212': 'minus',
        '\u2A2A': 'minusdu',
        '\u2213': 'mp',
        '\u2ADB': 'mlcp',
        '\u22A7': 'models',
        '\uD835\uDD44': 'Mopf',
        '\uD835\uDD5E': 'mopf',
        '\uD835\uDCC2': 'mscr',
        '\u039C': 'Mu',
        '\u03BC': 'mu',
        '\u22B8': 'mumap',
        '\u0143': 'Nacute',
        '\u0144': 'nacute',
        '\u2220\u20D2': 'nang',
        '\u2249': 'nap',
        '\u2A70\u0338': 'napE',
        '\u224B\u0338': 'napid',
        '\u0149': 'napos',
        '\u266E': 'natur',
        '\u2115': 'Nopf',
        '\xA0': 'nbsp',
        '\u224E\u0338': 'nbump',
        '\u224F\u0338': 'nbumpe',
        '\u2A43': 'ncap',
        '\u0147': 'Ncaron',
        '\u0148': 'ncaron',
        '\u0145': 'Ncedil',
        '\u0146': 'ncedil',
        '\u2247': 'ncong',
        '\u2A6D\u0338': 'ncongdot',
        '\u2A42': 'ncup',
        '\u041D': 'Ncy',
        '\u043D': 'ncy',
        '\u2013': 'ndash',
        '\u2924': 'nearhk',
        '\u2197': 'nearr',
        '\u21D7': 'neArr',
        '\u2260': 'ne',
        '\u2250\u0338': 'nedot',
        '\u200B': 'ZeroWidthSpace',
        '\u2262': 'nequiv',
        '\u2928': 'toea',
        '\u2242\u0338': 'nesim',
        '\n': 'NewLine',
        '\u2204': 'nexist',
        '\uD835\uDD11': 'Nfr',
        '\uD835\uDD2B': 'nfr',
        '\u2267\u0338': 'ngE',
        '\u2271': 'nge',
        '\u2A7E\u0338': 'nges',
        '\u22D9\u0338': 'nGg',
        '\u2275': 'ngsim',
        '\u226B\u20D2': 'nGt',
        '\u226F': 'ngt',
        '\u226B\u0338': 'nGtv',
        '\u21AE': 'nharr',
        '\u21CE': 'nhArr',
        '\u2AF2': 'nhpar',
        '\u220B': 'ni',
        '\u22FC': 'nis',
        '\u22FA': 'nisd',
        '\u040A': 'NJcy',
        '\u045A': 'njcy',
        '\u219A': 'nlarr',
        '\u21CD': 'nlArr',
        '\u2025': 'nldr',
        '\u2266\u0338': 'nlE',
        '\u2270': 'nle',
        '\u2A7D\u0338': 'nles',
        '\u226E': 'nlt',
        '\u22D8\u0338': 'nLl',
        '\u2274': 'nlsim',
        '\u226A\u20D2': 'nLt',
        '\u22EA': 'nltri',
        '\u22EC': 'nltrie',
        '\u226A\u0338': 'nLtv',
        '\u2224': 'nmid',
        '\u2060': 'NoBreak',
        '\uD835\uDD5F': 'nopf',
        '\u2AEC': 'Not',
        '\xAC': 'not',
        '\u226D': 'NotCupCap',
        '\u2226': 'npar',
        '\u2209': 'notin',
        '\u2279': 'ntgl',
        '\u22F5\u0338': 'notindot',
        '\u22F9\u0338': 'notinE',
        '\u22F7': 'notinvb',
        '\u22F6': 'notinvc',
        '\u29CF\u0338': 'NotLeftTriangleBar',
        '\u2278': 'ntlg',
        '\u2AA2\u0338': 'NotNestedGreaterGreater',
        '\u2AA1\u0338': 'NotNestedLessLess',
        '\u220C': 'notni',
        '\u22FE': 'notnivb',
        '\u22FD': 'notnivc',
        '\u2280': 'npr',
        '\u2AAF\u0338': 'npre',
        '\u22E0': 'nprcue',
        '\u29D0\u0338': 'NotRightTriangleBar',
        '\u22EB': 'nrtri',
        '\u22ED': 'nrtrie',
        '\u228F\u0338': 'NotSquareSubset',
        '\u22E2': 'nsqsube',
        '\u2290\u0338': 'NotSquareSuperset',
        '\u22E3': 'nsqsupe',
        '\u2282\u20D2': 'vnsub',
        '\u2288': 'nsube',
        '\u2281': 'nsc',
        '\u2AB0\u0338': 'nsce',
        '\u22E1': 'nsccue',
        '\u227F\u0338': 'NotSucceedsTilde',
        '\u2283\u20D2': 'vnsup',
        '\u2289': 'nsupe',
        '\u2241': 'nsim',
        '\u2244': 'nsime',
        '\u2AFD\u20E5': 'nparsl',
        '\u2202\u0338': 'npart',
        '\u2A14': 'npolint',
        '\u2933\u0338': 'nrarrc',
        '\u219B': 'nrarr',
        '\u21CF': 'nrArr',
        '\u219D\u0338': 'nrarrw',
        '\uD835\uDCA9': 'Nscr',
        '\uD835\uDCC3': 'nscr',
        '\u2284': 'nsub',
        '\u2AC5\u0338': 'nsubE',
        '\u2285': 'nsup',
        '\u2AC6\u0338': 'nsupE',
        '\xD1': 'Ntilde',
        '\xF1': 'ntilde',
        '\u039D': 'Nu',
        '\u03BD': 'nu',
        '#': 'num',
        '\u2116': 'numero',
        '\u2007': 'numsp',
        '\u224D\u20D2': 'nvap',
        '\u22AC': 'nvdash',
        '\u22AD': 'nvDash',
        '\u22AE': 'nVdash',
        '\u22AF': 'nVDash',
        '\u2265\u20D2': 'nvge',
        '>\u20D2': 'nvgt',
        '\u2904': 'nvHarr',
        '\u29DE': 'nvinfin',
        '\u2902': 'nvlArr',
        '\u2264\u20D2': 'nvle',
        '<\u20D2': 'nvlt',
        '\u22B4\u20D2': 'nvltrie',
        '\u2903': 'nvrArr',
        '\u22B5\u20D2': 'nvrtrie',
        '\u223C\u20D2': 'nvsim',
        '\u2923': 'nwarhk',
        '\u2196': 'nwarr',
        '\u21D6': 'nwArr',
        '\u2927': 'nwnear',
        '\xD3': 'Oacute',
        '\xF3': 'oacute',
        '\xD4': 'Ocirc',
        '\xF4': 'ocirc',
        '\u041E': 'Ocy',
        '\u043E': 'ocy',
        '\u0150': 'Odblac',
        '\u0151': 'odblac',
        '\u2A38': 'odiv',
        '\u29BC': 'odsold',
        '\u0152': 'OElig',
        '\u0153': 'oelig',
        '\u29BF': 'ofcir',
        '\uD835\uDD12': 'Ofr',
        '\uD835\uDD2C': 'ofr',
        '\u02DB': 'ogon',
        '\xD2': 'Ograve',
        '\xF2': 'ograve',
        '\u29C1': 'ogt',
        '\u29B5': 'ohbar',
        '\u03A9': 'ohm',
        '\u29BE': 'olcir',
        '\u29BB': 'olcross',
        '\u203E': 'oline',
        '\u29C0': 'olt',
        '\u014C': 'Omacr',
        '\u014D': 'omacr',
        '\u03C9': 'omega',
        '\u039F': 'Omicron',
        '\u03BF': 'omicron',
        '\u29B6': 'omid',
        '\uD835\uDD46': 'Oopf',
        '\uD835\uDD60': 'oopf',
        '\u29B7': 'opar',
        '\u29B9': 'operp',
        '\u2A54': 'Or',
        '\u2228': 'or',
        '\u2A5D': 'ord',
        '\u2134': 'oscr',
        '\xAA': 'ordf',
        '\xBA': 'ordm',
        '\u22B6': 'origof',
        '\u2A56': 'oror',
        '\u2A57': 'orslope',
        '\u2A5B': 'orv',
        '\uD835\uDCAA': 'Oscr',
        '\xD8': 'Oslash',
        '\xF8': 'oslash',
        '\u2298': 'osol',
        '\xD5': 'Otilde',
        '\xF5': 'otilde',
        '\u2A36': 'otimesas',
        '\u2A37': 'Otimes',
        '\xD6': 'Ouml',
        '\xF6': 'ouml',
        '\u233D': 'ovbar',
        '\u23DE': 'OverBrace',
        '\u23B4': 'tbrk',
        '\u23DC': 'OverParenthesis',
        '\xB6': 'para',
        '\u2AF3': 'parsim',
        '\u2AFD': 'parsl',
        '\u2202': 'part',
        '\u041F': 'Pcy',
        '\u043F': 'pcy',
        '%': 'percnt',
        '.': 'period',
        '\u2030': 'permil',
        '\u2031': 'pertenk',
        '\uD835\uDD13': 'Pfr',
        '\uD835\uDD2D': 'pfr',
        '\u03A6': 'Phi',
        '\u03C6': 'phi',
        '\u03D5': 'phiv',
        '\u260E': 'phone',
        '\u03A0': 'Pi',
        '\u03C0': 'pi',
        '\u03D6': 'piv',
        '\u210E': 'planckh',
        '\u2A23': 'plusacir',
        '\u2A22': 'pluscir',
        '+': 'plus',
        '\u2A25': 'plusdu',
        '\u2A72': 'pluse',
        '\xB1': 'pm',
        '\u2A26': 'plussim',
        '\u2A27': 'plustwo',
        '\u2A15': 'pointint',
        '\uD835\uDD61': 'popf',
        '\u2119': 'Popf',
        '\xA3': 'pound',
        '\u2AB7': 'prap',
        '\u2ABB': 'Pr',
        '\u227A': 'pr',
        '\u227C': 'prcue',
        '\u2AAF': 'pre',
        '\u227E': 'prsim',
        '\u2AB9': 'prnap',
        '\u2AB5': 'prnE',
        '\u22E8': 'prnsim',
        '\u2AB3': 'prE',
        '\u2032': 'prime',
        '\u2033': 'Prime',
        '\u220F': 'prod',
        '\u232E': 'profalar',
        '\u2312': 'profline',
        '\u2313': 'profsurf',
        '\u221D': 'prop',
        '\u22B0': 'prurel',
        '\uD835\uDCAB': 'Pscr',
        '\uD835\uDCC5': 'pscr',
        '\u03A8': 'Psi',
        '\u03C8': 'psi',
        '\u2008': 'puncsp',
        '\uD835\uDD14': 'Qfr',
        '\uD835\uDD2E': 'qfr',
        '\uD835\uDD62': 'qopf',
        '\u211A': 'Qopf',
        '\u2057': 'qprime',
        '\uD835\uDCAC': 'Qscr',
        '\uD835\uDCC6': 'qscr',
        '\u2A16': 'quatint',
        '?': 'quest',
        '"': 'quot',
        '\u21DB': 'rAarr',
        '\u223D\u0331': 'race',
        '\u0154': 'Racute',
        '\u0155': 'racute',
        '\u221A': 'Sqrt',
        '\u29B3': 'raemptyv',
        '\u27E9': 'rang',
        '\u27EB': 'Rang',
        '\u2992': 'rangd',
        '\u29A5': 'range',
        '\xBB': 'raquo',
        '\u2975': 'rarrap',
        '\u21E5': 'rarrb',
        '\u2920': 'rarrbfs',
        '\u2933': 'rarrc',
        '\u2192': 'rarr',
        '\u21A0': 'Rarr',
        '\u291E': 'rarrfs',
        '\u2945': 'rarrpl',
        '\u2974': 'rarrsim',
        '\u2916': 'Rarrtl',
        '\u21A3': 'rarrtl',
        '\u219D': 'rarrw',
        '\u291A': 'ratail',
        '\u291C': 'rAtail',
        '\u2236': 'ratio',
        '\u2773': 'rbbrk',
        '}': 'rcub',
        ']': 'rsqb',
        '\u298C': 'rbrke',
        '\u298E': 'rbrksld',
        '\u2990': 'rbrkslu',
        '\u0158': 'Rcaron',
        '\u0159': 'rcaron',
        '\u0156': 'Rcedil',
        '\u0157': 'rcedil',
        '\u2309': 'rceil',
        '\u0420': 'Rcy',
        '\u0440': 'rcy',
        '\u2937': 'rdca',
        '\u2969': 'rdldhar',
        '\u21B3': 'rdsh',
        '\u211C': 'Re',
        '\u211B': 'Rscr',
        '\u211D': 'Ropf',
        '\u25AD': 'rect',
        '\u297D': 'rfisht',
        '\u230B': 'rfloor',
        '\uD835\uDD2F': 'rfr',
        '\u2964': 'rHar',
        '\u21C0': 'rharu',
        '\u296C': 'rharul',
        '\u03A1': 'Rho',
        '\u03C1': 'rho',
        '\u03F1': 'rhov',
        '\u21C4': 'rlarr',
        '\u27E7': 'robrk',
        '\u295D': 'RightDownTeeVector',
        '\u2955': 'RightDownVectorBar',
        '\u21C9': 'rrarr',
        '\u22A2': 'vdash',
        '\u295B': 'RightTeeVector',
        '\u22CC': 'rthree',
        '\u29D0': 'RightTriangleBar',
        '\u22B3': 'vrtri',
        '\u22B5': 'rtrie',
        '\u294F': 'RightUpDownVector',
        '\u295C': 'RightUpTeeVector',
        '\u2954': 'RightUpVectorBar',
        '\u21BE': 'uharr',
        '\u2953': 'RightVectorBar',
        '\u02DA': 'ring',
        '\u200F': 'rlm',
        '\u23B1': 'rmoust',
        '\u2AEE': 'rnmid',
        '\u27ED': 'roang',
        '\u21FE': 'roarr',
        '\u2986': 'ropar',
        '\uD835\uDD63': 'ropf',
        '\u2A2E': 'roplus',
        '\u2A35': 'rotimes',
        '\u2970': 'RoundImplies',
        ')': 'rpar',
        '\u2994': 'rpargt',
        '\u2A12': 'rppolint',
        '\u203A': 'rsaquo',
        '\uD835\uDCC7': 'rscr',
        '\u21B1': 'rsh',
        '\u22CA': 'rtimes',
        '\u25B9': 'rtri',
        '\u29CE': 'rtriltri',
        '\u29F4': 'RuleDelayed',
        '\u2968': 'ruluhar',
        '\u211E': 'rx',
        '\u015A': 'Sacute',
        '\u015B': 'sacute',
        '\u2AB8': 'scap',
        '\u0160': 'Scaron',
        '\u0161': 'scaron',
        '\u2ABC': 'Sc',
        '\u227B': 'sc',
        '\u227D': 'sccue',
        '\u2AB0': 'sce',
        '\u2AB4': 'scE',
        '\u015E': 'Scedil',
        '\u015F': 'scedil',
        '\u015C': 'Scirc',
        '\u015D': 'scirc',
        '\u2ABA': 'scnap',
        '\u2AB6': 'scnE',
        '\u22E9': 'scnsim',
        '\u2A13': 'scpolint',
        '\u227F': 'scsim',
        '\u0421': 'Scy',
        '\u0441': 'scy',
        '\u22C5': 'sdot',
        '\u2A66': 'sdote',
        '\u21D8': 'seArr',
        '\xA7': 'sect',
        ';': 'semi',
        '\u2929': 'tosa',
        '\u2736': 'sext',
        '\uD835\uDD16': 'Sfr',
        '\uD835\uDD30': 'sfr',
        '\u266F': 'sharp',
        '\u0429': 'SHCHcy',
        '\u0449': 'shchcy',
        '\u0428': 'SHcy',
        '\u0448': 'shcy',
        '\u2191': 'uarr',
        '\xAD': 'shy',
        '\u03A3': 'Sigma',
        '\u03C3': 'sigma',
        '\u03C2': 'sigmaf',
        '\u223C': 'sim',
        '\u2A6A': 'simdot',
        '\u2243': 'sime',
        '\u2A9E': 'simg',
        '\u2AA0': 'simgE',
        '\u2A9D': 'siml',
        '\u2A9F': 'simlE',
        '\u2246': 'simne',
        '\u2A24': 'simplus',
        '\u2972': 'simrarr',
        '\u2A33': 'smashp',
        '\u29E4': 'smeparsl',
        '\u2323': 'smile',
        '\u2AAA': 'smt',
        '\u2AAC': 'smte',
        '\u2AAC\uFE00': 'smtes',
        '\u042C': 'SOFTcy',
        '\u044C': 'softcy',
        '\u233F': 'solbar',
        '\u29C4': 'solb',
        '/': 'sol',
        '\uD835\uDD4A': 'Sopf',
        '\uD835\uDD64': 'sopf',
        '\u2660': 'spades',
        '\u2293': 'sqcap',
        '\u2293\uFE00': 'sqcaps',
        '\u2294': 'sqcup',
        '\u2294\uFE00': 'sqcups',
        '\u228F': 'sqsub',
        '\u2291': 'sqsube',
        '\u2290': 'sqsup',
        '\u2292': 'sqsupe',
        '\u25A1': 'squ',
        '\uD835\uDCAE': 'Sscr',
        '\uD835\uDCC8': 'sscr',
        '\u22C6': 'Star',
        '\u2606': 'star',
        '\u2282': 'sub',
        '\u22D0': 'Sub',
        '\u2ABD': 'subdot',
        '\u2AC5': 'subE',
        '\u2286': 'sube',
        '\u2AC3': 'subedot',
        '\u2AC1': 'submult',
        '\u2ACB': 'subnE',
        '\u228A': 'subne',
        '\u2ABF': 'subplus',
        '\u2979': 'subrarr',
        '\u2AC7': 'subsim',
        '\u2AD5': 'subsub',
        '\u2AD3': 'subsup',
        '\u2211': 'sum',
        '\u266A': 'sung',
        '\xB9': 'sup1',
        '\xB2': 'sup2',
        '\xB3': 'sup3',
        '\u2283': 'sup',
        '\u22D1': 'Sup',
        '\u2ABE': 'supdot',
        '\u2AD8': 'supdsub',
        '\u2AC6': 'supE',
        '\u2287': 'supe',
        '\u2AC4': 'supedot',
        '\u27C9': 'suphsol',
        '\u2AD7': 'suphsub',
        '\u297B': 'suplarr',
        '\u2AC2': 'supmult',
        '\u2ACC': 'supnE',
        '\u228B': 'supne',
        '\u2AC0': 'supplus',
        '\u2AC8': 'supsim',
        '\u2AD4': 'supsub',
        '\u2AD6': 'supsup',
        '\u21D9': 'swArr',
        '\u292A': 'swnwar',
        '\xDF': 'szlig',
        '\t': 'Tab',
        '\u2316': 'target',
        '\u03A4': 'Tau',
        '\u03C4': 'tau',
        '\u0164': 'Tcaron',
        '\u0165': 'tcaron',
        '\u0162': 'Tcedil',
        '\u0163': 'tcedil',
        '\u0422': 'Tcy',
        '\u0442': 'tcy',
        '\u20DB': 'tdot',
        '\u2315': 'telrec',
        '\uD835\uDD17': 'Tfr',
        '\uD835\uDD31': 'tfr',
        '\u2234': 'there4',
        '\u0398': 'Theta',
        '\u03B8': 'theta',
        '\u03D1': 'thetav',
        '\u205F\u200A': 'ThickSpace',
        '\u2009': 'thinsp',
        '\xDE': 'THORN',
        '\xFE': 'thorn',
        '\u2A31': 'timesbar',
        '\xD7': 'times',
        '\u2A30': 'timesd',
        '\u2336': 'topbot',
        '\u2AF1': 'topcir',
        '\uD835\uDD4B': 'Topf',
        '\uD835\uDD65': 'topf',
        '\u2ADA': 'topfork',
        '\u2034': 'tprime',
        '\u2122': 'trade',
        '\u25B5': 'utri',
        '\u225C': 'trie',
        '\u25EC': 'tridot',
        '\u2A3A': 'triminus',
        '\u2A39': 'triplus',
        '\u29CD': 'trisb',
        '\u2A3B': 'tritime',
        '\u23E2': 'trpezium',
        '\uD835\uDCAF': 'Tscr',
        '\uD835\uDCC9': 'tscr',
        '\u0426': 'TScy',
        '\u0446': 'tscy',
        '\u040B': 'TSHcy',
        '\u045B': 'tshcy',
        '\u0166': 'Tstrok',
        '\u0167': 'tstrok',
        '\xDA': 'Uacute',
        '\xFA': 'uacute',
        '\u219F': 'Uarr',
        '\u2949': 'Uarrocir',
        '\u040E': 'Ubrcy',
        '\u045E': 'ubrcy',
        '\u016C': 'Ubreve',
        '\u016D': 'ubreve',
        '\xDB': 'Ucirc',
        '\xFB': 'ucirc',
        '\u0423': 'Ucy',
        '\u0443': 'ucy',
        '\u21C5': 'udarr',
        '\u0170': 'Udblac',
        '\u0171': 'udblac',
        '\u296E': 'udhar',
        '\u297E': 'ufisht',
        '\uD835\uDD18': 'Ufr',
        '\uD835\uDD32': 'ufr',
        '\xD9': 'Ugrave',
        '\xF9': 'ugrave',
        '\u2963': 'uHar',
        '\u2580': 'uhblk',
        '\u231C': 'ulcorn',
        '\u230F': 'ulcrop',
        '\u25F8': 'ultri',
        '\u016A': 'Umacr',
        '\u016B': 'umacr',
        '\u23DF': 'UnderBrace',
        '\u23DD': 'UnderParenthesis',
        '\u228E': 'uplus',
        '\u0172': 'Uogon',
        '\u0173': 'uogon',
        '\uD835\uDD4C': 'Uopf',
        '\uD835\uDD66': 'uopf',
        '\u2912': 'UpArrowBar',
        '\u2195': 'varr',
        '\u03C5': 'upsi',
        '\u03D2': 'Upsi',
        '\u03A5': 'Upsilon',
        '\u21C8': 'uuarr',
        '\u231D': 'urcorn',
        '\u230E': 'urcrop',
        '\u016E': 'Uring',
        '\u016F': 'uring',
        '\u25F9': 'urtri',
        '\uD835\uDCB0': 'Uscr',
        '\uD835\uDCCA': 'uscr',
        '\u22F0': 'utdot',
        '\u0168': 'Utilde',
        '\u0169': 'utilde',
        '\xDC': 'Uuml',
        '\xFC': 'uuml',
        '\u29A7': 'uwangle',
        '\u299C': 'vangrt',
        '\u228A\uFE00': 'vsubne',
        '\u2ACB\uFE00': 'vsubnE',
        '\u228B\uFE00': 'vsupne',
        '\u2ACC\uFE00': 'vsupnE',
        '\u2AE8': 'vBar',
        '\u2AEB': 'Vbar',
        '\u2AE9': 'vBarv',
        '\u0412': 'Vcy',
        '\u0432': 'vcy',
        '\u22A9': 'Vdash',
        '\u22AB': 'VDash',
        '\u2AE6': 'Vdashl',
        '\u22BB': 'veebar',
        '\u225A': 'veeeq',
        '\u22EE': 'vellip',
        '|': 'vert',
        '\u2016': 'Vert',
        '\u2758': 'VerticalSeparator',
        '\u2240': 'wr',
        '\uD835\uDD19': 'Vfr',
        '\uD835\uDD33': 'vfr',
        '\uD835\uDD4D': 'Vopf',
        '\uD835\uDD67': 'vopf',
        '\uD835\uDCB1': 'Vscr',
        '\uD835\uDCCB': 'vscr',
        '\u22AA': 'Vvdash',
        '\u299A': 'vzigzag',
        '\u0174': 'Wcirc',
        '\u0175': 'wcirc',
        '\u2A5F': 'wedbar',
        '\u2259': 'wedgeq',
        '\u2118': 'wp',
        '\uD835\uDD1A': 'Wfr',
        '\uD835\uDD34': 'wfr',
        '\uD835\uDD4E': 'Wopf',
        '\uD835\uDD68': 'wopf',
        '\uD835\uDCB2': 'Wscr',
        '\uD835\uDCCC': 'wscr',
        '\uD835\uDD1B': 'Xfr',
        '\uD835\uDD35': 'xfr',
        '\u039E': 'Xi',
        '\u03BE': 'xi',
        '\u22FB': 'xnis',
        '\uD835\uDD4F': 'Xopf',
        '\uD835\uDD69': 'xopf',
        '\uD835\uDCB3': 'Xscr',
        '\uD835\uDCCD': 'xscr',
        '\xDD': 'Yacute',
        '\xFD': 'yacute',
        '\u042F': 'YAcy',
        '\u044F': 'yacy',
        '\u0176': 'Ycirc',
        '\u0177': 'ycirc',
        '\u042B': 'Ycy',
        '\u044B': 'ycy',
        '\xA5': 'yen',
        '\uD835\uDD1C': 'Yfr',
        '\uD835\uDD36': 'yfr',
        '\u0407': 'YIcy',
        '\u0457': 'yicy',
        '\uD835\uDD50': 'Yopf',
        '\uD835\uDD6A': 'yopf',
        '\uD835\uDCB4': 'Yscr',
        '\uD835\uDCCE': 'yscr',
        '\u042E': 'YUcy',
        '\u044E': 'yucy',
        '\xFF': 'yuml',
        '\u0178': 'Yuml',
        '\u0179': 'Zacute',
        '\u017A': 'zacute',
        '\u017D': 'Zcaron',
        '\u017E': 'zcaron',
        '\u0417': 'Zcy',
        '\u0437': 'zcy',
        '\u017B': 'Zdot',
        '\u017C': 'zdot',
        '\u2128': 'Zfr',
        '\u0396': 'Zeta',
        '\u03B6': 'zeta',
        '\uD835\uDD37': 'zfr',
        '\u0416': 'ZHcy',
        '\u0436': 'zhcy',
        '\u21DD': 'zigrarr',
        '\uD835\uDD6B': 'zopf',
        '\uD835\uDCB5': 'Zscr',
        '\uD835\uDCCF': 'zscr',
        '\u200D': 'zwj',
        '\u200C': 'zwnj'
    }, regexEscape = /["&'<>`]/g, escapeMap = {
        '"': '&quot;',
        '&': '&amp;',
        '\'': '&#x27;',
        '<': '&lt;',
        // See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
        // following is not strictly necessary unless it’s part of a tag or an
        // unquoted attribute value. We’re only escaping it to support those
        // situations, and for XML support.
        '>': '&gt;',
        // In Internet Explorer ≤ 8, the backtick character can be used
        // to break out of (un)quoted attribute values or HTML comments.
        // See http://html5sec.org/#102, http://html5sec.org/#108, and
        // http://html5sec.org/#133.
        '`': '&#x60;'
    }, regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/, regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, regexDecode = /&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+);|&(Aacute|iacute|Uacute|plusmn|otilde|Otilde|Agrave|agrave|yacute|Yacute|oslash|Oslash|Atilde|atilde|brvbar|Ccedil|ccedil|ograve|curren|divide|Eacute|eacute|Ograve|oacute|Egrave|egrave|ugrave|frac12|frac14|frac34|Ugrave|Oacute|Iacute|ntilde|Ntilde|uacute|middot|Igrave|igrave|iquest|aacute|laquo|THORN|micro|iexcl|icirc|Icirc|Acirc|ucirc|ecirc|Ocirc|ocirc|Ecirc|Ucirc|aring|Aring|aelig|AElig|acute|pound|raquo|acirc|times|thorn|szlig|cedil|COPY|Auml|ordf|ordm|uuml|macr|Uuml|auml|Ouml|ouml|para|nbsp|Euml|quot|QUOT|euml|yuml|cent|sect|copy|sup1|sup2|sup3|Iuml|iuml|shy|eth|reg|not|yen|amp|AMP|REG|uml|ETH|deg|gt|GT|LT|lt)([=a-zA-Z0-9])?/g, decodeMap = {
        'Aacute': '\xC1',
        'aacute': '\xE1',
        'Abreve': '\u0102',
        'abreve': '\u0103',
        'ac': '\u223E',
        'acd': '\u223F',
        'acE': '\u223E\u0333',
        'Acirc': '\xC2',
        'acirc': '\xE2',
        'acute': '\xB4',
        'Acy': '\u0410',
        'acy': '\u0430',
        'AElig': '\xC6',
        'aelig': '\xE6',
        'af': '\u2061',
        'Afr': '\uD835\uDD04',
        'afr': '\uD835\uDD1E',
        'Agrave': '\xC0',
        'agrave': '\xE0',
        'alefsym': '\u2135',
        'aleph': '\u2135',
        'Alpha': '\u0391',
        'alpha': '\u03B1',
        'Amacr': '\u0100',
        'amacr': '\u0101',
        'amalg': '\u2A3F',
        'amp': '&',
        'AMP': '&',
        'andand': '\u2A55',
        'And': '\u2A53',
        'and': '\u2227',
        'andd': '\u2A5C',
        'andslope': '\u2A58',
        'andv': '\u2A5A',
        'ang': '\u2220',
        'ange': '\u29A4',
        'angle': '\u2220',
        'angmsdaa': '\u29A8',
        'angmsdab': '\u29A9',
        'angmsdac': '\u29AA',
        'angmsdad': '\u29AB',
        'angmsdae': '\u29AC',
        'angmsdaf': '\u29AD',
        'angmsdag': '\u29AE',
        'angmsdah': '\u29AF',
        'angmsd': '\u2221',
        'angrt': '\u221F',
        'angrtvb': '\u22BE',
        'angrtvbd': '\u299D',
        'angsph': '\u2222',
        'angst': '\xC5',
        'angzarr': '\u237C',
        'Aogon': '\u0104',
        'aogon': '\u0105',
        'Aopf': '\uD835\uDD38',
        'aopf': '\uD835\uDD52',
        'apacir': '\u2A6F',
        'ap': '\u2248',
        'apE': '\u2A70',
        'ape': '\u224A',
        'apid': '\u224B',
        'apos': '\'',
        'ApplyFunction': '\u2061',
        'approx': '\u2248',
        'approxeq': '\u224A',
        'Aring': '\xC5',
        'aring': '\xE5',
        'Ascr': '\uD835\uDC9C',
        'ascr': '\uD835\uDCB6',
        'Assign': '\u2254',
        'ast': '*',
        'asymp': '\u2248',
        'asympeq': '\u224D',
        'Atilde': '\xC3',
        'atilde': '\xE3',
        'Auml': '\xC4',
        'auml': '\xE4',
        'awconint': '\u2233',
        'awint': '\u2A11',
        'backcong': '\u224C',
        'backepsilon': '\u03F6',
        'backprime': '\u2035',
        'backsim': '\u223D',
        'backsimeq': '\u22CD',
        'Backslash': '\u2216',
        'Barv': '\u2AE7',
        'barvee': '\u22BD',
        'barwed': '\u2305',
        'Barwed': '\u2306',
        'barwedge': '\u2305',
        'bbrk': '\u23B5',
        'bbrktbrk': '\u23B6',
        'bcong': '\u224C',
        'Bcy': '\u0411',
        'bcy': '\u0431',
        'bdquo': '\u201E',
        'becaus': '\u2235',
        'because': '\u2235',
        'Because': '\u2235',
        'bemptyv': '\u29B0',
        'bepsi': '\u03F6',
        'bernou': '\u212C',
        'Bernoullis': '\u212C',
        'Beta': '\u0392',
        'beta': '\u03B2',
        'beth': '\u2136',
        'between': '\u226C',
        'Bfr': '\uD835\uDD05',
        'bfr': '\uD835\uDD1F',
        'bigcap': '\u22C2',
        'bigcirc': '\u25EF',
        'bigcup': '\u22C3',
        'bigodot': '\u2A00',
        'bigoplus': '\u2A01',
        'bigotimes': '\u2A02',
        'bigsqcup': '\u2A06',
        'bigstar': '\u2605',
        'bigtriangledown': '\u25BD',
        'bigtriangleup': '\u25B3',
        'biguplus': '\u2A04',
        'bigvee': '\u22C1',
        'bigwedge': '\u22C0',
        'bkarow': '\u290D',
        'blacklozenge': '\u29EB',
        'blacksquare': '\u25AA',
        'blacktriangle': '\u25B4',
        'blacktriangledown': '\u25BE',
        'blacktriangleleft': '\u25C2',
        'blacktriangleright': '\u25B8',
        'blank': '\u2423',
        'blk12': '\u2592',
        'blk14': '\u2591',
        'blk34': '\u2593',
        'block': '\u2588',
        'bne': '=\u20E5',
        'bnequiv': '\u2261\u20E5',
        'bNot': '\u2AED',
        'bnot': '\u2310',
        'Bopf': '\uD835\uDD39',
        'bopf': '\uD835\uDD53',
        'bot': '\u22A5',
        'bottom': '\u22A5',
        'bowtie': '\u22C8',
        'boxbox': '\u29C9',
        'boxdl': '\u2510',
        'boxdL': '\u2555',
        'boxDl': '\u2556',
        'boxDL': '\u2557',
        'boxdr': '\u250C',
        'boxdR': '\u2552',
        'boxDr': '\u2553',
        'boxDR': '\u2554',
        'boxh': '\u2500',
        'boxH': '\u2550',
        'boxhd': '\u252C',
        'boxHd': '\u2564',
        'boxhD': '\u2565',
        'boxHD': '\u2566',
        'boxhu': '\u2534',
        'boxHu': '\u2567',
        'boxhU': '\u2568',
        'boxHU': '\u2569',
        'boxminus': '\u229F',
        'boxplus': '\u229E',
        'boxtimes': '\u22A0',
        'boxul': '\u2518',
        'boxuL': '\u255B',
        'boxUl': '\u255C',
        'boxUL': '\u255D',
        'boxur': '\u2514',
        'boxuR': '\u2558',
        'boxUr': '\u2559',
        'boxUR': '\u255A',
        'boxv': '\u2502',
        'boxV': '\u2551',
        'boxvh': '\u253C',
        'boxvH': '\u256A',
        'boxVh': '\u256B',
        'boxVH': '\u256C',
        'boxvl': '\u2524',
        'boxvL': '\u2561',
        'boxVl': '\u2562',
        'boxVL': '\u2563',
        'boxvr': '\u251C',
        'boxvR': '\u255E',
        'boxVr': '\u255F',
        'boxVR': '\u2560',
        'bprime': '\u2035',
        'breve': '\u02D8',
        'Breve': '\u02D8',
        'brvbar': '\xA6',
        'bscr': '\uD835\uDCB7',
        'Bscr': '\u212C',
        'bsemi': '\u204F',
        'bsim': '\u223D',
        'bsime': '\u22CD',
        'bsolb': '\u29C5',
        'bsol': '\\',
        'bsolhsub': '\u27C8',
        'bull': '\u2022',
        'bullet': '\u2022',
        'bump': '\u224E',
        'bumpE': '\u2AAE',
        'bumpe': '\u224F',
        'Bumpeq': '\u224E',
        'bumpeq': '\u224F',
        'Cacute': '\u0106',
        'cacute': '\u0107',
        'capand': '\u2A44',
        'capbrcup': '\u2A49',
        'capcap': '\u2A4B',
        'cap': '\u2229',
        'Cap': '\u22D2',
        'capcup': '\u2A47',
        'capdot': '\u2A40',
        'CapitalDifferentialD': '\u2145',
        'caps': '\u2229\uFE00',
        'caret': '\u2041',
        'caron': '\u02C7',
        'Cayleys': '\u212D',
        'ccaps': '\u2A4D',
        'Ccaron': '\u010C',
        'ccaron': '\u010D',
        'Ccedil': '\xC7',
        'ccedil': '\xE7',
        'Ccirc': '\u0108',
        'ccirc': '\u0109',
        'Cconint': '\u2230',
        'ccups': '\u2A4C',
        'ccupssm': '\u2A50',
        'Cdot': '\u010A',
        'cdot': '\u010B',
        'cedil': '\xB8',
        'Cedilla': '\xB8',
        'cemptyv': '\u29B2',
        'cent': '\xA2',
        'centerdot': '\xB7',
        'CenterDot': '\xB7',
        'cfr': '\uD835\uDD20',
        'Cfr': '\u212D',
        'CHcy': '\u0427',
        'chcy': '\u0447',
        'check': '\u2713',
        'checkmark': '\u2713',
        'Chi': '\u03A7',
        'chi': '\u03C7',
        'circ': '\u02C6',
        'circeq': '\u2257',
        'circlearrowleft': '\u21BA',
        'circlearrowright': '\u21BB',
        'circledast': '\u229B',
        'circledcirc': '\u229A',
        'circleddash': '\u229D',
        'CircleDot': '\u2299',
        'circledR': '\xAE',
        'circledS': '\u24C8',
        'CircleMinus': '\u2296',
        'CirclePlus': '\u2295',
        'CircleTimes': '\u2297',
        'cir': '\u25CB',
        'cirE': '\u29C3',
        'cire': '\u2257',
        'cirfnint': '\u2A10',
        'cirmid': '\u2AEF',
        'cirscir': '\u29C2',
        'ClockwiseContourIntegral': '\u2232',
        'CloseCurlyDoubleQuote': '\u201D',
        'CloseCurlyQuote': '\u2019',
        'clubs': '\u2663',
        'clubsuit': '\u2663',
        'colon': ':',
        'Colon': '\u2237',
        'Colone': '\u2A74',
        'colone': '\u2254',
        'coloneq': '\u2254',
        'comma': ',',
        'commat': '@',
        'comp': '\u2201',
        'compfn': '\u2218',
        'complement': '\u2201',
        'complexes': '\u2102',
        'cong': '\u2245',
        'congdot': '\u2A6D',
        'Congruent': '\u2261',
        'conint': '\u222E',
        'Conint': '\u222F',
        'ContourIntegral': '\u222E',
        'copf': '\uD835\uDD54',
        'Copf': '\u2102',
        'coprod': '\u2210',
        'Coproduct': '\u2210',
        'copy': '\xA9',
        'COPY': '\xA9',
        'copysr': '\u2117',
        'CounterClockwiseContourIntegral': '\u2233',
        'crarr': '\u21B5',
        'cross': '\u2717',
        'Cross': '\u2A2F',
        'Cscr': '\uD835\uDC9E',
        'cscr': '\uD835\uDCB8',
        'csub': '\u2ACF',
        'csube': '\u2AD1',
        'csup': '\u2AD0',
        'csupe': '\u2AD2',
        'ctdot': '\u22EF',
        'cudarrl': '\u2938',
        'cudarrr': '\u2935',
        'cuepr': '\u22DE',
        'cuesc': '\u22DF',
        'cularr': '\u21B6',
        'cularrp': '\u293D',
        'cupbrcap': '\u2A48',
        'cupcap': '\u2A46',
        'CupCap': '\u224D',
        'cup': '\u222A',
        'Cup': '\u22D3',
        'cupcup': '\u2A4A',
        'cupdot': '\u228D',
        'cupor': '\u2A45',
        'cups': '\u222A\uFE00',
        'curarr': '\u21B7',
        'curarrm': '\u293C',
        'curlyeqprec': '\u22DE',
        'curlyeqsucc': '\u22DF',
        'curlyvee': '\u22CE',
        'curlywedge': '\u22CF',
        'curren': '\xA4',
        'curvearrowleft': '\u21B6',
        'curvearrowright': '\u21B7',
        'cuvee': '\u22CE',
        'cuwed': '\u22CF',
        'cwconint': '\u2232',
        'cwint': '\u2231',
        'cylcty': '\u232D',
        'dagger': '\u2020',
        'Dagger': '\u2021',
        'daleth': '\u2138',
        'darr': '\u2193',
        'Darr': '\u21A1',
        'dArr': '\u21D3',
        'dash': '\u2010',
        'Dashv': '\u2AE4',
        'dashv': '\u22A3',
        'dbkarow': '\u290F',
        'dblac': '\u02DD',
        'Dcaron': '\u010E',
        'dcaron': '\u010F',
        'Dcy': '\u0414',
        'dcy': '\u0434',
        'ddagger': '\u2021',
        'ddarr': '\u21CA',
        'DD': '\u2145',
        'dd': '\u2146',
        'DDotrahd': '\u2911',
        'ddotseq': '\u2A77',
        'deg': '\xB0',
        'Del': '\u2207',
        'Delta': '\u0394',
        'delta': '\u03B4',
        'demptyv': '\u29B1',
        'dfisht': '\u297F',
        'Dfr': '\uD835\uDD07',
        'dfr': '\uD835\uDD21',
        'dHar': '\u2965',
        'dharl': '\u21C3',
        'dharr': '\u21C2',
        'DiacriticalAcute': '\xB4',
        'DiacriticalDot': '\u02D9',
        'DiacriticalDoubleAcute': '\u02DD',
        'DiacriticalGrave': '`',
        'DiacriticalTilde': '\u02DC',
        'diam': '\u22C4',
        'diamond': '\u22C4',
        'Diamond': '\u22C4',
        'diamondsuit': '\u2666',
        'diams': '\u2666',
        'die': '\xA8',
        'DifferentialD': '\u2146',
        'digamma': '\u03DD',
        'disin': '\u22F2',
        'div': '\xF7',
        'divide': '\xF7',
        'divideontimes': '\u22C7',
        'divonx': '\u22C7',
        'DJcy': '\u0402',
        'djcy': '\u0452',
        'dlcorn': '\u231E',
        'dlcrop': '\u230D',
        'dollar': '$',
        'Dopf': '\uD835\uDD3B',
        'dopf': '\uD835\uDD55',
        'Dot': '\xA8',
        'dot': '\u02D9',
        'DotDot': '\u20DC',
        'doteq': '\u2250',
        'doteqdot': '\u2251',
        'DotEqual': '\u2250',
        'dotminus': '\u2238',
        'dotplus': '\u2214',
        'dotsquare': '\u22A1',
        'doublebarwedge': '\u2306',
        'DoubleContourIntegral': '\u222F',
        'DoubleDot': '\xA8',
        'DoubleDownArrow': '\u21D3',
        'DoubleLeftArrow': '\u21D0',
        'DoubleLeftRightArrow': '\u21D4',
        'DoubleLeftTee': '\u2AE4',
        'DoubleLongLeftArrow': '\u27F8',
        'DoubleLongLeftRightArrow': '\u27FA',
        'DoubleLongRightArrow': '\u27F9',
        'DoubleRightArrow': '\u21D2',
        'DoubleRightTee': '\u22A8',
        'DoubleUpArrow': '\u21D1',
        'DoubleUpDownArrow': '\u21D5',
        'DoubleVerticalBar': '\u2225',
        'DownArrowBar': '\u2913',
        'downarrow': '\u2193',
        'DownArrow': '\u2193',
        'Downarrow': '\u21D3',
        'DownArrowUpArrow': '\u21F5',
        'DownBreve': '\u0311',
        'downdownarrows': '\u21CA',
        'downharpoonleft': '\u21C3',
        'downharpoonright': '\u21C2',
        'DownLeftRightVector': '\u2950',
        'DownLeftTeeVector': '\u295E',
        'DownLeftVectorBar': '\u2956',
        'DownLeftVector': '\u21BD',
        'DownRightTeeVector': '\u295F',
        'DownRightVectorBar': '\u2957',
        'DownRightVector': '\u21C1',
        'DownTeeArrow': '\u21A7',
        'DownTee': '\u22A4',
        'drbkarow': '\u2910',
        'drcorn': '\u231F',
        'drcrop': '\u230C',
        'Dscr': '\uD835\uDC9F',
        'dscr': '\uD835\uDCB9',
        'DScy': '\u0405',
        'dscy': '\u0455',
        'dsol': '\u29F6',
        'Dstrok': '\u0110',
        'dstrok': '\u0111',
        'dtdot': '\u22F1',
        'dtri': '\u25BF',
        'dtrif': '\u25BE',
        'duarr': '\u21F5',
        'duhar': '\u296F',
        'dwangle': '\u29A6',
        'DZcy': '\u040F',
        'dzcy': '\u045F',
        'dzigrarr': '\u27FF',
        'Eacute': '\xC9',
        'eacute': '\xE9',
        'easter': '\u2A6E',
        'Ecaron': '\u011A',
        'ecaron': '\u011B',
        'Ecirc': '\xCA',
        'ecirc': '\xEA',
        'ecir': '\u2256',
        'ecolon': '\u2255',
        'Ecy': '\u042D',
        'ecy': '\u044D',
        'eDDot': '\u2A77',
        'Edot': '\u0116',
        'edot': '\u0117',
        'eDot': '\u2251',
        'ee': '\u2147',
        'efDot': '\u2252',
        'Efr': '\uD835\uDD08',
        'efr': '\uD835\uDD22',
        'eg': '\u2A9A',
        'Egrave': '\xC8',
        'egrave': '\xE8',
        'egs': '\u2A96',
        'egsdot': '\u2A98',
        'el': '\u2A99',
        'Element': '\u2208',
        'elinters': '\u23E7',
        'ell': '\u2113',
        'els': '\u2A95',
        'elsdot': '\u2A97',
        'Emacr': '\u0112',
        'emacr': '\u0113',
        'empty': '\u2205',
        'emptyset': '\u2205',
        'EmptySmallSquare': '\u25FB',
        'emptyv': '\u2205',
        'EmptyVerySmallSquare': '\u25AB',
        'emsp13': '\u2004',
        'emsp14': '\u2005',
        'emsp': '\u2003',
        'ENG': '\u014A',
        'eng': '\u014B',
        'ensp': '\u2002',
        'Eogon': '\u0118',
        'eogon': '\u0119',
        'Eopf': '\uD835\uDD3C',
        'eopf': '\uD835\uDD56',
        'epar': '\u22D5',
        'eparsl': '\u29E3',
        'eplus': '\u2A71',
        'epsi': '\u03B5',
        'Epsilon': '\u0395',
        'epsilon': '\u03B5',
        'epsiv': '\u03F5',
        'eqcirc': '\u2256',
        'eqcolon': '\u2255',
        'eqsim': '\u2242',
        'eqslantgtr': '\u2A96',
        'eqslantless': '\u2A95',
        'Equal': '\u2A75',
        'equals': '=',
        'EqualTilde': '\u2242',
        'equest': '\u225F',
        'Equilibrium': '\u21CC',
        'equiv': '\u2261',
        'equivDD': '\u2A78',
        'eqvparsl': '\u29E5',
        'erarr': '\u2971',
        'erDot': '\u2253',
        'escr': '\u212F',
        'Escr': '\u2130',
        'esdot': '\u2250',
        'Esim': '\u2A73',
        'esim': '\u2242',
        'Eta': '\u0397',
        'eta': '\u03B7',
        'ETH': '\xD0',
        'eth': '\xF0',
        'Euml': '\xCB',
        'euml': '\xEB',
        'euro': '\u20AC',
        'excl': '!',
        'exist': '\u2203',
        'Exists': '\u2203',
        'expectation': '\u2130',
        'exponentiale': '\u2147',
        'ExponentialE': '\u2147',
        'fallingdotseq': '\u2252',
        'Fcy': '\u0424',
        'fcy': '\u0444',
        'female': '\u2640',
        'ffilig': '\uFB03',
        'fflig': '\uFB00',
        'ffllig': '\uFB04',
        'Ffr': '\uD835\uDD09',
        'ffr': '\uD835\uDD23',
        'filig': '\uFB01',
        'FilledSmallSquare': '\u25FC',
        'FilledVerySmallSquare': '\u25AA',
        'fjlig': 'fj',
        'flat': '\u266D',
        'fllig': '\uFB02',
        'fltns': '\u25B1',
        'fnof': '\u0192',
        'Fopf': '\uD835\uDD3D',
        'fopf': '\uD835\uDD57',
        'forall': '\u2200',
        'ForAll': '\u2200',
        'fork': '\u22D4',
        'forkv': '\u2AD9',
        'Fouriertrf': '\u2131',
        'fpartint': '\u2A0D',
        'frac12': '\xBD',
        'frac13': '\u2153',
        'frac14': '\xBC',
        'frac15': '\u2155',
        'frac16': '\u2159',
        'frac18': '\u215B',
        'frac23': '\u2154',
        'frac25': '\u2156',
        'frac34': '\xBE',
        'frac35': '\u2157',
        'frac38': '\u215C',
        'frac45': '\u2158',
        'frac56': '\u215A',
        'frac58': '\u215D',
        'frac78': '\u215E',
        'frasl': '\u2044',
        'frown': '\u2322',
        'fscr': '\uD835\uDCBB',
        'Fscr': '\u2131',
        'gacute': '\u01F5',
        'Gamma': '\u0393',
        'gamma': '\u03B3',
        'Gammad': '\u03DC',
        'gammad': '\u03DD',
        'gap': '\u2A86',
        'Gbreve': '\u011E',
        'gbreve': '\u011F',
        'Gcedil': '\u0122',
        'Gcirc': '\u011C',
        'gcirc': '\u011D',
        'Gcy': '\u0413',
        'gcy': '\u0433',
        'Gdot': '\u0120',
        'gdot': '\u0121',
        'ge': '\u2265',
        'gE': '\u2267',
        'gEl': '\u2A8C',
        'gel': '\u22DB',
        'geq': '\u2265',
        'geqq': '\u2267',
        'geqslant': '\u2A7E',
        'gescc': '\u2AA9',
        'ges': '\u2A7E',
        'gesdot': '\u2A80',
        'gesdoto': '\u2A82',
        'gesdotol': '\u2A84',
        'gesl': '\u22DB\uFE00',
        'gesles': '\u2A94',
        'Gfr': '\uD835\uDD0A',
        'gfr': '\uD835\uDD24',
        'gg': '\u226B',
        'Gg': '\u22D9',
        'ggg': '\u22D9',
        'gimel': '\u2137',
        'GJcy': '\u0403',
        'gjcy': '\u0453',
        'gla': '\u2AA5',
        'gl': '\u2277',
        'glE': '\u2A92',
        'glj': '\u2AA4',
        'gnap': '\u2A8A',
        'gnapprox': '\u2A8A',
        'gne': '\u2A88',
        'gnE': '\u2269',
        'gneq': '\u2A88',
        'gneqq': '\u2269',
        'gnsim': '\u22E7',
        'Gopf': '\uD835\uDD3E',
        'gopf': '\uD835\uDD58',
        'grave': '`',
        'GreaterEqual': '\u2265',
        'GreaterEqualLess': '\u22DB',
        'GreaterFullEqual': '\u2267',
        'GreaterGreater': '\u2AA2',
        'GreaterLess': '\u2277',
        'GreaterSlantEqual': '\u2A7E',
        'GreaterTilde': '\u2273',
        'Gscr': '\uD835\uDCA2',
        'gscr': '\u210A',
        'gsim': '\u2273',
        'gsime': '\u2A8E',
        'gsiml': '\u2A90',
        'gtcc': '\u2AA7',
        'gtcir': '\u2A7A',
        'gt': '>',
        'GT': '>',
        'Gt': '\u226B',
        'gtdot': '\u22D7',
        'gtlPar': '\u2995',
        'gtquest': '\u2A7C',
        'gtrapprox': '\u2A86',
        'gtrarr': '\u2978',
        'gtrdot': '\u22D7',
        'gtreqless': '\u22DB',
        'gtreqqless': '\u2A8C',
        'gtrless': '\u2277',
        'gtrsim': '\u2273',
        'gvertneqq': '\u2269\uFE00',
        'gvnE': '\u2269\uFE00',
        'Hacek': '\u02C7',
        'hairsp': '\u200A',
        'half': '\xBD',
        'hamilt': '\u210B',
        'HARDcy': '\u042A',
        'hardcy': '\u044A',
        'harrcir': '\u2948',
        'harr': '\u2194',
        'hArr': '\u21D4',
        'harrw': '\u21AD',
        'Hat': '^',
        'hbar': '\u210F',
        'Hcirc': '\u0124',
        'hcirc': '\u0125',
        'hearts': '\u2665',
        'heartsuit': '\u2665',
        'hellip': '\u2026',
        'hercon': '\u22B9',
        'hfr': '\uD835\uDD25',
        'Hfr': '\u210C',
        'HilbertSpace': '\u210B',
        'hksearow': '\u2925',
        'hkswarow': '\u2926',
        'hoarr': '\u21FF',
        'homtht': '\u223B',
        'hookleftarrow': '\u21A9',
        'hookrightarrow': '\u21AA',
        'hopf': '\uD835\uDD59',
        'Hopf': '\u210D',
        'horbar': '\u2015',
        'HorizontalLine': '\u2500',
        'hscr': '\uD835\uDCBD',
        'Hscr': '\u210B',
        'hslash': '\u210F',
        'Hstrok': '\u0126',
        'hstrok': '\u0127',
        'HumpDownHump': '\u224E',
        'HumpEqual': '\u224F',
        'hybull': '\u2043',
        'hyphen': '\u2010',
        'Iacute': '\xCD',
        'iacute': '\xED',
        'ic': '\u2063',
        'Icirc': '\xCE',
        'icirc': '\xEE',
        'Icy': '\u0418',
        'icy': '\u0438',
        'Idot': '\u0130',
        'IEcy': '\u0415',
        'iecy': '\u0435',
        'iexcl': '\xA1',
        'iff': '\u21D4',
        'ifr': '\uD835\uDD26',
        'Ifr': '\u2111',
        'Igrave': '\xCC',
        'igrave': '\xEC',
        'ii': '\u2148',
        'iiiint': '\u2A0C',
        'iiint': '\u222D',
        'iinfin': '\u29DC',
        'iiota': '\u2129',
        'IJlig': '\u0132',
        'ijlig': '\u0133',
        'Imacr': '\u012A',
        'imacr': '\u012B',
        'image': '\u2111',
        'ImaginaryI': '\u2148',
        'imagline': '\u2110',
        'imagpart': '\u2111',
        'imath': '\u0131',
        'Im': '\u2111',
        'imof': '\u22B7',
        'imped': '\u01B5',
        'Implies': '\u21D2',
        'incare': '\u2105',
        'in': '\u2208',
        'infin': '\u221E',
        'infintie': '\u29DD',
        'inodot': '\u0131',
        'intcal': '\u22BA',
        'int': '\u222B',
        'Int': '\u222C',
        'integers': '\u2124',
        'Integral': '\u222B',
        'intercal': '\u22BA',
        'Intersection': '\u22C2',
        'intlarhk': '\u2A17',
        'intprod': '\u2A3C',
        'InvisibleComma': '\u2063',
        'InvisibleTimes': '\u2062',
        'IOcy': '\u0401',
        'iocy': '\u0451',
        'Iogon': '\u012E',
        'iogon': '\u012F',
        'Iopf': '\uD835\uDD40',
        'iopf': '\uD835\uDD5A',
        'Iota': '\u0399',
        'iota': '\u03B9',
        'iprod': '\u2A3C',
        'iquest': '\xBF',
        'iscr': '\uD835\uDCBE',
        'Iscr': '\u2110',
        'isin': '\u2208',
        'isindot': '\u22F5',
        'isinE': '\u22F9',
        'isins': '\u22F4',
        'isinsv': '\u22F3',
        'isinv': '\u2208',
        'it': '\u2062',
        'Itilde': '\u0128',
        'itilde': '\u0129',
        'Iukcy': '\u0406',
        'iukcy': '\u0456',
        'Iuml': '\xCF',
        'iuml': '\xEF',
        'Jcirc': '\u0134',
        'jcirc': '\u0135',
        'Jcy': '\u0419',
        'jcy': '\u0439',
        'Jfr': '\uD835\uDD0D',
        'jfr': '\uD835\uDD27',
        'jmath': '\u0237',
        'Jopf': '\uD835\uDD41',
        'jopf': '\uD835\uDD5B',
        'Jscr': '\uD835\uDCA5',
        'jscr': '\uD835\uDCBF',
        'Jsercy': '\u0408',
        'jsercy': '\u0458',
        'Jukcy': '\u0404',
        'jukcy': '\u0454',
        'Kappa': '\u039A',
        'kappa': '\u03BA',
        'kappav': '\u03F0',
        'Kcedil': '\u0136',
        'kcedil': '\u0137',
        'Kcy': '\u041A',
        'kcy': '\u043A',
        'Kfr': '\uD835\uDD0E',
        'kfr': '\uD835\uDD28',
        'kgreen': '\u0138',
        'KHcy': '\u0425',
        'khcy': '\u0445',
        'KJcy': '\u040C',
        'kjcy': '\u045C',
        'Kopf': '\uD835\uDD42',
        'kopf': '\uD835\uDD5C',
        'Kscr': '\uD835\uDCA6',
        'kscr': '\uD835\uDCC0',
        'lAarr': '\u21DA',
        'Lacute': '\u0139',
        'lacute': '\u013A',
        'laemptyv': '\u29B4',
        'lagran': '\u2112',
        'Lambda': '\u039B',
        'lambda': '\u03BB',
        'lang': '\u27E8',
        'Lang': '\u27EA',
        'langd': '\u2991',
        'langle': '\u27E8',
        'lap': '\u2A85',
        'Laplacetrf': '\u2112',
        'laquo': '\xAB',
        'larrb': '\u21E4',
        'larrbfs': '\u291F',
        'larr': '\u2190',
        'Larr': '\u219E',
        'lArr': '\u21D0',
        'larrfs': '\u291D',
        'larrhk': '\u21A9',
        'larrlp': '\u21AB',
        'larrpl': '\u2939',
        'larrsim': '\u2973',
        'larrtl': '\u21A2',
        'latail': '\u2919',
        'lAtail': '\u291B',
        'lat': '\u2AAB',
        'late': '\u2AAD',
        'lates': '\u2AAD\uFE00',
        'lbarr': '\u290C',
        'lBarr': '\u290E',
        'lbbrk': '\u2772',
        'lbrace': '{',
        'lbrack': '[',
        'lbrke': '\u298B',
        'lbrksld': '\u298F',
        'lbrkslu': '\u298D',
        'Lcaron': '\u013D',
        'lcaron': '\u013E',
        'Lcedil': '\u013B',
        'lcedil': '\u013C',
        'lceil': '\u2308',
        'lcub': '{',
        'Lcy': '\u041B',
        'lcy': '\u043B',
        'ldca': '\u2936',
        'ldquo': '\u201C',
        'ldquor': '\u201E',
        'ldrdhar': '\u2967',
        'ldrushar': '\u294B',
        'ldsh': '\u21B2',
        'le': '\u2264',
        'lE': '\u2266',
        'LeftAngleBracket': '\u27E8',
        'LeftArrowBar': '\u21E4',
        'leftarrow': '\u2190',
        'LeftArrow': '\u2190',
        'Leftarrow': '\u21D0',
        'LeftArrowRightArrow': '\u21C6',
        'leftarrowtail': '\u21A2',
        'LeftCeiling': '\u2308',
        'LeftDoubleBracket': '\u27E6',
        'LeftDownTeeVector': '\u2961',
        'LeftDownVectorBar': '\u2959',
        'LeftDownVector': '\u21C3',
        'LeftFloor': '\u230A',
        'leftharpoondown': '\u21BD',
        'leftharpoonup': '\u21BC',
        'leftleftarrows': '\u21C7',
        'leftrightarrow': '\u2194',
        'LeftRightArrow': '\u2194',
        'Leftrightarrow': '\u21D4',
        'leftrightarrows': '\u21C6',
        'leftrightharpoons': '\u21CB',
        'leftrightsquigarrow': '\u21AD',
        'LeftRightVector': '\u294E',
        'LeftTeeArrow': '\u21A4',
        'LeftTee': '\u22A3',
        'LeftTeeVector': '\u295A',
        'leftthreetimes': '\u22CB',
        'LeftTriangleBar': '\u29CF',
        'LeftTriangle': '\u22B2',
        'LeftTriangleEqual': '\u22B4',
        'LeftUpDownVector': '\u2951',
        'LeftUpTeeVector': '\u2960',
        'LeftUpVectorBar': '\u2958',
        'LeftUpVector': '\u21BF',
        'LeftVectorBar': '\u2952',
        'LeftVector': '\u21BC',
        'lEg': '\u2A8B',
        'leg': '\u22DA',
        'leq': '\u2264',
        'leqq': '\u2266',
        'leqslant': '\u2A7D',
        'lescc': '\u2AA8',
        'les': '\u2A7D',
        'lesdot': '\u2A7F',
        'lesdoto': '\u2A81',
        'lesdotor': '\u2A83',
        'lesg': '\u22DA\uFE00',
        'lesges': '\u2A93',
        'lessapprox': '\u2A85',
        'lessdot': '\u22D6',
        'lesseqgtr': '\u22DA',
        'lesseqqgtr': '\u2A8B',
        'LessEqualGreater': '\u22DA',
        'LessFullEqual': '\u2266',
        'LessGreater': '\u2276',
        'lessgtr': '\u2276',
        'LessLess': '\u2AA1',
        'lesssim': '\u2272',
        'LessSlantEqual': '\u2A7D',
        'LessTilde': '\u2272',
        'lfisht': '\u297C',
        'lfloor': '\u230A',
        'Lfr': '\uD835\uDD0F',
        'lfr': '\uD835\uDD29',
        'lg': '\u2276',
        'lgE': '\u2A91',
        'lHar': '\u2962',
        'lhard': '\u21BD',
        'lharu': '\u21BC',
        'lharul': '\u296A',
        'lhblk': '\u2584',
        'LJcy': '\u0409',
        'ljcy': '\u0459',
        'llarr': '\u21C7',
        'll': '\u226A',
        'Ll': '\u22D8',
        'llcorner': '\u231E',
        'Lleftarrow': '\u21DA',
        'llhard': '\u296B',
        'lltri': '\u25FA',
        'Lmidot': '\u013F',
        'lmidot': '\u0140',
        'lmoustache': '\u23B0',
        'lmoust': '\u23B0',
        'lnap': '\u2A89',
        'lnapprox': '\u2A89',
        'lne': '\u2A87',
        'lnE': '\u2268',
        'lneq': '\u2A87',
        'lneqq': '\u2268',
        'lnsim': '\u22E6',
        'loang': '\u27EC',
        'loarr': '\u21FD',
        'lobrk': '\u27E6',
        'longleftarrow': '\u27F5',
        'LongLeftArrow': '\u27F5',
        'Longleftarrow': '\u27F8',
        'longleftrightarrow': '\u27F7',
        'LongLeftRightArrow': '\u27F7',
        'Longleftrightarrow': '\u27FA',
        'longmapsto': '\u27FC',
        'longrightarrow': '\u27F6',
        'LongRightArrow': '\u27F6',
        'Longrightarrow': '\u27F9',
        'looparrowleft': '\u21AB',
        'looparrowright': '\u21AC',
        'lopar': '\u2985',
        'Lopf': '\uD835\uDD43',
        'lopf': '\uD835\uDD5D',
        'loplus': '\u2A2D',
        'lotimes': '\u2A34',
        'lowast': '\u2217',
        'lowbar': '_',
        'LowerLeftArrow': '\u2199',
        'LowerRightArrow': '\u2198',
        'loz': '\u25CA',
        'lozenge': '\u25CA',
        'lozf': '\u29EB',
        'lpar': '(',
        'lparlt': '\u2993',
        'lrarr': '\u21C6',
        'lrcorner': '\u231F',
        'lrhar': '\u21CB',
        'lrhard': '\u296D',
        'lrm': '\u200E',
        'lrtri': '\u22BF',
        'lsaquo': '\u2039',
        'lscr': '\uD835\uDCC1',
        'Lscr': '\u2112',
        'lsh': '\u21B0',
        'Lsh': '\u21B0',
        'lsim': '\u2272',
        'lsime': '\u2A8D',
        'lsimg': '\u2A8F',
        'lsqb': '[',
        'lsquo': '\u2018',
        'lsquor': '\u201A',
        'Lstrok': '\u0141',
        'lstrok': '\u0142',
        'ltcc': '\u2AA6',
        'ltcir': '\u2A79',
        'lt': '<',
        'LT': '<',
        'Lt': '\u226A',
        'ltdot': '\u22D6',
        'lthree': '\u22CB',
        'ltimes': '\u22C9',
        'ltlarr': '\u2976',
        'ltquest': '\u2A7B',
        'ltri': '\u25C3',
        'ltrie': '\u22B4',
        'ltrif': '\u25C2',
        'ltrPar': '\u2996',
        'lurdshar': '\u294A',
        'luruhar': '\u2966',
        'lvertneqq': '\u2268\uFE00',
        'lvnE': '\u2268\uFE00',
        'macr': '\xAF',
        'male': '\u2642',
        'malt': '\u2720',
        'maltese': '\u2720',
        'Map': '\u2905',
        'map': '\u21A6',
        'mapsto': '\u21A6',
        'mapstodown': '\u21A7',
        'mapstoleft': '\u21A4',
        'mapstoup': '\u21A5',
        'marker': '\u25AE',
        'mcomma': '\u2A29',
        'Mcy': '\u041C',
        'mcy': '\u043C',
        'mdash': '\u2014',
        'mDDot': '\u223A',
        'measuredangle': '\u2221',
        'MediumSpace': '\u205F',
        'Mellintrf': '\u2133',
        'Mfr': '\uD835\uDD10',
        'mfr': '\uD835\uDD2A',
        'mho': '\u2127',
        'micro': '\xB5',
        'midast': '*',
        'midcir': '\u2AF0',
        'mid': '\u2223',
        'middot': '\xB7',
        'minusb': '\u229F',
        'minus': '\u2212',
        'minusd': '\u2238',
        'minusdu': '\u2A2A',
        'MinusPlus': '\u2213',
        'mlcp': '\u2ADB',
        'mldr': '\u2026',
        'mnplus': '\u2213',
        'models': '\u22A7',
        'Mopf': '\uD835\uDD44',
        'mopf': '\uD835\uDD5E',
        'mp': '\u2213',
        'mscr': '\uD835\uDCC2',
        'Mscr': '\u2133',
        'mstpos': '\u223E',
        'Mu': '\u039C',
        'mu': '\u03BC',
        'multimap': '\u22B8',
        'mumap': '\u22B8',
        'nabla': '\u2207',
        'Nacute': '\u0143',
        'nacute': '\u0144',
        'nang': '\u2220\u20D2',
        'nap': '\u2249',
        'napE': '\u2A70\u0338',
        'napid': '\u224B\u0338',
        'napos': '\u0149',
        'napprox': '\u2249',
        'natural': '\u266E',
        'naturals': '\u2115',
        'natur': '\u266E',
        'nbsp': '\xA0',
        'nbump': '\u224E\u0338',
        'nbumpe': '\u224F\u0338',
        'ncap': '\u2A43',
        'Ncaron': '\u0147',
        'ncaron': '\u0148',
        'Ncedil': '\u0145',
        'ncedil': '\u0146',
        'ncong': '\u2247',
        'ncongdot': '\u2A6D\u0338',
        'ncup': '\u2A42',
        'Ncy': '\u041D',
        'ncy': '\u043D',
        'ndash': '\u2013',
        'nearhk': '\u2924',
        'nearr': '\u2197',
        'neArr': '\u21D7',
        'nearrow': '\u2197',
        'ne': '\u2260',
        'nedot': '\u2250\u0338',
        'NegativeMediumSpace': '\u200B',
        'NegativeThickSpace': '\u200B',
        'NegativeThinSpace': '\u200B',
        'NegativeVeryThinSpace': '\u200B',
        'nequiv': '\u2262',
        'nesear': '\u2928',
        'nesim': '\u2242\u0338',
        'NestedGreaterGreater': '\u226B',
        'NestedLessLess': '\u226A',
        'NewLine': '\n',
        'nexist': '\u2204',
        'nexists': '\u2204',
        'Nfr': '\uD835\uDD11',
        'nfr': '\uD835\uDD2B',
        'ngE': '\u2267\u0338',
        'nge': '\u2271',
        'ngeq': '\u2271',
        'ngeqq': '\u2267\u0338',
        'ngeqslant': '\u2A7E\u0338',
        'nges': '\u2A7E\u0338',
        'nGg': '\u22D9\u0338',
        'ngsim': '\u2275',
        'nGt': '\u226B\u20D2',
        'ngt': '\u226F',
        'ngtr': '\u226F',
        'nGtv': '\u226B\u0338',
        'nharr': '\u21AE',
        'nhArr': '\u21CE',
        'nhpar': '\u2AF2',
        'ni': '\u220B',
        'nis': '\u22FC',
        'nisd': '\u22FA',
        'niv': '\u220B',
        'NJcy': '\u040A',
        'njcy': '\u045A',
        'nlarr': '\u219A',
        'nlArr': '\u21CD',
        'nldr': '\u2025',
        'nlE': '\u2266\u0338',
        'nle': '\u2270',
        'nleftarrow': '\u219A',
        'nLeftarrow': '\u21CD',
        'nleftrightarrow': '\u21AE',
        'nLeftrightarrow': '\u21CE',
        'nleq': '\u2270',
        'nleqq': '\u2266\u0338',
        'nleqslant': '\u2A7D\u0338',
        'nles': '\u2A7D\u0338',
        'nless': '\u226E',
        'nLl': '\u22D8\u0338',
        'nlsim': '\u2274',
        'nLt': '\u226A\u20D2',
        'nlt': '\u226E',
        'nltri': '\u22EA',
        'nltrie': '\u22EC',
        'nLtv': '\u226A\u0338',
        'nmid': '\u2224',
        'NoBreak': '\u2060',
        'NonBreakingSpace': '\xA0',
        'nopf': '\uD835\uDD5F',
        'Nopf': '\u2115',
        'Not': '\u2AEC',
        'not': '\xAC',
        'NotCongruent': '\u2262',
        'NotCupCap': '\u226D',
        'NotDoubleVerticalBar': '\u2226',
        'NotElement': '\u2209',
        'NotEqual': '\u2260',
        'NotEqualTilde': '\u2242\u0338',
        'NotExists': '\u2204',
        'NotGreater': '\u226F',
        'NotGreaterEqual': '\u2271',
        'NotGreaterFullEqual': '\u2267\u0338',
        'NotGreaterGreater': '\u226B\u0338',
        'NotGreaterLess': '\u2279',
        'NotGreaterSlantEqual': '\u2A7E\u0338',
        'NotGreaterTilde': '\u2275',
        'NotHumpDownHump': '\u224E\u0338',
        'NotHumpEqual': '\u224F\u0338',
        'notin': '\u2209',
        'notindot': '\u22F5\u0338',
        'notinE': '\u22F9\u0338',
        'notinva': '\u2209',
        'notinvb': '\u22F7',
        'notinvc': '\u22F6',
        'NotLeftTriangleBar': '\u29CF\u0338',
        'NotLeftTriangle': '\u22EA',
        'NotLeftTriangleEqual': '\u22EC',
        'NotLess': '\u226E',
        'NotLessEqual': '\u2270',
        'NotLessGreater': '\u2278',
        'NotLessLess': '\u226A\u0338',
        'NotLessSlantEqual': '\u2A7D\u0338',
        'NotLessTilde': '\u2274',
        'NotNestedGreaterGreater': '\u2AA2\u0338',
        'NotNestedLessLess': '\u2AA1\u0338',
        'notni': '\u220C',
        'notniva': '\u220C',
        'notnivb': '\u22FE',
        'notnivc': '\u22FD',
        'NotPrecedes': '\u2280',
        'NotPrecedesEqual': '\u2AAF\u0338',
        'NotPrecedesSlantEqual': '\u22E0',
        'NotReverseElement': '\u220C',
        'NotRightTriangleBar': '\u29D0\u0338',
        'NotRightTriangle': '\u22EB',
        'NotRightTriangleEqual': '\u22ED',
        'NotSquareSubset': '\u228F\u0338',
        'NotSquareSubsetEqual': '\u22E2',
        'NotSquareSuperset': '\u2290\u0338',
        'NotSquareSupersetEqual': '\u22E3',
        'NotSubset': '\u2282\u20D2',
        'NotSubsetEqual': '\u2288',
        'NotSucceeds': '\u2281',
        'NotSucceedsEqual': '\u2AB0\u0338',
        'NotSucceedsSlantEqual': '\u22E1',
        'NotSucceedsTilde': '\u227F\u0338',
        'NotSuperset': '\u2283\u20D2',
        'NotSupersetEqual': '\u2289',
        'NotTilde': '\u2241',
        'NotTildeEqual': '\u2244',
        'NotTildeFullEqual': '\u2247',
        'NotTildeTilde': '\u2249',
        'NotVerticalBar': '\u2224',
        'nparallel': '\u2226',
        'npar': '\u2226',
        'nparsl': '\u2AFD\u20E5',
        'npart': '\u2202\u0338',
        'npolint': '\u2A14',
        'npr': '\u2280',
        'nprcue': '\u22E0',
        'nprec': '\u2280',
        'npreceq': '\u2AAF\u0338',
        'npre': '\u2AAF\u0338',
        'nrarrc': '\u2933\u0338',
        'nrarr': '\u219B',
        'nrArr': '\u21CF',
        'nrarrw': '\u219D\u0338',
        'nrightarrow': '\u219B',
        'nRightarrow': '\u21CF',
        'nrtri': '\u22EB',
        'nrtrie': '\u22ED',
        'nsc': '\u2281',
        'nsccue': '\u22E1',
        'nsce': '\u2AB0\u0338',
        'Nscr': '\uD835\uDCA9',
        'nscr': '\uD835\uDCC3',
        'nshortmid': '\u2224',
        'nshortparallel': '\u2226',
        'nsim': '\u2241',
        'nsime': '\u2244',
        'nsimeq': '\u2244',
        'nsmid': '\u2224',
        'nspar': '\u2226',
        'nsqsube': '\u22E2',
        'nsqsupe': '\u22E3',
        'nsub': '\u2284',
        'nsubE': '\u2AC5\u0338',
        'nsube': '\u2288',
        'nsubset': '\u2282\u20D2',
        'nsubseteq': '\u2288',
        'nsubseteqq': '\u2AC5\u0338',
        'nsucc': '\u2281',
        'nsucceq': '\u2AB0\u0338',
        'nsup': '\u2285',
        'nsupE': '\u2AC6\u0338',
        'nsupe': '\u2289',
        'nsupset': '\u2283\u20D2',
        'nsupseteq': '\u2289',
        'nsupseteqq': '\u2AC6\u0338',
        'ntgl': '\u2279',
        'Ntilde': '\xD1',
        'ntilde': '\xF1',
        'ntlg': '\u2278',
        'ntriangleleft': '\u22EA',
        'ntrianglelefteq': '\u22EC',
        'ntriangleright': '\u22EB',
        'ntrianglerighteq': '\u22ED',
        'Nu': '\u039D',
        'nu': '\u03BD',
        'num': '#',
        'numero': '\u2116',
        'numsp': '\u2007',
        'nvap': '\u224D\u20D2',
        'nvdash': '\u22AC',
        'nvDash': '\u22AD',
        'nVdash': '\u22AE',
        'nVDash': '\u22AF',
        'nvge': '\u2265\u20D2',
        'nvgt': '>\u20D2',
        'nvHarr': '\u2904',
        'nvinfin': '\u29DE',
        'nvlArr': '\u2902',
        'nvle': '\u2264\u20D2',
        'nvlt': '<\u20D2',
        'nvltrie': '\u22B4\u20D2',
        'nvrArr': '\u2903',
        'nvrtrie': '\u22B5\u20D2',
        'nvsim': '\u223C\u20D2',
        'nwarhk': '\u2923',
        'nwarr': '\u2196',
        'nwArr': '\u21D6',
        'nwarrow': '\u2196',
        'nwnear': '\u2927',
        'Oacute': '\xD3',
        'oacute': '\xF3',
        'oast': '\u229B',
        'Ocirc': '\xD4',
        'ocirc': '\xF4',
        'ocir': '\u229A',
        'Ocy': '\u041E',
        'ocy': '\u043E',
        'odash': '\u229D',
        'Odblac': '\u0150',
        'odblac': '\u0151',
        'odiv': '\u2A38',
        'odot': '\u2299',
        'odsold': '\u29BC',
        'OElig': '\u0152',
        'oelig': '\u0153',
        'ofcir': '\u29BF',
        'Ofr': '\uD835\uDD12',
        'ofr': '\uD835\uDD2C',
        'ogon': '\u02DB',
        'Ograve': '\xD2',
        'ograve': '\xF2',
        'ogt': '\u29C1',
        'ohbar': '\u29B5',
        'ohm': '\u03A9',
        'oint': '\u222E',
        'olarr': '\u21BA',
        'olcir': '\u29BE',
        'olcross': '\u29BB',
        'oline': '\u203E',
        'olt': '\u29C0',
        'Omacr': '\u014C',
        'omacr': '\u014D',
        'Omega': '\u03A9',
        'omega': '\u03C9',
        'Omicron': '\u039F',
        'omicron': '\u03BF',
        'omid': '\u29B6',
        'ominus': '\u2296',
        'Oopf': '\uD835\uDD46',
        'oopf': '\uD835\uDD60',
        'opar': '\u29B7',
        'OpenCurlyDoubleQuote': '\u201C',
        'OpenCurlyQuote': '\u2018',
        'operp': '\u29B9',
        'oplus': '\u2295',
        'orarr': '\u21BB',
        'Or': '\u2A54',
        'or': '\u2228',
        'ord': '\u2A5D',
        'order': '\u2134',
        'orderof': '\u2134',
        'ordf': '\xAA',
        'ordm': '\xBA',
        'origof': '\u22B6',
        'oror': '\u2A56',
        'orslope': '\u2A57',
        'orv': '\u2A5B',
        'oS': '\u24C8',
        'Oscr': '\uD835\uDCAA',
        'oscr': '\u2134',
        'Oslash': '\xD8',
        'oslash': '\xF8',
        'osol': '\u2298',
        'Otilde': '\xD5',
        'otilde': '\xF5',
        'otimesas': '\u2A36',
        'Otimes': '\u2A37',
        'otimes': '\u2297',
        'Ouml': '\xD6',
        'ouml': '\xF6',
        'ovbar': '\u233D',
        'OverBar': '\u203E',
        'OverBrace': '\u23DE',
        'OverBracket': '\u23B4',
        'OverParenthesis': '\u23DC',
        'para': '\xB6',
        'parallel': '\u2225',
        'par': '\u2225',
        'parsim': '\u2AF3',
        'parsl': '\u2AFD',
        'part': '\u2202',
        'PartialD': '\u2202',
        'Pcy': '\u041F',
        'pcy': '\u043F',
        'percnt': '%',
        'period': '.',
        'permil': '\u2030',
        'perp': '\u22A5',
        'pertenk': '\u2031',
        'Pfr': '\uD835\uDD13',
        'pfr': '\uD835\uDD2D',
        'Phi': '\u03A6',
        'phi': '\u03C6',
        'phiv': '\u03D5',
        'phmmat': '\u2133',
        'phone': '\u260E',
        'Pi': '\u03A0',
        'pi': '\u03C0',
        'pitchfork': '\u22D4',
        'piv': '\u03D6',
        'planck': '\u210F',
        'planckh': '\u210E',
        'plankv': '\u210F',
        'plusacir': '\u2A23',
        'plusb': '\u229E',
        'pluscir': '\u2A22',
        'plus': '+',
        'plusdo': '\u2214',
        'plusdu': '\u2A25',
        'pluse': '\u2A72',
        'PlusMinus': '\xB1',
        'plusmn': '\xB1',
        'plussim': '\u2A26',
        'plustwo': '\u2A27',
        'pm': '\xB1',
        'Poincareplane': '\u210C',
        'pointint': '\u2A15',
        'popf': '\uD835\uDD61',
        'Popf': '\u2119',
        'pound': '\xA3',
        'prap': '\u2AB7',
        'Pr': '\u2ABB',
        'pr': '\u227A',
        'prcue': '\u227C',
        'precapprox': '\u2AB7',
        'prec': '\u227A',
        'preccurlyeq': '\u227C',
        'Precedes': '\u227A',
        'PrecedesEqual': '\u2AAF',
        'PrecedesSlantEqual': '\u227C',
        'PrecedesTilde': '\u227E',
        'preceq': '\u2AAF',
        'precnapprox': '\u2AB9',
        'precneqq': '\u2AB5',
        'precnsim': '\u22E8',
        'pre': '\u2AAF',
        'prE': '\u2AB3',
        'precsim': '\u227E',
        'prime': '\u2032',
        'Prime': '\u2033',
        'primes': '\u2119',
        'prnap': '\u2AB9',
        'prnE': '\u2AB5',
        'prnsim': '\u22E8',
        'prod': '\u220F',
        'Product': '\u220F',
        'profalar': '\u232E',
        'profline': '\u2312',
        'profsurf': '\u2313',
        'prop': '\u221D',
        'Proportional': '\u221D',
        'Proportion': '\u2237',
        'propto': '\u221D',
        'prsim': '\u227E',
        'prurel': '\u22B0',
        'Pscr': '\uD835\uDCAB',
        'pscr': '\uD835\uDCC5',
        'Psi': '\u03A8',
        'psi': '\u03C8',
        'puncsp': '\u2008',
        'Qfr': '\uD835\uDD14',
        'qfr': '\uD835\uDD2E',
        'qint': '\u2A0C',
        'qopf': '\uD835\uDD62',
        'Qopf': '\u211A',
        'qprime': '\u2057',
        'Qscr': '\uD835\uDCAC',
        'qscr': '\uD835\uDCC6',
        'quaternions': '\u210D',
        'quatint': '\u2A16',
        'quest': '?',
        'questeq': '\u225F',
        'quot': '"',
        'QUOT': '"',
        'rAarr': '\u21DB',
        'race': '\u223D\u0331',
        'Racute': '\u0154',
        'racute': '\u0155',
        'radic': '\u221A',
        'raemptyv': '\u29B3',
        'rang': '\u27E9',
        'Rang': '\u27EB',
        'rangd': '\u2992',
        'range': '\u29A5',
        'rangle': '\u27E9',
        'raquo': '\xBB',
        'rarrap': '\u2975',
        'rarrb': '\u21E5',
        'rarrbfs': '\u2920',
        'rarrc': '\u2933',
        'rarr': '\u2192',
        'Rarr': '\u21A0',
        'rArr': '\u21D2',
        'rarrfs': '\u291E',
        'rarrhk': '\u21AA',
        'rarrlp': '\u21AC',
        'rarrpl': '\u2945',
        'rarrsim': '\u2974',
        'Rarrtl': '\u2916',
        'rarrtl': '\u21A3',
        'rarrw': '\u219D',
        'ratail': '\u291A',
        'rAtail': '\u291C',
        'ratio': '\u2236',
        'rationals': '\u211A',
        'rbarr': '\u290D',
        'rBarr': '\u290F',
        'RBarr': '\u2910',
        'rbbrk': '\u2773',
        'rbrace': '}',
        'rbrack': ']',
        'rbrke': '\u298C',
        'rbrksld': '\u298E',
        'rbrkslu': '\u2990',
        'Rcaron': '\u0158',
        'rcaron': '\u0159',
        'Rcedil': '\u0156',
        'rcedil': '\u0157',
        'rceil': '\u2309',
        'rcub': '}',
        'Rcy': '\u0420',
        'rcy': '\u0440',
        'rdca': '\u2937',
        'rdldhar': '\u2969',
        'rdquo': '\u201D',
        'rdquor': '\u201D',
        'rdsh': '\u21B3',
        'real': '\u211C',
        'realine': '\u211B',
        'realpart': '\u211C',
        'reals': '\u211D',
        'Re': '\u211C',
        'rect': '\u25AD',
        'reg': '\xAE',
        'REG': '\xAE',
        'ReverseElement': '\u220B',
        'ReverseEquilibrium': '\u21CB',
        'ReverseUpEquilibrium': '\u296F',
        'rfisht': '\u297D',
        'rfloor': '\u230B',
        'rfr': '\uD835\uDD2F',
        'Rfr': '\u211C',
        'rHar': '\u2964',
        'rhard': '\u21C1',
        'rharu': '\u21C0',
        'rharul': '\u296C',
        'Rho': '\u03A1',
        'rho': '\u03C1',
        'rhov': '\u03F1',
        'RightAngleBracket': '\u27E9',
        'RightArrowBar': '\u21E5',
        'rightarrow': '\u2192',
        'RightArrow': '\u2192',
        'Rightarrow': '\u21D2',
        'RightArrowLeftArrow': '\u21C4',
        'rightarrowtail': '\u21A3',
        'RightCeiling': '\u2309',
        'RightDoubleBracket': '\u27E7',
        'RightDownTeeVector': '\u295D',
        'RightDownVectorBar': '\u2955',
        'RightDownVector': '\u21C2',
        'RightFloor': '\u230B',
        'rightharpoondown': '\u21C1',
        'rightharpoonup': '\u21C0',
        'rightleftarrows': '\u21C4',
        'rightleftharpoons': '\u21CC',
        'rightrightarrows': '\u21C9',
        'rightsquigarrow': '\u219D',
        'RightTeeArrow': '\u21A6',
        'RightTee': '\u22A2',
        'RightTeeVector': '\u295B',
        'rightthreetimes': '\u22CC',
        'RightTriangleBar': '\u29D0',
        'RightTriangle': '\u22B3',
        'RightTriangleEqual': '\u22B5',
        'RightUpDownVector': '\u294F',
        'RightUpTeeVector': '\u295C',
        'RightUpVectorBar': '\u2954',
        'RightUpVector': '\u21BE',
        'RightVectorBar': '\u2953',
        'RightVector': '\u21C0',
        'ring': '\u02DA',
        'risingdotseq': '\u2253',
        'rlarr': '\u21C4',
        'rlhar': '\u21CC',
        'rlm': '\u200F',
        'rmoustache': '\u23B1',
        'rmoust': '\u23B1',
        'rnmid': '\u2AEE',
        'roang': '\u27ED',
        'roarr': '\u21FE',
        'robrk': '\u27E7',
        'ropar': '\u2986',
        'ropf': '\uD835\uDD63',
        'Ropf': '\u211D',
        'roplus': '\u2A2E',
        'rotimes': '\u2A35',
        'RoundImplies': '\u2970',
        'rpar': ')',
        'rpargt': '\u2994',
        'rppolint': '\u2A12',
        'rrarr': '\u21C9',
        'Rrightarrow': '\u21DB',
        'rsaquo': '\u203A',
        'rscr': '\uD835\uDCC7',
        'Rscr': '\u211B',
        'rsh': '\u21B1',
        'Rsh': '\u21B1',
        'rsqb': ']',
        'rsquo': '\u2019',
        'rsquor': '\u2019',
        'rthree': '\u22CC',
        'rtimes': '\u22CA',
        'rtri': '\u25B9',
        'rtrie': '\u22B5',
        'rtrif': '\u25B8',
        'rtriltri': '\u29CE',
        'RuleDelayed': '\u29F4',
        'ruluhar': '\u2968',
        'rx': '\u211E',
        'Sacute': '\u015A',
        'sacute': '\u015B',
        'sbquo': '\u201A',
        'scap': '\u2AB8',
        'Scaron': '\u0160',
        'scaron': '\u0161',
        'Sc': '\u2ABC',
        'sc': '\u227B',
        'sccue': '\u227D',
        'sce': '\u2AB0',
        'scE': '\u2AB4',
        'Scedil': '\u015E',
        'scedil': '\u015F',
        'Scirc': '\u015C',
        'scirc': '\u015D',
        'scnap': '\u2ABA',
        'scnE': '\u2AB6',
        'scnsim': '\u22E9',
        'scpolint': '\u2A13',
        'scsim': '\u227F',
        'Scy': '\u0421',
        'scy': '\u0441',
        'sdotb': '\u22A1',
        'sdot': '\u22C5',
        'sdote': '\u2A66',
        'searhk': '\u2925',
        'searr': '\u2198',
        'seArr': '\u21D8',
        'searrow': '\u2198',
        'sect': '\xA7',
        'semi': ';',
        'seswar': '\u2929',
        'setminus': '\u2216',
        'setmn': '\u2216',
        'sext': '\u2736',
        'Sfr': '\uD835\uDD16',
        'sfr': '\uD835\uDD30',
        'sfrown': '\u2322',
        'sharp': '\u266F',
        'SHCHcy': '\u0429',
        'shchcy': '\u0449',
        'SHcy': '\u0428',
        'shcy': '\u0448',
        'ShortDownArrow': '\u2193',
        'ShortLeftArrow': '\u2190',
        'shortmid': '\u2223',
        'shortparallel': '\u2225',
        'ShortRightArrow': '\u2192',
        'ShortUpArrow': '\u2191',
        'shy': '\xAD',
        'Sigma': '\u03A3',
        'sigma': '\u03C3',
        'sigmaf': '\u03C2',
        'sigmav': '\u03C2',
        'sim': '\u223C',
        'simdot': '\u2A6A',
        'sime': '\u2243',
        'simeq': '\u2243',
        'simg': '\u2A9E',
        'simgE': '\u2AA0',
        'siml': '\u2A9D',
        'simlE': '\u2A9F',
        'simne': '\u2246',
        'simplus': '\u2A24',
        'simrarr': '\u2972',
        'slarr': '\u2190',
        'SmallCircle': '\u2218',
        'smallsetminus': '\u2216',
        'smashp': '\u2A33',
        'smeparsl': '\u29E4',
        'smid': '\u2223',
        'smile': '\u2323',
        'smt': '\u2AAA',
        'smte': '\u2AAC',
        'smtes': '\u2AAC\uFE00',
        'SOFTcy': '\u042C',
        'softcy': '\u044C',
        'solbar': '\u233F',
        'solb': '\u29C4',
        'sol': '/',
        'Sopf': '\uD835\uDD4A',
        'sopf': '\uD835\uDD64',
        'spades': '\u2660',
        'spadesuit': '\u2660',
        'spar': '\u2225',
        'sqcap': '\u2293',
        'sqcaps': '\u2293\uFE00',
        'sqcup': '\u2294',
        'sqcups': '\u2294\uFE00',
        'Sqrt': '\u221A',
        'sqsub': '\u228F',
        'sqsube': '\u2291',
        'sqsubset': '\u228F',
        'sqsubseteq': '\u2291',
        'sqsup': '\u2290',
        'sqsupe': '\u2292',
        'sqsupset': '\u2290',
        'sqsupseteq': '\u2292',
        'square': '\u25A1',
        'Square': '\u25A1',
        'SquareIntersection': '\u2293',
        'SquareSubset': '\u228F',
        'SquareSubsetEqual': '\u2291',
        'SquareSuperset': '\u2290',
        'SquareSupersetEqual': '\u2292',
        'SquareUnion': '\u2294',
        'squarf': '\u25AA',
        'squ': '\u25A1',
        'squf': '\u25AA',
        'srarr': '\u2192',
        'Sscr': '\uD835\uDCAE',
        'sscr': '\uD835\uDCC8',
        'ssetmn': '\u2216',
        'ssmile': '\u2323',
        'sstarf': '\u22C6',
        'Star': '\u22C6',
        'star': '\u2606',
        'starf': '\u2605',
        'straightepsilon': '\u03F5',
        'straightphi': '\u03D5',
        'strns': '\xAF',
        'sub': '\u2282',
        'Sub': '\u22D0',
        'subdot': '\u2ABD',
        'subE': '\u2AC5',
        'sube': '\u2286',
        'subedot': '\u2AC3',
        'submult': '\u2AC1',
        'subnE': '\u2ACB',
        'subne': '\u228A',
        'subplus': '\u2ABF',
        'subrarr': '\u2979',
        'subset': '\u2282',
        'Subset': '\u22D0',
        'subseteq': '\u2286',
        'subseteqq': '\u2AC5',
        'SubsetEqual': '\u2286',
        'subsetneq': '\u228A',
        'subsetneqq': '\u2ACB',
        'subsim': '\u2AC7',
        'subsub': '\u2AD5',
        'subsup': '\u2AD3',
        'succapprox': '\u2AB8',
        'succ': '\u227B',
        'succcurlyeq': '\u227D',
        'Succeeds': '\u227B',
        'SucceedsEqual': '\u2AB0',
        'SucceedsSlantEqual': '\u227D',
        'SucceedsTilde': '\u227F',
        'succeq': '\u2AB0',
        'succnapprox': '\u2ABA',
        'succneqq': '\u2AB6',
        'succnsim': '\u22E9',
        'succsim': '\u227F',
        'SuchThat': '\u220B',
        'sum': '\u2211',
        'Sum': '\u2211',
        'sung': '\u266A',
        'sup1': '\xB9',
        'sup2': '\xB2',
        'sup3': '\xB3',
        'sup': '\u2283',
        'Sup': '\u22D1',
        'supdot': '\u2ABE',
        'supdsub': '\u2AD8',
        'supE': '\u2AC6',
        'supe': '\u2287',
        'supedot': '\u2AC4',
        'Superset': '\u2283',
        'SupersetEqual': '\u2287',
        'suphsol': '\u27C9',
        'suphsub': '\u2AD7',
        'suplarr': '\u297B',
        'supmult': '\u2AC2',
        'supnE': '\u2ACC',
        'supne': '\u228B',
        'supplus': '\u2AC0',
        'supset': '\u2283',
        'Supset': '\u22D1',
        'supseteq': '\u2287',
        'supseteqq': '\u2AC6',
        'supsetneq': '\u228B',
        'supsetneqq': '\u2ACC',
        'supsim': '\u2AC8',
        'supsub': '\u2AD4',
        'supsup': '\u2AD6',
        'swarhk': '\u2926',
        'swarr': '\u2199',
        'swArr': '\u21D9',
        'swarrow': '\u2199',
        'swnwar': '\u292A',
        'szlig': '\xDF',
        'Tab': '\t',
        'target': '\u2316',
        'Tau': '\u03A4',
        'tau': '\u03C4',
        'tbrk': '\u23B4',
        'Tcaron': '\u0164',
        'tcaron': '\u0165',
        'Tcedil': '\u0162',
        'tcedil': '\u0163',
        'Tcy': '\u0422',
        'tcy': '\u0442',
        'tdot': '\u20DB',
        'telrec': '\u2315',
        'Tfr': '\uD835\uDD17',
        'tfr': '\uD835\uDD31',
        'there4': '\u2234',
        'therefore': '\u2234',
        'Therefore': '\u2234',
        'Theta': '\u0398',
        'theta': '\u03B8',
        'thetasym': '\u03D1',
        'thetav': '\u03D1',
        'thickapprox': '\u2248',
        'thicksim': '\u223C',
        'ThickSpace': '\u205F\u200A',
        'ThinSpace': '\u2009',
        'thinsp': '\u2009',
        'thkap': '\u2248',
        'thksim': '\u223C',
        'THORN': '\xDE',
        'thorn': '\xFE',
        'tilde': '\u02DC',
        'Tilde': '\u223C',
        'TildeEqual': '\u2243',
        'TildeFullEqual': '\u2245',
        'TildeTilde': '\u2248',
        'timesbar': '\u2A31',
        'timesb': '\u22A0',
        'times': '\xD7',
        'timesd': '\u2A30',
        'tint': '\u222D',
        'toea': '\u2928',
        'topbot': '\u2336',
        'topcir': '\u2AF1',
        'top': '\u22A4',
        'Topf': '\uD835\uDD4B',
        'topf': '\uD835\uDD65',
        'topfork': '\u2ADA',
        'tosa': '\u2929',
        'tprime': '\u2034',
        'trade': '\u2122',
        'TRADE': '\u2122',
        'triangle': '\u25B5',
        'triangledown': '\u25BF',
        'triangleleft': '\u25C3',
        'trianglelefteq': '\u22B4',
        'triangleq': '\u225C',
        'triangleright': '\u25B9',
        'trianglerighteq': '\u22B5',
        'tridot': '\u25EC',
        'trie': '\u225C',
        'triminus': '\u2A3A',
        'TripleDot': '\u20DB',
        'triplus': '\u2A39',
        'trisb': '\u29CD',
        'tritime': '\u2A3B',
        'trpezium': '\u23E2',
        'Tscr': '\uD835\uDCAF',
        'tscr': '\uD835\uDCC9',
        'TScy': '\u0426',
        'tscy': '\u0446',
        'TSHcy': '\u040B',
        'tshcy': '\u045B',
        'Tstrok': '\u0166',
        'tstrok': '\u0167',
        'twixt': '\u226C',
        'twoheadleftarrow': '\u219E',
        'twoheadrightarrow': '\u21A0',
        'Uacute': '\xDA',
        'uacute': '\xFA',
        'uarr': '\u2191',
        'Uarr': '\u219F',
        'uArr': '\u21D1',
        'Uarrocir': '\u2949',
        'Ubrcy': '\u040E',
        'ubrcy': '\u045E',
        'Ubreve': '\u016C',
        'ubreve': '\u016D',
        'Ucirc': '\xDB',
        'ucirc': '\xFB',
        'Ucy': '\u0423',
        'ucy': '\u0443',
        'udarr': '\u21C5',
        'Udblac': '\u0170',
        'udblac': '\u0171',
        'udhar': '\u296E',
        'ufisht': '\u297E',
        'Ufr': '\uD835\uDD18',
        'ufr': '\uD835\uDD32',
        'Ugrave': '\xD9',
        'ugrave': '\xF9',
        'uHar': '\u2963',
        'uharl': '\u21BF',
        'uharr': '\u21BE',
        'uhblk': '\u2580',
        'ulcorn': '\u231C',
        'ulcorner': '\u231C',
        'ulcrop': '\u230F',
        'ultri': '\u25F8',
        'Umacr': '\u016A',
        'umacr': '\u016B',
        'uml': '\xA8',
        'UnderBar': '_',
        'UnderBrace': '\u23DF',
        'UnderBracket': '\u23B5',
        'UnderParenthesis': '\u23DD',
        'Union': '\u22C3',
        'UnionPlus': '\u228E',
        'Uogon': '\u0172',
        'uogon': '\u0173',
        'Uopf': '\uD835\uDD4C',
        'uopf': '\uD835\uDD66',
        'UpArrowBar': '\u2912',
        'uparrow': '\u2191',
        'UpArrow': '\u2191',
        'Uparrow': '\u21D1',
        'UpArrowDownArrow': '\u21C5',
        'updownarrow': '\u2195',
        'UpDownArrow': '\u2195',
        'Updownarrow': '\u21D5',
        'UpEquilibrium': '\u296E',
        'upharpoonleft': '\u21BF',
        'upharpoonright': '\u21BE',
        'uplus': '\u228E',
        'UpperLeftArrow': '\u2196',
        'UpperRightArrow': '\u2197',
        'upsi': '\u03C5',
        'Upsi': '\u03D2',
        'upsih': '\u03D2',
        'Upsilon': '\u03A5',
        'upsilon': '\u03C5',
        'UpTeeArrow': '\u21A5',
        'UpTee': '\u22A5',
        'upuparrows': '\u21C8',
        'urcorn': '\u231D',
        'urcorner': '\u231D',
        'urcrop': '\u230E',
        'Uring': '\u016E',
        'uring': '\u016F',
        'urtri': '\u25F9',
        'Uscr': '\uD835\uDCB0',
        'uscr': '\uD835\uDCCA',
        'utdot': '\u22F0',
        'Utilde': '\u0168',
        'utilde': '\u0169',
        'utri': '\u25B5',
        'utrif': '\u25B4',
        'uuarr': '\u21C8',
        'Uuml': '\xDC',
        'uuml': '\xFC',
        'uwangle': '\u29A7',
        'vangrt': '\u299C',
        'varepsilon': '\u03F5',
        'varkappa': '\u03F0',
        'varnothing': '\u2205',
        'varphi': '\u03D5',
        'varpi': '\u03D6',
        'varpropto': '\u221D',
        'varr': '\u2195',
        'vArr': '\u21D5',
        'varrho': '\u03F1',
        'varsigma': '\u03C2',
        'varsubsetneq': '\u228A\uFE00',
        'varsubsetneqq': '\u2ACB\uFE00',
        'varsupsetneq': '\u228B\uFE00',
        'varsupsetneqq': '\u2ACC\uFE00',
        'vartheta': '\u03D1',
        'vartriangleleft': '\u22B2',
        'vartriangleright': '\u22B3',
        'vBar': '\u2AE8',
        'Vbar': '\u2AEB',
        'vBarv': '\u2AE9',
        'Vcy': '\u0412',
        'vcy': '\u0432',
        'vdash': '\u22A2',
        'vDash': '\u22A8',
        'Vdash': '\u22A9',
        'VDash': '\u22AB',
        'Vdashl': '\u2AE6',
        'veebar': '\u22BB',
        'vee': '\u2228',
        'Vee': '\u22C1',
        'veeeq': '\u225A',
        'vellip': '\u22EE',
        'verbar': '|',
        'Verbar': '\u2016',
        'vert': '|',
        'Vert': '\u2016',
        'VerticalBar': '\u2223',
        'VerticalLine': '|',
        'VerticalSeparator': '\u2758',
        'VerticalTilde': '\u2240',
        'VeryThinSpace': '\u200A',
        'Vfr': '\uD835\uDD19',
        'vfr': '\uD835\uDD33',
        'vltri': '\u22B2',
        'vnsub': '\u2282\u20D2',
        'vnsup': '\u2283\u20D2',
        'Vopf': '\uD835\uDD4D',
        'vopf': '\uD835\uDD67',
        'vprop': '\u221D',
        'vrtri': '\u22B3',
        'Vscr': '\uD835\uDCB1',
        'vscr': '\uD835\uDCCB',
        'vsubnE': '\u2ACB\uFE00',
        'vsubne': '\u228A\uFE00',
        'vsupnE': '\u2ACC\uFE00',
        'vsupne': '\u228B\uFE00',
        'Vvdash': '\u22AA',
        'vzigzag': '\u299A',
        'Wcirc': '\u0174',
        'wcirc': '\u0175',
        'wedbar': '\u2A5F',
        'wedge': '\u2227',
        'Wedge': '\u22C0',
        'wedgeq': '\u2259',
        'weierp': '\u2118',
        'Wfr': '\uD835\uDD1A',
        'wfr': '\uD835\uDD34',
        'Wopf': '\uD835\uDD4E',
        'wopf': '\uD835\uDD68',
        'wp': '\u2118',
        'wr': '\u2240',
        'wreath': '\u2240',
        'Wscr': '\uD835\uDCB2',
        'wscr': '\uD835\uDCCC',
        'xcap': '\u22C2',
        'xcirc': '\u25EF',
        'xcup': '\u22C3',
        'xdtri': '\u25BD',
        'Xfr': '\uD835\uDD1B',
        'xfr': '\uD835\uDD35',
        'xharr': '\u27F7',
        'xhArr': '\u27FA',
        'Xi': '\u039E',
        'xi': '\u03BE',
        'xlarr': '\u27F5',
        'xlArr': '\u27F8',
        'xmap': '\u27FC',
        'xnis': '\u22FB',
        'xodot': '\u2A00',
        'Xopf': '\uD835\uDD4F',
        'xopf': '\uD835\uDD69',
        'xoplus': '\u2A01',
        'xotime': '\u2A02',
        'xrarr': '\u27F6',
        'xrArr': '\u27F9',
        'Xscr': '\uD835\uDCB3',
        'xscr': '\uD835\uDCCD',
        'xsqcup': '\u2A06',
        'xuplus': '\u2A04',
        'xutri': '\u25B3',
        'xvee': '\u22C1',
        'xwedge': '\u22C0',
        'Yacute': '\xDD',
        'yacute': '\xFD',
        'YAcy': '\u042F',
        'yacy': '\u044F',
        'Ycirc': '\u0176',
        'ycirc': '\u0177',
        'Ycy': '\u042B',
        'ycy': '\u044B',
        'yen': '\xA5',
        'Yfr': '\uD835\uDD1C',
        'yfr': '\uD835\uDD36',
        'YIcy': '\u0407',
        'yicy': '\u0457',
        'Yopf': '\uD835\uDD50',
        'yopf': '\uD835\uDD6A',
        'Yscr': '\uD835\uDCB4',
        'yscr': '\uD835\uDCCE',
        'YUcy': '\u042E',
        'yucy': '\u044E',
        'yuml': '\xFF',
        'Yuml': '\u0178',
        'Zacute': '\u0179',
        'zacute': '\u017A',
        'Zcaron': '\u017D',
        'zcaron': '\u017E',
        'Zcy': '\u0417',
        'zcy': '\u0437',
        'Zdot': '\u017B',
        'zdot': '\u017C',
        'zeetrf': '\u2128',
        'ZeroWidthSpace': '\u200B',
        'Zeta': '\u0396',
        'zeta': '\u03B6',
        'zfr': '\uD835\uDD37',
        'Zfr': '\u2128',
        'ZHcy': '\u0416',
        'zhcy': '\u0436',
        'zigrarr': '\u21DD',
        'zopf': '\uD835\uDD6B',
        'Zopf': '\u2124',
        'Zscr': '\uD835\uDCB5',
        'zscr': '\uD835\uDCCF',
        'zwj': '\u200D',
        'zwnj': '\u200C'
    }, decodeMapLegacy = {
        'Aacute': '\xC1',
        'aacute': '\xE1',
        'Acirc': '\xC2',
        'acirc': '\xE2',
        'acute': '\xB4',
        'AElig': '\xC6',
        'aelig': '\xE6',
        'Agrave': '\xC0',
        'agrave': '\xE0',
        'amp': '&',
        'AMP': '&',
        'Aring': '\xC5',
        'aring': '\xE5',
        'Atilde': '\xC3',
        'atilde': '\xE3',
        'Auml': '\xC4',
        'auml': '\xE4',
        'brvbar': '\xA6',
        'Ccedil': '\xC7',
        'ccedil': '\xE7',
        'cedil': '\xB8',
        'cent': '\xA2',
        'copy': '\xA9',
        'COPY': '\xA9',
        'curren': '\xA4',
        'deg': '\xB0',
        'divide': '\xF7',
        'Eacute': '\xC9',
        'eacute': '\xE9',
        'Ecirc': '\xCA',
        'ecirc': '\xEA',
        'Egrave': '\xC8',
        'egrave': '\xE8',
        'ETH': '\xD0',
        'eth': '\xF0',
        'Euml': '\xCB',
        'euml': '\xEB',
        'frac12': '\xBD',
        'frac14': '\xBC',
        'frac34': '\xBE',
        'gt': '>',
        'GT': '>',
        'Iacute': '\xCD',
        'iacute': '\xED',
        'Icirc': '\xCE',
        'icirc': '\xEE',
        'iexcl': '\xA1',
        'Igrave': '\xCC',
        'igrave': '\xEC',
        'iquest': '\xBF',
        'Iuml': '\xCF',
        'iuml': '\xEF',
        'laquo': '\xAB',
        'lt': '<',
        'LT': '<',
        'macr': '\xAF',
        'micro': '\xB5',
        'middot': '\xB7',
        'nbsp': '\xA0',
        'not': '\xAC',
        'Ntilde': '\xD1',
        'ntilde': '\xF1',
        'Oacute': '\xD3',
        'oacute': '\xF3',
        'Ocirc': '\xD4',
        'ocirc': '\xF4',
        'Ograve': '\xD2',
        'ograve': '\xF2',
        'ordf': '\xAA',
        'ordm': '\xBA',
        'Oslash': '\xD8',
        'oslash': '\xF8',
        'Otilde': '\xD5',
        'otilde': '\xF5',
        'Ouml': '\xD6',
        'ouml': '\xF6',
        'para': '\xB6',
        'plusmn': '\xB1',
        'pound': '\xA3',
        'quot': '"',
        'QUOT': '"',
        'raquo': '\xBB',
        'reg': '\xAE',
        'REG': '\xAE',
        'sect': '\xA7',
        'shy': '\xAD',
        'sup1': '\xB9',
        'sup2': '\xB2',
        'sup3': '\xB3',
        'szlig': '\xDF',
        'THORN': '\xDE',
        'thorn': '\xFE',
        'times': '\xD7',
        'Uacute': '\xDA',
        'uacute': '\xFA',
        'Ucirc': '\xDB',
        'ucirc': '\xFB',
        'Ugrave': '\xD9',
        'ugrave': '\xF9',
        'uml': '\xA8',
        'Uuml': '\xDC',
        'uuml': '\xFC',
        'Yacute': '\xDD',
        'yacute': '\xFD',
        'yen': '\xA5',
        'yuml': '\xFF'
    }, decodeMapNumeric = {
        '0': '\uFFFD',
        '128': '\u20AC',
        '130': '\u201A',
        '131': '\u0192',
        '132': '\u201E',
        '133': '\u2026',
        '134': '\u2020',
        '135': '\u2021',
        '136': '\u02C6',
        '137': '\u2030',
        '138': '\u0160',
        '139': '\u2039',
        '140': '\u0152',
        '142': '\u017D',
        '145': '\u2018',
        '146': '\u2019',
        '147': '\u201C',
        '148': '\u201D',
        '149': '\u2022',
        '150': '\u2013',
        '151': '\u2014',
        '152': '\u02DC',
        '153': '\u2122',
        '154': '\u0161',
        '155': '\u203A',
        '156': '\u0153',
        '158': '\u017E',
        '159': '\u0178'
    }, invalidReferenceCodePoints = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65000, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111], stringFromCharCode = String.fromCharCode, object = {}, hasOwnProperty = object.hasOwnProperty, has = function (object, propertyName) {
        return hasOwnProperty.call(object, propertyName);
    }, contains = function (array, value) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
            if (array[index] == value) {
                return true;
            }
        }
        return false;
    }, merge = function (options, defaults) {
        if (!options) {
            return defaults;
        }
        var result = {};
        var key;
        for (key in defaults) {
            // A `hasOwnProperty` check is not needed here, since only recognized
            // option names are used anyway. Any others are ignored.
            result[key] = has(options, key) ? options[key] : defaults[key];
        }
        return result;
    }, codePointToSymbol = function (codePoint, strict) {
        var output = '';
        if ((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF) {
            // See issue #4:
            // “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
            // greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
            // REPLACEMENT CHARACTER.”
            if (strict) {
                parseError('character reference outside the permissible Unicode range');
            }
            return '\uFFFD';
        }
        if (has(decodeMapNumeric, codePoint)) {
            if (strict) {
                parseError('disallowed character reference');
            }
            return decodeMapNumeric[codePoint];
        }
        if (strict && contains(invalidReferenceCodePoints, codePoint)) {
            parseError('disallowed character reference');
        }
        if (codePoint > 0xFFFF) {
            codePoint -= 0x10000;
            output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        output += stringFromCharCode(codePoint);
        return output;
    }, hexEscape = function (symbol) {
        return '&#x' + symbol.charCodeAt(0).toString(16).toUpperCase() + ';';
    }, parseError = function (message) {
        throw Error('Parse error: ' + message);
    }, encode = function (string, options) {
        options = merge(options, HTMLParser.encodeOptions);
        var strict = options.strict;
        if (strict && regexInvalidRawCodePoint.test(string)) {
            parseError('forbidden code point');
        }
        var encodeEverything = options.encodeEverything;
        var useNamedReferences = options.useNamedReferences;
        var allowUnsafeSymbols = options.allowUnsafeSymbols;
        if (encodeEverything) {
            // Encode ASCII symbols.
            string = string.replace(regexAsciiWhitelist, function (symbol) {
                // Use named references if requested & possible.
                if (useNamedReferences && has(encodeMap, symbol)) {
                    return '&' + encodeMap[symbol] + ';';
                }
                return hexEscape(symbol);
            });
            // Shorten a few escapes that represent two symbols, of which at least one
            // is within the ASCII range.
            if (useNamedReferences) {
                string = string.replace(/&gt;\u20D2/g, '&nvgt;').replace(/&lt;\u20D2/g, '&nvlt;').replace(/&#x66;&#x6A;/g, '&fjlig;');
            }
            // Encode non-ASCII symbols.
            if (useNamedReferences) {
                // Encode non-ASCII symbols that can be replaced with a named reference.
                string = string.replace(regexEncodeNonAscii, function (string) {
                    // Note: there is no need to check `has(encodeMap, string)` here.
                    return '&' + encodeMap[string] + ';';
                });
            }
        }
        else if (useNamedReferences) {
            // Apply named character references.
            // Encode `<>"'&` using named character references.
            if (!allowUnsafeSymbols) {
                string = string.replace(regexEscape, function (string) {
                    return '&' + encodeMap[string] + ';'; // no need to check `has()` here
                });
            }
            // Shorten escapes that represent two symbols, of which at least one is
            // `<>"'&`.
            string = string.replace(/&gt;\u20D2/g, '&nvgt;').replace(/&lt;\u20D2/g, '&nvlt;');
            // Encode non-ASCII symbols that can be replaced with a named reference.
            string = string.replace(regexEncodeNonAscii, function (string) {
                // Note: there is no need to check `has(encodeMap, string)` here.
                return '&' + encodeMap[string] + ';';
            });
        }
        else if (!allowUnsafeSymbols) {
            // Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
            // using named character references.
            string = string.replace(regexEscape, hexEscape);
        }
        return string.replace(regexAstralSymbols, function ($0) {
            // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            var high = $0.charCodeAt(0);
            var low = $0.charCodeAt(1);
            var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
            return '&#x' + codePoint.toString(16).toUpperCase() + ';';
        }).replace(regexBmpWhitelist, hexEscape);
    }, decode = function (html, options) {
        options = merge(options, HTMLParser.decodeOptions);
        var strict = options.strict;
        if (strict && regexInvalidEntity.test(html)) {
            parseError('malformed character reference');
        }
        return html.replace(regexDecode, function ($0, $1, $2, $3, $4, $5, $6, $7) {
            var codePoint;
            var semicolon;
            var hexDigits;
            var reference;
            var next;
            if ($1) {
                // Decode decimal escapes, e.g. `&#119558;`.
                codePoint = $1;
                semicolon = $2;
                if (strict && !semicolon) {
                    parseError('character reference was not terminated by a semicolon');
                }
                return codePointToSymbol(codePoint, strict);
            }
            if ($3) {
                // Decode hexadecimal escapes, e.g. `&#x1D306;`.
                hexDigits = $3;
                semicolon = $4;
                if (strict && !semicolon) {
                    parseError('character reference was not terminated by a semicolon');
                }
                codePoint = parseInt(hexDigits, 16);
                return codePointToSymbol(codePoint, strict);
            }
            if ($5) {
                // Decode named character references with trailing `;`, e.g. `&copy;`.
                reference = $5;
                if (has(decodeMap, reference)) {
                    return decodeMap[reference];
                }
                else {
                    // Ambiguous ampersand. https://mths.be/notes/ambiguous-ampersands
                    if (strict) {
                        parseError('named character reference was not terminated by a semicolon');
                    }
                    return $0;
                }
            }
            // If we’re still here, it’s a legacy reference for sure. No need for an
            // extra `if` check.
            // Decode named character references without trailing `;`, e.g. `&amp`
            // This is only a parse error if it gets converted to `&`, or if it is
            // followed by `=` in an attribute context.
            reference = $6;
            next = $7;
            if (next && options.isAttributeValue) {
                if (strict && next == '=') {
                    parseError('`&` did not start a character reference');
                }
                return $0;
            }
            else {
                if (strict) {
                    parseError('named character reference was not terminated by a semicolon');
                }
                // Note: there is no need to check `has(decodeMapLegacy, reference)`.
                return decodeMapLegacy[reference] + (next || '');
            }
        });
    }, escape = function (string) {
        return string.replace(regexEscape, function ($0) {
            // Note: there is no need to check `has(escapeMap, $0)` here.
            return escapeMap[$0];
        });
    };
    HTMLParser.encode = encode;
    HTMLParser.decode = decode;
    HTMLParser.escape = escape;
})();
var HTML_Body = (function (_super) {
    __extends(HTML_Body, _super);
    function HTML_Body(viewport) {
        _super.call(this);
        this._needRelayout = true;
        this._needRepaint = true;
        this._layout = null;
        this.viewport = null;
        this.isBlockTextNode = true; //user can write inside this element ( or sub-elements );
        this.canRelayout = true; //we can disable relayouting of the document by setting this flag to false.
        this.changeThrottler = null; // a throttler that is executed each time a dom subtree modification occurs.
        this._tabSize = 20;
        this._tablesLocked = false; // when tables are locked, all tables and tr's won't support the appendChild / removeChild feature.
        this._orphanEnabled = true; // weather when the document contains no child nodes, an orphan paragraph is automatically inserted.
        this._maxRightEdge = 0; // the maximum scrolling edge position after relayout.
        this.fragment = new Fragment(this);
        this.viewport = viewport;
        this.lines = new Character_LinesCollection();
        (function (me) {
            me.changeThrottler = new Throttler(function () {
                me.fire('change');
            }, 10);
        })(this);
        this.nodeName = 'body';
        this.documentElement = this;
        this.parentNode = null;
        this.style.display('block');
        this.style.width('100%');
        this.style.height('100%');
        this.style.fontFamily('Arial');
        this.style.fontSize('12');
        this.style.fontWeight('normal');
        this.style.fontStyle('normal');
        this.style.textDecoration('none');
        this.style.lineHeight('1.2');
        this.style.padding('5');
        this.style.color('black');
        this.style.verticalAlign('normal');
        this.style.textAlign('left');
        this.relayout();
    }
    HTML_Body.prototype.tabSize = function (size) {
        if (size === void 0) { size = null; }
        if (size === null) {
            return this._tabSize;
        }
        else {
            this._tabSize = ~~size < 0 ? 0 : ~~size;
            this.requestRelayout();
            return this._tabSize;
        }
    };
    HTML_Body.prototype.createTextNode = function (textContents) {
        var node = new TNode_Text(textContents);
        node.documentElement = this;
        return node;
    };
    HTML_Body.prototype.createElement = function (elementName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var node;
        elementName = String(elementName || '').toLowerCase();
        switch (elementName) {
            case 'p':
                node = new HTML_Paragraph();
                break;
            case 'br':
                node = new HTML_BreakElement();
                break;
            case 'img':
                node = new HTML_Image(String(args[0] || '') || null);
                break;
            case 'video':
                node = new HTML_Video();
                break;
            case 'source':
                node = new HTML_SourceElement();
                break;
            case 'h1':
                node = new HTML_Heading1();
                break;
            case 'h2':
                node = new HTML_Heading2();
                break;
            case 'h3':
                node = new HTML_Heading3();
                break;
            case 'h4':
                node = new HTML_Heading4();
                break;
            case 'h5':
                node = new HTML_Heading5();
                break;
            case 'h6':
                node = new HTML_Heading6();
                break;
            case 'blockquote':
                node = new HTML_BlockQuote();
                break;
            case 'b':
            case 'strong':
                node = new HTML_Bold();
                break;
            case '!b':
                node = new HTML_NegationNode('b');
                break;
            case 'i':
            case 'em':
                node = new HTML_Italic();
                break;
            case '!i':
                node = new HTML_NegationNode('i');
                break;
            case 'u':
                node = new HTML_Underline();
                break;
            case '!u':
                node = new HTML_NegationNode('u');
                break;
            case 'a':
                node = new HTML_Anchor();
                break;
            case 'ul':
                node = new HTML_BulletedList();
                break;
            case 'ol':
                node = new HTML_OrderedList();
                break;
            case 'li':
                node = new HTML_ListItem();
                break;
            case 'sup':
                node = new HTML_Superscript();
                break;
            case '!sup':
                node = new HTML_NegationNode('sup');
                break;
            case 'sub':
                node = new HTML_Subscript();
                break;
            case '!sub':
                node = new HTML_NegationNode('sub');
                break;
            case 'strike':
                node = new HTML_Strike();
                break;
            case '!strike':
                node = new HTML_NegationNode('strike');
                break;
            case 'table':
                node = new HTML_Table();
                break;
            case 'tr':
                node = new HTML_TableRow();
                break;
            case 'td':
                node = new HTML_TableCell();
                break;
            case 'font':
                node = new HTML_Font();
                break;
            case 'color':
                node = new HTML_Color();
                break;
            case 'size':
                node = new HTML_Size();
                break;
            default:
                node = new TNode_Element();
                node.nodeName = elementName;
                break;
        }
        node.nodeName = elementName;
        node.documentElement = this;
        return node;
    };
    Object.defineProperty(HTML_Body.prototype, "needRelayout", {
        get: function () {
            return this._needRelayout;
        },
        set: function (v) {
            if (!this._needRelayout) {
                this._needRelayout = !!v;
                this.requestRepaint();
            }
        },
        enumerable: true,
        configurable: true
    });
    HTML_Body.prototype.requestRelayout = function () {
        this.needRelayout = true;
        this.fire('relayout');
        this.requestRepaint();
    };
    HTML_Body.prototype.requestRelayoutNowIfNeeded = function () {
        if (this._needRelayout) {
            this.relayout();
        }
    };
    HTML_Body.prototype.requestRepaint = function () {
        if (!this.canRelayout)
            return;
        this._needRepaint = true;
        this.fire('repaint');
        this.viewport.painter.run();
    };
    /* This is used to determine the scrollWidth of the viewport,
       and should be executed by the layout after it computes it's width */
    HTML_Body.prototype.setMaxRightEdgeUsingLayout = function (layout) {
        var mre = layout.offsetLeftOuter + layout.offsetWidthOuter;
        if (mre > this._maxRightEdge) {
            this._maxRightEdge = mre;
        }
    };
    HTML_Body.prototype.repaint = function () {
        if (!this.canRelayout) {
            //console.warn( 'repaint canceled due to canRelayout setting.')
            return;
        }
        // repaints the document
        var now = Date.now(), diff = 0;
        if (this._needRepaint == false && this._needRelayout == false) {
            return;
        }
        if (this._needRelayout) {
            this.relayout();
        }
        //this.viewport.context.clearRect( 0, 0, this.viewport.width() - this.viewport._scrollbarSize, this.viewport.height() - this.viewport._scrollbarSize );
        this.viewport.context.fillStyle = 'white';
        this.viewport.context.fillRect(0, 0, this.viewport.width() - this.viewport._scrollbarSize, this.viewport.height() - this.viewport._scrollbarSize);
        this._layout.paint(this.viewport.context, this.viewport.scrollLeft(), this.viewport.scrollTop(), this.viewport);
        this._needRepaint = false;
        diff = Date.now() - now;
        if (diff > 20)
            Helper.warn('repaint ended in ' + diff + ' ms.');
    };
    // full document relayout. this function computes where to draw
    // objects in the canvas.
    HTML_Body.prototype.relayout = function (force) {
        if (force === void 0) { force = false; }
        if (!this.canRelayout) {
            //console.warn( 'relayout canceled due to canRelayout setting.')
            return;
        }
        this.changeThrottler.run();
        if (!this._needRelayout && force == false) {
            //console.log( 'body.relayout: up to date.' );
            return;
        }
        this.fragment.reset();
        var now = Date.now(), diff = 0;
        if (!this.viewport) {
            return;
        }
        this._maxRightEdge = 0;
        this._layout = this.createLayout();
        this.lines.reset();
        this._layout.offsetTop = -this.style.marginTop();
        this._layout.offsetLeft = -this.style.marginLeft();
        this._layout.offsetWidth = this.viewport.width() - this.viewport._scrollbarSize;
        this._layout.innerWidth = this._layout.offsetWidth - this.style.paddingLeft() - this.style.paddingRight() - (this.style.borderWidth() * 2);
        this._layout.innerTop = this._layout.offsetTop + this.style.paddingTop() + this.style.borderWidth();
        this._layout.innerLeft = this._layout.offsetLeft + this.style.paddingLeft() + this.style.borderWidth();
        this.style._width.value = String(this._layout.offsetWidth);
        this.style._width.isSet = true;
        this._layout.computeWidths();
        this._layout.computeHeights(this.style.marginTop());
        if (this._layout.offsetHeightOuter < this.viewport.height() - this.viewport._scrollbarSize) {
            this._layout.increaseHeightBy(this.viewport.height() - this.viewport._scrollbarSize - this._layout.offsetHeightOuter);
        }
        if (this._layout.offsetLeft + this._layout.offsetWidth < this._maxRightEdge) {
            // force expand layout of body.
            diff = this._maxRightEdge - this._layout.offsetLeft - this._layout.offsetWidth;
            this._layout.offsetWidth += diff;
            this._layout.innerWidth += diff;
            this._layout.offsetWidthOuter += diff;
        }
        this.viewport._clientWidth = this._maxRightEdge;
        this.viewport._clientHeight = this._layout.offsetHeight + this._layout.offsetTop;
        this.viewport.scrollTop(this.viewport.scrollTop());
        this.viewport.scrollLeft(this.viewport.scrollLeft());
        //console.log( this._layout.serialize() );
        this.bakeIntoFragment();
        this._needRelayout = false;
        diff = Date.now() - now;
        if (diff > 20)
            Helper.warn('relayout completed in ' + diff + ' ms.');
        if (force) {
            this._needRepaint = true;
            this.repaint();
        }
    };
    HTML_Body.prototype.removeOrphanNodes = function () {
        for (var i = this.childNodes.length - 1; i >= 0; i--) {
            if (this.childNodes[i].nodeType == 2 /* ELEMENT */) {
                this.childNodes[i].removeOrphanNodes();
            }
            else {
                if (this.childNodes[i].textContents() == '') {
                    this.childNodes[i].remove();
                }
            }
        }
    };
    HTML_Body.prototype.setAttribute = function (attributeName, attributeValue) {
        switch (attributeName) {
            case 'bgcolor':
            case 'color':
            case 'align':
                break;
            default:
                _super.prototype.setAttribute.call(this, attributeName, attributeValue);
        }
    };
    // the body cannot become other thing excepting itself.
    HTML_Body.prototype.becomeElement = function (elementName) {
        return this;
    };
    HTML_Body.prototype.createCollectionFromHTMLText = function (s) {
        return Helper.createCollectionFromHTMLText(s, this);
    };
    /* The body cannot have direct float=left or float=right children. */
    HTML_Body.prototype.evaluateLayout = function (left, center, right, argIndex) {
        if (argIndex === void 0) { argIndex = 0; }
        var i = 0, len = this.childNodes.length, oldArgIndex = argIndex, currentArgIndex = argIndex, j = 0, n = 0, layoutType = '', lblock, lchar, children;
        for (i = 0, children = this.childNodes, len = children.length; i < len; i++) {
            if (children[i].nodeType == 1 /* TEXT */) {
                currentArgIndex = 1;
                layoutType = 'Layout_BlockChar';
            }
            else {
                switch (true) {
                    case children[i].style.display() == 'block':
                        layoutType = 'Layout_Block';
                        currentArgIndex = 1;
                        break;
                    default:
                        layoutType = 'Layout_BlockChar';
                        currentArgIndex = 1;
                        break;
                }
            }
            switch (layoutType) {
                case 'Layout_BlockChar':
                    if (currentArgIndex != oldArgIndex) {
                        lchar = new Layout_BlockChar();
                        center.push(lchar);
                    }
                    else {
                        lchar = ((function () {
                            if (center[center.length - 1] && center[center.length - 1].hasChars) {
                                return center[center.length - 1];
                            }
                            else {
                                return null;
                            }
                        })() || (function () {
                            lchar = new Layout_BlockChar();
                            center.push(lchar);
                            return lchar;
                        })());
                    }
                    if (children[i].nodeType == 1 /* TEXT */) {
                        lchar.addTextNode(children[i]);
                    }
                    else {
                        currentArgIndex = children[i].evaluateLayout(left, center, right, currentArgIndex);
                    }
                    break;
                case 'Layout_Block':
                    lblock = new Layout_Block(children[i]);
                    switch (currentArgIndex) {
                        case 0:
                            left.push(lblock);
                            break;
                        case 1:
                            center.push(lblock);
                            break;
                        case 2:
                            right.push(lblock);
                            break;
                    }
                    break;
            }
            oldArgIndex = currentArgIndex;
        }
        return currentArgIndex;
    };
    HTML_Body.prototype.innerHTML = function (setter) {
        if (setter === void 0) { setter = null; }
        if (setter === null) {
            return _super.prototype.innerHTML.call(this, null);
        }
        else {
            var p, i = 0, len = 0;
            this.removeAllChildNodes();
            var collection = this.createCollectionFromHTMLText(setter);
            collection.normalizeForHost('body', []);
            if (collection.normalizedInlineStartNodes) {
                p = this.createElement('p');
                p.appendCollection(collection.splice(0, collection.normalizedInlineStartNodes));
                collection.addFirst(p);
            }
            if (collection.normalizedInlineEndNodes) {
                p = this.createElement('p');
                p.appendCollection(collection.splice(collection.length - 1 - collection.normalizedInlineEndNodes, collection.normalizedInlineEndNodes));
                collection.add(p);
            }
            this.appendCollection(collection);
        }
    };
    HTML_Body.prototype.lockTables = function () {
        this._tablesLocked = true;
    };
    HTML_Body.prototype.unlockTables = function () {
        this._tablesLocked = false;
    };
    HTML_Body.prototype.lockOrphan = function () {
        this._orphanEnabled = false;
    };
    HTML_Body.prototype.unlockOrphan = function () {
        this._orphanEnabled = true;
    };
    HTML_Body.prototype.findNodeAtIndex = function (index) {
        if (index < 0 || index >= this.fragment.length()) {
            return this;
        }
        else
            return _super.prototype.findNodeAtIndex.call(this, index);
    };
    HTML_Body.prototype.removeChild = function (node) {
        var result = _super.prototype.removeChild.call(this, node);
        if (this.childNodes.length == 0 && this._orphanEnabled) {
            (function (me) {
                setTimeout(function () {
                    var p = me.createElement('p');
                    me.appendChild(p);
                    me.relayout(true);
                    me.viewport.selection.anchorTo(new TRange_Target(p, p.FRAGMENT_START));
                }, 1);
            })(this);
        }
        return result;
    };
    HTML_Body.prototype.undoManager = function () {
        return this.viewport.undo;
    };
    HTML_Body.AUTOCLOSE_TAGS = [
        'br',
        'input',
        'hr',
        'img',
        'source'
    ];
    HTML_Body.FORCE_TEXT_NODES = [
        'pre',
        'script',
        'textarea',
        'style',
        'code'
    ];
    HTML_Body.IGNORE_ELEMENTS = [
        'head',
        'style',
        'script',
        'iframe'
    ];
    HTML_Body.TRAVERSE_ELEMENTS = [
        'html',
        'body',
        'span'
    ];
    /* These are the types of node that can be safely imported / exported by the editor.
       
       Note that document.createElement may create internally a more richer list of nodes,
       but they are not supported by the browser.
    */
    HTML_Body.IMPLEMENTED_NODES = [
        'p',
        'blockquote',
        'br',
        'img',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'b',
        'strong',
        'i',
        'em',
        'u',
        'a',
        'ul',
        'ol',
        'li',
        'sup',
        'sub',
        'strike',
        'table',
        'tr',
        'td',
        'span',
        'video',
        'source'
    ];
    return HTML_Body;
})(TNode_Element);
var HTML_Paragraph = (function (_super) {
    __extends(HTML_Paragraph, _super);
    function HTML_Paragraph() {
        _super.call(this);
        this.isBlockTextNode = true;
        this.nodeName = 'p';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'p', [
            'fontSize',
            'fontWeight',
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'fontFamily',
            'fontWeight'
        ]);
    }
    return HTML_Paragraph;
})(TNode_Element);
var HTML_BlockQuote = (function (_super) {
    __extends(HTML_BlockQuote, _super);
    function HTML_BlockQuote() {
        _super.call(this);
        this.isBlockTextNode = true;
        this._cite = null;
        this.nodeName = 'blockquote';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'blockquote', [
            'fontSize',
            'fontWeight',
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'fontFamily',
            'fontWeight'
        ]);
    }
    HTML_BlockQuote.prototype.paint = function (ctx, layout, scrollLeft, scrollTop) {
        _super.prototype.paint.call(this, ctx, layout, scrollLeft, scrollTop);
        ctx.fillStyle = '#666';
        ctx.fillRect(layout.offsetLeftOuter - scrollLeft + (this.tabStop() * this.documentElement.tabSize()), layout.offsetTop - scrollTop, 5, layout.offsetHeight);
    };
    HTML_BlockQuote.prototype.cite = function (href) {
        if (href === void 0) { href = null; }
        if (href === null) {
            return this._cite;
        }
        else {
            this._cite = href;
            return this._cite;
        }
    };
    HTML_BlockQuote.prototype.setAttribute = function (attributeName, attributeValue) {
        switch (attributeName) {
            case 'cite':
                this.cite(attributeValue);
                break;
            default:
                _super.prototype.setAttribute.call(this, attributeName, attributeValue);
                break;
        }
    };
    HTML_BlockQuote.prototype.xmlAttributes = function () {
        var out = [_super.prototype.xmlAttributes.call(this)];
        if (this._cite !== null) {
            out.push("cite=\"" + this._cite + "\"");
        }
        return out.join(' ');
    };
    return HTML_BlockQuote;
})(TNode_Element);
var HTML_BreakElement = (function (_super) {
    __extends(HTML_BreakElement, _super);
    function HTML_BreakElement() {
        _super.call(this);
        this.isSelfClosingTag = true;
        this.nodeName = 'br';
        this.style.display('inline');
        this.childNodes.push(new TNode_TextBreak(this));
    }
    HTML_BreakElement.prototype.removeOrphanNodes = function () {
        // void, intentionally.
    };
    // text written inside of a break element will be appended after the break element.
    HTML_BreakElement.prototype.appendTextAfter = function (s) {
        console.warn("Append text after break: " + JSON.stringify(s));
        this.nextAvailableTextNode().textContents(s, true);
    };
    // disable append child and remove child.
    HTML_BreakElement.prototype.appendChild = function (node, index) {
        if (index === void 0) { index = null; }
        return null;
    };
    HTML_BreakElement.prototype.removeChild = function (node) {
        return null;
    };
    HTML_BreakElement.prototype.nextAvailableTextNode = function () {
        var cursor = this.nextSibling(), node = null, deep = 0;
        while (cursor) {
            if (cursor.nodeType == 1 /* TEXT */) {
                return cursor;
            }
            else {
                // if the next element is a break element, we create a text node and append it after this break element
                if (cursor.nodeName == 'br') {
                    node = this.documentElement.createTextNode('');
                    this.parentNode.appendChild(node, this.siblingIndex + 1);
                    break;
                }
                else {
                    if (cursor.childNodes && cursor.childNodes.length) {
                        deep++;
                        cursor = cursor.childNodes[0];
                    }
                    else {
                        if (deep > 0) {
                            cursor = cursor.parentNode.nextSibling();
                            deep--;
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
        if (!node) {
            node = this.documentElement.createTextNode('');
            this.parentNode.appendChild(node, this.siblingIndex + 1);
        }
        return node;
    };
    HTML_BreakElement.prototype.xmlBeginning = function () {
        return '<br/>';
    };
    HTML_BreakElement.prototype.xmlEnding = function () {
        return '';
    };
    HTML_BreakElement.prototype.outerHTML = function (s) {
        if (s === void 0) { s = null; }
        if (s !== null) {
            return _super.prototype.outerHTML.call(this);
        }
        else
            return '<br/>';
    };
    HTML_BreakElement.prototype.innerHTML = function (s) {
        if (s === void 0) { s = null; }
        if (s === null) {
            return '';
        }
        else {
            return '';
        }
    };
    HTML_BreakElement.prototype.createSurgery = function (atFragmentIndex, createNodeAfter, nodeNameAfter) {
        if (createNodeAfter === void 0) { createNodeAfter = true; }
        if (nodeNameAfter === void 0) { nodeNameAfter = null; }
        throw "ERR_SURGERY_DENIED";
    };
    HTML_BreakElement.prototype.allTextNodes = function () {
        return [];
    };
    return HTML_BreakElement;
})(TNode_Element);
var HTML_Image = (function (_super) {
    __extends(HTML_Image, _super);
    function HTML_Image(src) {
        if (src === void 0) { src = null; }
        _super.call(this);
        this.node = document.createElement('img');
        this.loaded = false; // is the image loaded successfully
        this.error = false; // an error occured after loading
        this.isSelectable = true; // when the user clicks on this element, it is selectable
        this.isResizable = true;
        this.isSelfClosingTag = true;
        this._alt = null;
        this.nodeName = 'img';
        this.style.display('block');
        this.style.margin('5');
        (function (me) {
            me.node.addEventListener('load', function () {
                me.loaded = true;
                me.error = false;
                me.style.aspectRatio(String((me.node.width / me.node.height)));
                if (!me.style._width.isSet && !me.style._height.isSet) {
                    me.style.width(String(me.node.width));
                }
                me.requestRelayout();
            }, false);
            me.node.addEventListener('erorr', function () {
                me.loaded = true;
                me.error = true;
                me.style.aspectRatio('1');
                me.requestRelayout();
            }, false);
        })(this);
        if (src !== null) {
            this.src(src);
        }
    }
    HTML_Image.prototype.src = function (source) {
        if (source === void 0) { source = null; }
        if (source === null) {
            // getter
            return this.node.getAttribute('src') || '';
        }
        else {
            if (source !== this.node.getAttribute('src')) {
                // setter
                this.loaded = false;
                this.error = false;
                this.node.setAttribute('src', String(source || ''));
                this.requestRelayout();
            }
        }
    };
    HTML_Image.prototype.alt = function (str) {
        if (str === void 0) { str = null; }
        if (str === null) {
            return this._alt;
        }
        else {
            this._alt = String(str) || null;
            if (this.documentElement) {
                this.documentElement.changeThrottler.run();
            }
        }
    };
    HTML_Image.prototype.setAttribute = function (attributeName, attributeValue) {
        switch (attributeName) {
            case 'src':
                this.src(attributeValue || null);
                break;
            case 'align':
                this.style.float(attributeValue || '');
                break;
            case 'alt':
                this.alt(attributeValue || '');
                break;
            default:
                _super.prototype.setAttribute.call(this, attributeName, attributeValue);
                break;
        }
    };
    HTML_Image.prototype.width = function (size) {
        if (size === void 0) { size = null; }
        if (size === null) {
            // getter
            return String(this.style.width() || '');
        }
        else {
            if (size == '') {
                this.style._width.isSet = false;
            }
            else {
                this.style.width(size);
            }
            return size;
        }
    };
    HTML_Image.prototype.height = function (size) {
        if (size === void 0) { size = null; }
        if (size === null) {
            //getter
            return String(this.style.height() || '');
        }
        else {
            if (size == '') {
                this.style._height.isSet = false;
            }
            else {
                this.style.height(size);
            }
            return size;
        }
    };
    HTML_Image.prototype.align = function (align) {
        if (align === void 0) { align = null; }
        if (align === null) {
            // getter
            return this.style.float();
        }
        else {
            if (align == '') {
                this.style._float.isSet = false;
            }
            else {
                this.style.float(align);
            }
            return align;
        }
    };
    HTML_Image.prototype.paint = function (ctx, layout, scrollLeft, scrollTop) {
        _super.prototype.paint.call(this, ctx, layout, scrollLeft, scrollTop);
        if (this.loaded) {
            if (this.error) {
            }
            else {
                if (this.isPaintedSelected)
                    ctx.globalAlpha = .5;
                ctx.drawImage(this.node, 0, 0, this.node.width, this.node.height, layout.innerLeft - scrollLeft, layout.innerTop - scrollTop, layout.innerWidth, layout.innerHeight);
                if (this.isPaintedSelected) {
                    ctx.globalAlpha = 1;
                    this.paintResizeHandles(ctx, layout, scrollLeft, scrollTop);
                }
            }
        }
    };
    HTML_Image.prototype.xmlBeginning = function () {
        var attrs = [], tmp;
        if (tmp = this.src()) {
            attrs.push('src="' + tmp + '"');
        }
        attrs.push('width="' + ~~this.style.width() + '"');
        attrs.push('height="' + ~~this.style.height() + '"');
        if (this.style._float.isSet) {
            attrs.push('align="' + this.style.float() + '"');
        }
        if (this._alt) {
            attrs.push('alt="' + this._alt + '"');
        }
        return '<img ' + attrs.join(' ') + ' />';
    };
    HTML_Image.prototype.removeOrphanNodes = function () {
        // void, intentionally.
    };
    // images don't have tabstops
    HTML_Image.prototype.tabStop = function (value) {
        if (value === void 0) { value = null; }
        return 0;
    };
    HTML_Image.prototype.onmousemove = function (point, button, driver) {
        if (this.isSelected() && button == 0) {
            var resizer = this.getResizerTypeAtMousePoint(point), cursor = '';
            if ([0 /* NW */, 1 /* NE */, 2 /* SW */, 3 /* SE */].indexOf(resizer) >= 0) {
                switch (resizer) {
                    case 0 /* NW */:
                        cursor = 'nw-resize';
                        break;
                    case 1 /* NE */:
                        cursor = 'ne-resize';
                        break;
                    case 3 /* SE */:
                        cursor = 'se-resize';
                        break;
                    case 2 /* SW */:
                        cursor = 'sw-resize';
                        break;
                }
                this.documentElement.viewport.canvas.style.cursor = cursor;
                return true;
            }
            else {
                this.documentElement.viewport.canvas.style.cursor = 'default';
                return false;
            }
        }
        else {
            return false;
        }
    };
    HTML_Image.prototype.onmousedown = function (point, button, driver) {
        if (this.isSelected() && button == 1) {
            var resizer = this.getResizerTypeAtMousePoint(point);
            if ([0 /* NW */, 1 /* NE */, 2 /* SW */, 3 /* SE */].indexOf(resizer) >= 0) {
                driver.lockTargetForResizing(this, resizer, point);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    return HTML_Image;
})(TNode_Element);
var HTML_Video = (function (_super) {
    __extends(HTML_Video, _super);
    function HTML_Video() {
        _super.call(this);
        this.isSelectable = true; // when the user clicks on this element, it is selectable
        this.isResizable = true;
        this._src = null;
        this._controls = null;
        this._poster = document.createElement('img');
        this._posterLoaded = false;
        this.nodeName = 'video';
        this.style.display('block');
        (function (me) {
            me._poster.addEventListener('load', function (evt) {
                me._posterLoaded = true;
                me.requestRepaint();
            }, true);
            me._poster.addEventListener('error', function (evt) {
                me._posterLoaded = false;
                me.requestRepaint();
            }, true);
            me.style.on('changed', function (stylePropertyName) {
                if (stylePropertyName == 'width' || stylePropertyName == 'height') {
                    var hasWidth = me.style._width.isSet, hasHeight = me.style._height.isSet;
                    if (hasWidth && hasHeight) {
                        // do not enforce an aspect ratio
                        me.style._aspectRatio.isSet = false;
                    }
                    else {
                        // enforce an aspect ratio
                        me.style._aspectRatio.value = '1.77';
                        me.style._aspectRatio.isSet = true;
                    }
                }
            });
        })(this);
        this.style.width('10');
    }
    HTML_Video.prototype.width = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this.style.width();
        }
        else {
            if (value < 10) {
                value = 10;
            }
            this.style.width(String(value));
            return value;
        }
    };
    HTML_Video.prototype.height = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this.style.height();
        }
        else {
            if (value < 10) {
                value = 10;
            }
            this.style.height(String(value));
            return value;
        }
    };
    HTML_Video.prototype.src = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this._src;
        }
        else {
            this._src = (String(value || '')) || null;
            return this._src;
        }
    };
    HTML_Video.prototype.controls = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this._controls;
        }
        else {
            this._controls = !!value;
            this.requestRepaint();
            return this._controls;
        }
    };
    HTML_Video.prototype.poster = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this._poster.getAttribute('src');
        }
        else {
            this._poster.setAttribute('src', value || '');
            this.requestRepaint();
            return value;
        }
    };
    HTML_Video.prototype.setAttribute = function (attributeName, attributeValue) {
        switch (attributeName) {
            case 'width':
                this.style.width(attributeValue || '');
                break;
            case 'height':
                this.style.height(attributeValue || '');
                break;
            case 'src':
                this.src(attributeValue || '');
                break;
            case 'controls':
                this.controls(true);
                break;
            case 'poster':
                this.poster(attributeValue || '');
                break;
            default:
                _super.prototype.setAttribute.call(this, attributeName, attributeValue);
                break;
        }
    };
    HTML_Video.prototype.xmlAttributes = function () {
        var out = [];
        if (this.style._width.isSet) {
            out.push('width="' + this.style.width() + '"');
        }
        if (this.style._height.isSet) {
            out.push('height="' + this.style.height() + '"');
        }
        if (this._controls) {
            out.push('controls');
        }
        if (this.poster()) {
            out.push('poster="' + HTMLParser.escape(this.poster()) + '"');
        }
        if (this.src()) {
            out.push('src="' + HTMLParser.escape(this.src()) + '"');
        }
        return out.join(' ');
    };
    HTML_Video.prototype.removeOrphanNodes = function () {
        // void, intentionally.
    };
    // images don't have tabstops
    HTML_Video.prototype.tabStop = function (value) {
        if (value === void 0) { value = null; }
        return 0;
    };
    HTML_Video.prototype.onmousemove = function (point, button, driver) {
        if (this.isSelected() && button == 0) {
            var resizer = this.getResizerTypeAtMousePoint(point), cursor = '';
            if ([0 /* NW */, 1 /* NE */, 2 /* SW */, 3 /* SE */].indexOf(resizer) >= 0) {
                switch (resizer) {
                    case 0 /* NW */:
                        cursor = 'nw-resize';
                        break;
                    case 1 /* NE */:
                        cursor = 'ne-resize';
                        break;
                    case 3 /* SE */:
                        cursor = 'se-resize';
                        break;
                    case 2 /* SW */:
                        cursor = 'sw-resize';
                        break;
                }
                this.documentElement.viewport.canvas.style.cursor = cursor;
                return true;
            }
            else {
                this.documentElement.viewport.canvas.style.cursor = 'default';
                return false;
            }
        }
        else {
            return false;
        }
    };
    HTML_Video.prototype.onmousedown = function (point, button, driver) {
        if (this.isSelected() && button == 1) {
            var resizer = this.getResizerTypeAtMousePoint(point);
            if ([0 /* NW */, 1 /* NE */, 2 /* SW */, 3 /* SE */].indexOf(resizer) >= 0) {
                driver.lockTargetForResizing(this, resizer, point);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    HTML_Video.prototype.paint = function (ctx, layout, scrollLeft, scrollTop) {
        this.layout = layout;
        var borderColor, borderWidth, backgroundColor, selection = this.documentElement.viewport.selection, range = selection.getRange(), isSelected = false, left = 0, top = 0, width = 0, height = 0;
        if ((range.equalsNode(this) && this.isSelectable) || (range.contains(this.FRAGMENT_START + 1) && range.contains(this.FRAGMENT_END - 1) && !this.isSelectionPaintingDisabled)) {
            isSelected = true;
            ctx.fillStyle = DocSelection.$Colors.focus;
            ctx.fillRect(~~(layout.innerLeft - scrollLeft), ~~(layout.innerTop - scrollTop), ~~layout.innerWidth, ~~layout.innerHeight);
        }
        this.isPaintedSelected = isSelected;
        if ((borderWidth = this.style.borderWidth())) {
            borderColor = this.style.borderColor();
            if (borderColor) {
                ctx.strokeStyle = borderColor;
                ctx.lineWidth = borderWidth;
                ctx.beginPath();
                ctx.strokeRect(layout.offsetLeft + (borderWidth / 2) - scrollLeft, layout.offsetTop + (borderWidth / 2) - scrollTop, layout.offsetWidth - borderWidth, layout.offsetHeight - borderWidth);
                ctx.closePath();
            }
        }
        left = layout.offsetLeft + borderWidth - scrollLeft;
        top = layout.offsetTop + borderWidth - scrollTop;
        width = layout.offsetWidth - 2 * borderWidth;
        height = layout.offsetHeight - 2 * borderWidth;
        if (!isSelected) {
            ctx.fillStyle = 'black';
            ctx.fillRect(left, top, width, height);
        }
        if (this.isPaintedSelected) {
            this.paintResizeHandles(ctx, layout, scrollLeft, scrollTop);
        }
        if (this.isPaintedSelected) {
            ctx.globalAlpha = .5;
        }
        /* Draw the video poster */
        if (this._posterLoaded) {
            ctx.drawImage(this._poster, left, top, width, height);
        }
        /* Draw the video element */
        if (this.controls() && width > 70 && height > 40) {
            // paint the controlbar
            ctx.fillStyle = 'rgba(128,128,128,.5)';
            ctx.fillRect(left + 5, top + height - 30, width - 10, 20);
            ctx.fillStyle = '#000';
            ctx.fillRect(left + 30, top + height - 22, width - 70, 5);
            try {
                ctx.drawImage(HTML_Video.buttonPlay, left + 7, top + height - 28);
            }
            catch (e) {
            }
            try {
                ctx.drawImage(HTML_Video.buttonFullScreen, left + width - 30, top + height - 28);
            }
            catch (e) {
            }
        }
        if (this.isPaintedSelected) {
            ctx.globalAlpha = 1;
        }
    };
    HTML_Video.prototype.createLayout = function (useParentLayout) {
        if (useParentLayout === void 0) { useParentLayout = null; }
        if (this.documentElement) {
            return new Layout_Block(this);
        }
        else {
            return null;
        }
    };
    HTML_Video.prototype.bakeIntoFragment = function () {
        if (this.documentElement) {
            this.FRAGMENT_START = this.documentElement.fragment.length();
            this.documentElement.fragment.add(0 /* NODE_START */);
            this.FRAGMENT_END = this.documentElement.fragment.length();
            this.documentElement.fragment.add(1 /* NODE_END */);
        }
    };
    HTML_Video.prototype.findNodeAtIndex = function (index) {
        return index >= this.FRAGMENT_START && index <= this.FRAGMENT_END ? this : null;
    };
    HTML_Video.prototype.ownerBlockElement = function () {
        return this;
    };
    HTML_Video.buttonFullScreen = document.createElement('img');
    HTML_Video.buttonPlay = document.createElement('img');
    return HTML_Video;
})(TNode_Element);
HTML_Video.buttonPlay.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wISDxsq1r2NXwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAACxElEQVQ4y32TX2tcVRTFf/vemz+TSUKmyR2CSMRiUPTRz+GTn6JKQfChFhWrIKJJpFUcpM3g1LYpjakvRbDQ6oNNkQnkQSYEkvoQmoHMncEJk87cTO85Z/swc6dKqwsOHA57r704ay9pNpuvTk1NnWk2m5+uXF/ZKV0uUW/UEVF838c5h+/7CAKAoqCKeB6eeMjBwcFr09PTlSAIFPip0Wh8cvXa1Y3LV0ocHh4iIvi+j6oiIqjq4O6JILVa7ZV8Pr+dJAmqyvDwMMCdWq32fun7Unnl+jVarUeIgO/7WGtRVUCQPsF8GIY7SZLgeR6qirWW0dFRgDvVavXD4nfF32+s3qDd7gDg+x7OuR5JFEUnwzD88/j4GM/zABARnHM458hkMgDre3t7H11cvnj3h7U1kuTxoI4oqr/gnNN2u61xHD912u22Hh0daR/3dh/svnHm7HvMvzzPiy+dRKKo/vyJE7mHcRwPFDwLqaLJyUmA9e3t7c8vfP3VLYmi+nO53FS10+n8L0GKJEkwxhCGYbeytfVmAFhrLcYYfN//z0ZVxRjD2NgYuVxurVKpvPPW6berAWCdc1hrn2pKfTfGMDQ0xMzMzF6r1Tq9uLR461JxmW63y4DAOdf71X8gJQ3D8LGIfHbzx5tfnL9wvvNwf7+3k6r8S0FK4JzDGEMulyObzd4vb5RPLX259Ed5owyA5wnWOlQhUFXrnBtINcaQyWSYnZ1t7Fer7577+NyV1bVVFRFEPFR7arWfjEBErKrS7XYZGRlhbm5O4zi+VPi2cPabQuGvVquFCIiAdQa0FygRwfOEwFrjQMnn84yPj2/9fPv2qYXFhd92H+yg2pPr1GGdpnb0p4OKEGSzWTsxMfGoUtn6YGFxqXD3118SEe3nIpWrz7TVOUdwb/2+3dzcfH25WNwx1pAakYalX/5k93nypKr8De/mtU7SkArBAAAAAElFTkSuQmCC';
HTML_Video.buttonFullScreen.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wISDxwSsf6jBgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABqklEQVQ4y6WUO4oyQRSFv3q07YNWEUNTcRGuwKWIe2gDAwPBdU3eGIipYCbSPrCr7KoJ/LuVHx0H5sKloKh7OOfcQwljjA+CgL+W9t5jrcVay/F4RAiBEIIsy+h2u2it8d6/HPbe45wjCAK0c45qtUqSJMRxTBRF7Pd7RqMRk8mkBBZCvASSUiKlRBeX1lqu1ytpmjIcDhmPx0gpcc4hpXzJqmCktUYLIfDeo5TifD4zHA6ZTqcopbjdbiXYO2l5nj88EkKQpimDwYA4jlFKYYxBKVU+/MkjAJFlmZdSstlsqNVq9Ho9rtcrUsqPmyoYNZtNhDHGG2PKQWvtr0AA8jzHe0+73b6b7ZzDGFNu5yc5RTnnqFQqZFkGgCx05nlenp/aWksYhqxWK47H4x2oQP9tG2NoNBp8fX2xXC4fyS60Fno/eRJFEUmSMJ/P7yb/C6oupL3LyvOa6/U66/Wa2WzG+Xym0+lgrX0wes7DOyCtNdvtlsViweVyIYqiMvHe+3uOdrsdzxH4HwRAKcXhcOB0OhGGIXmeI6Wk1WrR7/cRl8vF12q1P38j35ZbSO0VOkT6AAAAAElFTkSuQmCC';
var HTML_SourceElement = (function (_super) {
    __extends(HTML_SourceElement, _super);
    function HTML_SourceElement() {
        _super.call(this);
        this._src = null;
        this._type = null;
        this.nodeName = 'source';
        this.style.display('none');
    }
    HTML_SourceElement.prototype.xmlAttributes = function () {
        var opts = [];
        if (this._src) {
            opts.push('src="' + HTMLParser.escape(this._src) + '"');
        }
        if (this._type) {
            opts.push('type="' + HTMLParser.escape(this._type) + '"');
        }
        return opts.join(' ');
    };
    HTML_SourceElement.prototype.src = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this._src;
        }
        else {
            this._src = String(value || '') || null;
        }
    };
    HTML_SourceElement.prototype.type = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this._type;
        }
        else {
            this._type = String(value || '') || null;
        }
    };
    HTML_SourceElement.prototype.setAttribute = function (attributeName, attributeValue) {
        switch (attributeName) {
            case 'src':
                this.src(attributeValue);
                break;
            case 'type':
                this.type(attributeValue);
                break;
            default:
                _super.prototype.setAttribute.call(this, attributeName, attributeValue);
                break;
        }
    };
    HTML_SourceElement.prototype.xmlEnding = function () {
        return '';
    };
    HTML_SourceElement.prototype.xmlBeginning = function () {
        return '<source ' + this.xmlAttributes() + ' />';
    };
    return HTML_SourceElement;
})(TNode_Element);
var HTML_Heading1 = (function (_super) {
    __extends(HTML_Heading1, _super);
    function HTML_Heading1() {
        _super.call(this);
        this.isBlockTextNode = true;
        this.nodeName = 'h1';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'h1', [
            'fontSize',
            'fontWeight',
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'fontFamily',
            'fontWeight'
        ]);
        /*
        this.style.fontSize('18');
        this.style.fontWeight('bold');
        */
    }
    return HTML_Heading1;
})(TNode_Element);
var HTML_Heading2 = (function (_super) {
    __extends(HTML_Heading2, _super);
    function HTML_Heading2() {
        _super.call(this);
        this.isBlockTextNode = true;
        this.nodeName = 'h2';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'h2', [
            'fontSize',
            'fontWeight',
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'fontFamily',
            'fontWeight'
        ]);
    }
    return HTML_Heading2;
})(TNode_Element);
var HTML_Heading3 = (function (_super) {
    __extends(HTML_Heading3, _super);
    function HTML_Heading3() {
        _super.call(this);
        this.isBlockTextNode = true;
        this.nodeName = 'h3';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'h3', [
            'fontSize',
            'fontWeight',
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'fontFamily',
            'fontWeight'
        ]);
    }
    return HTML_Heading3;
})(TNode_Element);
var HTML_Heading4 = (function (_super) {
    __extends(HTML_Heading4, _super);
    function HTML_Heading4() {
        _super.call(this);
        this.isBlockTextNode = true;
        this.nodeName = 'h4';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'h4', [
            'fontSize',
            'fontWeight',
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'fontFamily',
            'fontWeight'
        ]);
    }
    return HTML_Heading4;
})(TNode_Element);
var HTML_Heading5 = (function (_super) {
    __extends(HTML_Heading5, _super);
    function HTML_Heading5() {
        _super.call(this);
        this.isBlockTextNode = true;
        this.nodeName = 'h5';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'h5', [
            'fontSize',
            'fontWeight',
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'fontFamily',
            'fontWeight'
        ]);
    }
    return HTML_Heading5;
})(TNode_Element);
var HTML_Heading6 = (function (_super) {
    __extends(HTML_Heading6, _super);
    function HTML_Heading6() {
        _super.call(this);
        this.isBlockTextNode = true;
        this.nodeName = 'h6';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'h6', [
            'fontSize',
            'fontWeight',
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'fontFamily',
            'fontWeight'
        ]);
    }
    return HTML_Heading6;
})(TNode_Element);
var HTML_Bold = (function (_super) {
    __extends(HTML_Bold, _super);
    function HTML_Bold() {
        _super.call(this);
        this.isDefragmentable = true;
        this.nodeName = 'b';
        this.style.display('inline');
        this.style.fontWeight('bold');
    }
    return HTML_Bold;
})(TNode_Element);
var HTML_Italic = (function (_super) {
    __extends(HTML_Italic, _super);
    function HTML_Italic() {
        _super.call(this);
        this.isDefragmentable = true;
        this.nodeName = 'i';
        this.style.display('inline');
        this.style.fontStyle('italic');
    }
    return HTML_Italic;
})(TNode_Element);
var HTML_Underline = (function (_super) {
    __extends(HTML_Underline, _super);
    function HTML_Underline() {
        _super.call(this);
        this.isDefragmentable = true;
        this.nodeName = 'u';
        this.style.display('inline');
        this.style.textDecoration('underline');
    }
    return HTML_Underline;
})(TNode_Element);
var HTML_Anchor = (function (_super) {
    __extends(HTML_Anchor, _super);
    function HTML_Anchor() {
        _super.call(this);
        this._href = null;
        this._target = null;
        this._name = null;
        this.nodeName = 'a';
        this.style.display('inline');
        this.style.color('blue');
        this.style.textDecoration('underline');
    }
    HTML_Anchor.prototype.href = function (s) {
        if (s === void 0) { s = null; }
        if (s === null) {
            return this._href;
        }
        else {
            this._href = String(s || '') || null;
            return this._href;
        }
    };
    HTML_Anchor.prototype.target = function (s) {
        if (s === void 0) { s = null; }
        if (s === null) {
            return this._target;
        }
        else {
            this._target = String(s || '') || null;
            return this._target;
        }
    };
    HTML_Anchor.prototype.name = function (s) {
        if (s === void 0) { s = null; }
        if (s === null) {
            return this._name;
        }
        else {
            this._name = String(s || '') || null;
            return this._name;
        }
    };
    HTML_Anchor.prototype.setAttribute = function (attributeName, attributeValue) {
        switch (attributeName) {
            case 'href':
                this.href(attributeValue);
                break;
            case 'target':
                this.target(attributeValue);
                break;
            case 'name':
                this.name(attributeValue);
                break;
            default:
                _super.prototype.setAttribute.call(this, attributeName, attributeValue);
                break;
        }
    };
    HTML_Anchor.prototype.xmlBeginning = function () {
        var attrs = [];
        if (this._href) {
            attrs.push('href="' + this._href + '"');
        }
        if (this._target) {
            attrs.push('target="' + this._target + '"');
        }
        if (this._name) {
            attrs.push('name="' + this._name + '"');
        }
        return '<a' + (attrs.length ? ' ' + attrs.join(' ') : '') + '>';
    };
    HTML_Anchor.prototype.xmlEnding = function () {
        return '</a>';
    };
    HTML_Anchor.prototype.clone = function () {
        var cloned = this.documentElement.createElement('a');
        cloned.name(this.name());
        cloned.href(this.href());
        cloned.target(this.target());
        return cloned;
    };
    return HTML_Anchor;
})(TNode_Element);
var HTML_BulletedList = (function (_super) {
    __extends(HTML_BulletedList, _super);
    function HTML_BulletedList() {
        _super.call(this);
        this.isSelectionPaintingDisabled = true;
        this.nodeName = 'ul';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'ul', [
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight'
        ]);
    }
    HTML_BulletedList.prototype.breakBeforeOption = function (option) {
        var i = 0, len = option.siblingIndex - 1, ol;
        if (option.siblingIndex == 0 || this.childNodes.length == 1) {
            return 0 /* NONE_BEFORE */;
        }
        ol = this.clone();
        this.parentNode.appendChild(ol, this.siblingIndex);
        for (i = 0; i <= len; i++) {
            ol.appendChild(this.childNodes[0]);
        }
        return 3 /* BEFORE */;
    };
    HTML_BulletedList.prototype.breakAfterOption = function (option) {
        var i = 0, len = this.childNodes.length, ol;
        if (option.siblingIndex == this.childNodes.length - 1 || this.childNodes.length == 1) {
            return 1 /* NONE_AFTER */;
        }
        ol = this.clone();
        this.parentNode.appendChild(ol, this.siblingIndex + 1);
        for (i = option.siblingIndex + 1; i < len; i++) {
            ol.appendChild(this.childNodes[option.siblingIndex + 1], 0);
        }
        return 2 /* AFTER */;
    };
    // lists don't have tabstops, only list items.
    HTML_BulletedList.prototype.tabStop = function (value) {
        if (value === void 0) { value = null; }
        return 0;
    };
    return HTML_BulletedList;
})(TNode_Element);
var HTML_OrderedList = (function (_super) {
    __extends(HTML_OrderedList, _super);
    function HTML_OrderedList() {
        _super.call(this);
        this.isSelectionPaintingDisabled = true;
        this.nodeName = 'ol';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'ol', [
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight'
        ]);
    }
    HTML_OrderedList.prototype.breakBeforeOption = function (option) {
        var i = 0, len = option.siblingIndex - 1, ol;
        if (option.siblingIndex == 0 || this.childNodes.length == 1) {
            return 0 /* NONE_BEFORE */;
        }
        ol = this.clone();
        this.parentNode.appendChild(ol, this.siblingIndex);
        for (i = 0; i <= len; i++) {
            ol.appendChild(this.childNodes[0]);
        }
        return 3 /* BEFORE */;
    };
    HTML_OrderedList.prototype.breakAfterOption = function (option) {
        var i = 0, len = this.childNodes.length, ol;
        if (option.siblingIndex == this.childNodes.length - 1 || this.childNodes.length == 1) {
            return 1 /* NONE_AFTER */;
        }
        ol = this.clone();
        this.parentNode.appendChild(ol, this.siblingIndex + 1);
        for (i = option.siblingIndex + 1; i < len; i++) {
            ol.appendChild(this.childNodes[option.siblingIndex + 1], 0);
        }
        return 2 /* AFTER */;
    };
    // lists don't have tabstops, only list items.
    HTML_OrderedList.prototype.tabStop = function (value) {
        if (value === void 0) { value = null; }
        return 0;
    };
    return HTML_OrderedList;
})(TNode_Element);
var HTML_ListItem = (function (_super) {
    __extends(HTML_ListItem, _super);
    function HTML_ListItem() {
        _super.call(this);
        this.isSelectable = true;
        this.isBlockTextNode = true;
        this.nodeName = 'li';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'li', [
            'fontSize',
            'fontWeight',
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'fontFamily',
            'fontWeight'
        ]);
    }
    HTML_ListItem.prototype.paint = function (ctx, layout, scrollLeft, scrollTop) {
        _super.prototype.paint.call(this, ctx, layout, scrollLeft, scrollTop);
        /* If the parent is a OL, paint my number,
           otherwise paint a disk.
         */
        ctx.fillStyle = this.style.color();
        ctx.textAlign = 'right';
        ctx.font = this.style.fontStyleText();
        ctx.textBaseline = 'alphabetic';
        if (this.parentNode.nodeName == 'ol') {
            ctx.fillText(String(this.siblingIndex + 1) + '.', layout.innerLeft - 5 - scrollLeft, layout.innerTop + this.style.fontSize() * this.style.lineHeight() - scrollTop);
        }
        else {
            ctx.fillText('\u25cf', layout.innerLeft - 5 - scrollLeft, layout.innerTop + this.style.fontSize() * this.style.lineHeight() - scrollTop);
        }
    };
    HTML_ListItem.prototype.becomeElement = function (elementName) {
        var breakResult, element, parent = this.parentNode;
        if (elementName == 'li') {
            return this;
        }
        // we must break the parent UL or OL when a LI becomes another element...
        // aditionally, if the elementName is a UL, or a LI, we must treat this case also ...
        if (!this.parentNode) {
            throw "ERR_NO_PARENT_NODE";
        }
        if (elementName == this.parentNode.nodeName) {
            return this;
        }
        if (elementName == 'ul' || elementName == 'ol') {
            switch (this.siblingIndex) {
                case 0:
                    // append before current list
                    element = this.documentElement.createElement(elementName);
                    this.parentNode.parentNode.appendChild(element, this.parentNode.siblingIndex);
                    element.appendChild(this);
                    break;
                case this.parentNode.childNodes.length - 1:
                    // append after
                    element = this.documentElement.createElement(elementName);
                    this.parentNode.parentNode.appendChild(element, this.parentNode.siblingIndex + 1);
                    element.appendChild(this);
                    element.parentNode.mergeAdjacentLists();
                    break;
                default:
                    // break current list and append after the first list
                    breakResult = this.parentNode.breakAfterOption(this);
                    element = this.documentElement.createElement(elementName);
                    this.parentNode.parentNode.appendChild(element, this.parentNode.siblingIndex + 1);
                    element.appendChild(this);
                    break;
            }
            if (parent.childNodes.length == 0) {
                parent.remove();
            }
            this.parentNode.parentNode.mergeAdjacentLists();
            return this;
        }
        else {
            breakResult = this.parentNode.breakBeforeOption(this);
            element = this.documentElement.createElement(elementName);
            this.parentNode.parentNode.appendChild(element, this.parentNode.siblingIndex);
            element.mergeWith(this);
            element.parentNode.mergeAdjacentLists();
            return element;
        }
    };
    HTML_ListItem.prototype.createSurgery = function (atFragmentIndex, createNodeAfter, nodeNameAfter, hint) {
        if (createNodeAfter === void 0) { createNodeAfter = true; }
        if (nodeNameAfter === void 0) { nodeNameAfter = null; }
        if (hint === void 0) { hint = 0 /* NONE */; }
        var p = null;
        if (createNodeAfter && (nodeNameAfter === null || nodeNameAfter == 'li')) {
            if (this.textContents() == '' || this.textContents() == ' ') {
                p = this.becomeElement('p');
                this.documentElement.relayout(true);
                return p.FRAGMENT_START;
            }
            else {
                return _super.prototype.createSurgery.call(this, atFragmentIndex, createNodeAfter, nodeNameAfter, hint);
            }
        }
        else {
            return _super.prototype.createSurgery.call(this, atFragmentIndex, createNodeAfter, nodeNameAfter, hint);
        }
    };
    HTML_ListItem.prototype.tabStop = function (value) {
        if (value === void 0) { value = null; }
        var parentNode = null, siblingIndex = 0;
        if (value == -1) {
            if (this.parentNode.parentNode.is() == 'li') {
                parentNode = this.parentNode;
                siblingIndex = parentNode.siblingIndex;
                parentNode.breakBeforeOption(this);
                parentNode.parentNode.createSurgery(parentNode.FRAGMENT_END);
                parentNode.parentNode.parentNode.appendChild(this, parentNode.parentNode.siblingIndex + 1);
                if (parentNode.childNodes.length == 0) {
                    parentNode.remove();
                }
            }
            return 0;
        }
        else {
            return _super.prototype.tabStop.call(this, value);
        }
    };
    return HTML_ListItem;
})(TNode_Element);
var HTML_Superscript = (function (_super) {
    __extends(HTML_Superscript, _super);
    function HTML_Superscript() {
        _super.call(this);
        this.isDefragmentable = true;
        this.nodeName = 'sup';
        this.style.display('inline');
        this.style.verticalAlign('super');
        this.style.fontSize('80%');
    }
    return HTML_Superscript;
})(TNode_Element);
var HTML_Subscript = (function (_super) {
    __extends(HTML_Subscript, _super);
    function HTML_Subscript() {
        _super.call(this);
        this.isDefragmentable = true;
        this.nodeName = 'sub';
        this.style.display('inline');
        this.style.verticalAlign('sub');
        this.style.fontSize('80%');
    }
    return HTML_Subscript;
})(TNode_Element);
var HTML_Table = (function (_super) {
    __extends(HTML_Table, _super);
    function HTML_Table() {
        _super.call(this);
        this.needCompile = true;
        this.matrix = null;
        this.isMergeable = false;
        this._cellPadding = 0;
        this._cellSpacing = 0;
        this._border = 0;
        this._xEdgesApplied = false;
        this.nodeName = 'table';
        this.style.display('block');
        this.style.marginTop('10');
        (function (me) {
            me.style.on('changed', function (propertyName) {
                if (propertyName == 'borderColor' && me.documentElement) {
                    me.documentElement.changeThrottler.run();
                }
            });
        })(this);
    }
    HTML_Table.prototype.requestCompile = function () {
        this.needCompile = true;
        // request a relayout of the document
        if (this.documentElement) {
            this.documentElement.requestRelayout();
        }
    };
    // ignore other elements other than table row
    HTML_Table.prototype.appendChild = function (node, index) {
        if (index === void 0) { index = null; }
        var returnValue;
        if (node.nodeType == 2 /* ELEMENT */ && node.nodeName == 'tr') {
            returnValue = (_super.prototype.appendChild.call(this, node, index));
            this.requestCompile();
            return returnValue;
        }
        else {
            //silently discard errors
            return node;
        }
    };
    HTML_Table.prototype.removeChild = function (node) {
        var returnValue = _super.prototype.removeChild.call(this, node);
        this.requestCompile();
        return returnValue;
    };
    HTML_Table.prototype.setAttribute = function (attributeName, attributeValue) {
        switch (attributeName) {
            case 'border':
                this.border(~~attributeValue);
                break;
            case 'bordercolor':
                this.style.borderColor(String(attributeValue || ''));
                break;
            case 'cellpadding':
                this.cellPadding(~~attributeValue);
                break;
            case 'cellspacing':
                this.cellSpacing(~~attributeValue);
                break;
            default:
                _super.prototype.setAttribute.call(this, attributeName, attributeValue);
                break;
        }
    };
    // builds the table matrix, needed for initializing the
    // layout.
    HTML_Table.prototype.compile = function (force) {
        if (force === void 0) { force = false; }
        if (!this.needCompile && !force) {
            return;
        }
        // Helper.log( 'compiling table...' );
        var cellIndex = 0, i = 0, j = 0, k = 0, n = 0, o = 0, p = 0, cell, cells = [], matrix = new HTML_Table_Matrix(cells);
        this.matrix = matrix;
        for (i = 0, n = this.childNodes.length; i < n; i++) {
            for (j = 0, o = this.childNodes[i].childNodes.length; j < o; j++) {
                (cell = this.childNodes[i].childNodes[j]).tableIndex = cellIndex++;
                cell.edgeLeft = null;
                cell.edgeRight = null;
                cell.edgeTop = null;
                cell.edgeBottom = null;
                cell.rowIndex = j;
                cells.push(cell);
                matrix.writeAt(i, cell.tableIndex, cell.colSpan(), cell.rowSpan());
            }
        }
        matrix.compute();
        this.needCompile = false;
    };
    HTML_Table.prototype.createLayout = function (useParentLayout) {
        if (useParentLayout === void 0) { useParentLayout = null; }
        if (this.documentElement) {
            /* Creates a table layout, based on compiled information.
               This is a special layout, and is needed to display the cells of the table.
             */
            this.compile();
            var returnValue = new Layout_Block_Table(this, this.matrix);
            return returnValue;
        }
        else {
            return null;
        }
    };
    HTML_Table.prototype.cellPadding = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._cellPadding;
        }
        else {
            v = ~~v;
            if (v < 0)
                v = 0;
            if (this._cellPadding != v) {
                this._cellPadding = v;
                if (this.documentElement) {
                    this.documentElement.requestRelayout();
                }
            }
        }
    };
    HTML_Table.prototype.cellSpacing = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._cellSpacing;
        }
        else {
            v = ~~v;
            if (v < 0)
                v = 0;
            if (this._cellSpacing != v) {
                this._cellSpacing = v;
                if (this.documentElement) {
                    this.documentElement.requestRelayout();
                }
            }
        }
    };
    HTML_Table.prototype.border = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._border;
        }
        else {
            v = ~~v;
            if (v < 0)
                v = 0;
            if (this._border !== v) {
                this._border = v;
                if (this.documentElement) {
                    this.documentElement.requestRelayout();
                }
            }
        }
    };
    HTML_Table.prototype.xmlBeginning = function () {
        var attrs = [];
        if (this._border)
            attrs.push('border="' + this._border + '"');
        attrs.push('cellspacing="' + ~~(this._cellSpacing) + '"');
        attrs.push('cellpadding="' + this._cellPadding + '"');
        if (this.style._borderColor.isSet)
            attrs.push('bordercolor="' + this.style.borderColor() + '"');
        if (this.style._width.isSet) {
            attrs.push('width="' + this.style.width() + '"');
        }
        return '<table' + (attrs.length ? ' ' + attrs.join(' ') : '') + '>';
    };
    HTML_Table.prototype.xmlEnding = function () {
        return '</table>';
    };
    HTML_Table.prototype.removeFromDOMAtUserCommand = function () {
        return false; // tables cannot be removed even if they are selected when the user press a removal key
    };
    // tables don't have tabstops
    HTML_Table.prototype.tabStop = function (value) {
        if (value === void 0) { value = null; }
        return 0;
    };
    /* Creates a virtual node with the cells that are included between the colStart and colEnd or are intersected with
       the colStart and ColEnd
     */
    HTML_Table.prototype.createVirtualColumnNode = function (colStart, colEnd, includeExact) {
        if (includeExact === void 0) { includeExact = false; }
        var i = 0, j = 0, len = 0, lem = 0, cell, out = new HTML_MultiRange_TableColumn(this.documentElement, this);
        for (var i = 0, len = this.childNodes.length; i < len; i++) {
            for (j = 0, lem = this.childNodes[i].childNodes.length; j < lem; j++) {
                cell = this.childNodes[i].childNodes[j];
                if (includeExact) {
                    if (colStart == cell.edgeLeft.index && colEnd == cell.edgeRight.index) {
                        out.appendChild(cell);
                        break;
                    }
                }
                else {
                    if (colStart <= cell.edgeLeft.index && colEnd >= cell.edgeRight.index) {
                        out.appendChild(cell);
                        break;
                    }
                }
            }
        }
        return out;
    };
    HTML_Table.prototype.createVirtualRowNode = function (rowStart, rowEnd, includeExact) {
        if (includeExact === void 0) { includeExact = false; }
        var i = 0, j = 0, len = 0, lem = 0, cell, out = new HTML_MultiRange_TableRow(this.documentElement, this);
        for (var i = 0, len = this.childNodes.length; i < len; i++) {
            for (j = 0, lem = this.childNodes[i].childNodes.length; j < lem; j++) {
                cell = this.childNodes[i].childNodes[j];
                if (includeExact) {
                    if (rowStart == cell.edgeTop.index && rowEnd == cell.edgeBottom.index) {
                        out.appendChild(cell);
                    }
                }
                else {
                    if (rowStart <= cell.edgeTop.index && rowEnd >= cell.edgeBottom.index) {
                        out.appendChild(cell);
                    }
                }
            }
        }
        return out;
    };
    HTML_Table.prototype.applyXEdges = function () {
        // save XEdges values
        var applyValues = [], i = 0, len = this.matrix.xEdges.edges.length, row = 0, col = 0, sum = 0;
        for (i = 0; i < len; i++) {
            applyValues.push(this.matrix.xEdges.edges[i].scaledValue);
            sum += applyValues[i];
        }
        for (row = 0; row < this.childNodes.length; row++) {
            for (col = 0; col < this.childNodes[row].childNodes.length; col++) {
                this.childNodes[row].childNodes[col].applyXEdges(applyValues);
            }
        }
        this.style.width(String(~~(sum + ((this._border + this._cellPadding + this._cellSpacing) * applyValues.length * 2))));
        this._xEdgesApplied = true;
    };
    HTML_Table.prototype.outerHTML = function (v) {
        if (v === void 0) { v = null; }
        if (!this._xEdgesApplied) {
            this.applyXEdges();
        }
        return _super.prototype.outerHTML.call(this, v);
    };
    HTML_Table.prototype.getCellsForRow = function (rowMinIndex, rowMaxIndex) {
        var i = 0, j = 0, len = 0, lem = 0, cell, out = [];
        for (var i = 0, len = this.childNodes.length; i < len; i++) {
            for (j = 0, lem = this.childNodes[i].childNodes.length; j < lem; j++) {
                cell = this.childNodes[i].childNodes[j];
                if (rowMinIndex <= cell.edgeTop.index && rowMaxIndex >= cell.edgeBottom.index) {
                    out.push(cell);
                }
            }
        }
        return out;
    };
    HTML_Table.prototype.getCellsForColumn = function (colMinIndex, colMaxIndex) {
        var i = 0, j = 0, len = 0, lem = 0, cell, out = [];
        for (var i = 0, len = this.childNodes.length; i < len; i++) {
            for (j = 0, lem = this.childNodes[i].childNodes.length; j < lem; j++) {
                cell = this.childNodes[i].childNodes[j];
                if (colMinIndex <= cell.edgeLeft.index && colMaxIndex >= cell.edgeRight.index) {
                    out.push(cell);
                    break;
                }
            }
        }
        return out;
    };
    return HTML_Table;
})(TNode_Element);
var HTML_Table_Matrix = (function () {
    function HTML_Table_Matrix(cellsArray) {
        this.cellsArray = cellsArray;
        this.cols = 0;
        this.rows = 0;
        this.data = [];
        this.xEdges = new HTML_Table_EdgesCollection('x');
        this.yEdges = new HTML_Table_EdgesCollection('y');
    }
    HTML_Table_Matrix.prototype.setCols = function (numCols) {
        if (numCols > this.cols) {
            for (var y = 0, len = this.data.length; y < len; y++) {
                for (var x = this.cols; x < numCols; x++) {
                    this.data[y].push(null);
                }
            }
            this.cols = ~~numCols;
        }
    };
    HTML_Table_Matrix.prototype.setRows = function (numRows) {
        var row;
        if (numRows > this.rows) {
            for (var y = this.rows; y < numRows; y++) {
                row = [];
                for (var x = 0; x < this.cols; x++) {
                    row.push(null);
                }
                this.data.push(row);
            }
            this.rows = ~~numRows;
        }
    };
    HTML_Table_Matrix.prototype.writeAt = function (row, value, colSpan, rowSpan) {
        this.setRows(row + rowSpan);
        var index = 0;
        this.setCols(1);
        while (this.data[row][index] !== null) {
            index++;
            this.setCols(index + 1);
        }
        this.setCols(index + colSpan);
        for (var x = 0; x < colSpan; x++) {
            for (var y = 0; y < rowSpan; y++) {
                this.data[y + row][x + index] = value;
            }
        }
    };
    HTML_Table_Matrix.prototype.compute = function () {
        this.xEdges.setNumber(this.cols);
        this.yEdges.setNumber(this.rows);
        var row = 0, col = 0, lastCell = null, i = 0, len = 0;
        for (row = 0; row < this.rows; row++) {
            for (col = 0; col < this.cols; col++) {
                if (lastCell != this.data[row][col]) {
                    lastCell = this.data[row][col];
                    if (lastCell !== null) {
                        if (!this.cellsArray[lastCell].edgeLeft) {
                            this.cellsArray[lastCell].edgeLeft = this.cellsArray[lastCell].edgeLeft || this.xEdges.edges[col];
                            this.cellsArray[lastCell].edgeTop = this.cellsArray[lastCell].edgeTop || this.yEdges.edges[row];
                            for (i = col; i < this.cols; i++) {
                                if (this.data[row][i] == lastCell) {
                                    this.cellsArray[lastCell].edgeRight = this.xEdges.edges[i];
                                }
                                else
                                    break;
                            }
                            for (i = row; i < this.rows; i++) {
                                if (this.data[i][col] == lastCell) {
                                    this.cellsArray[lastCell].edgeBottom = this.yEdges.edges[i];
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    HTML_Table_Matrix.prototype.toString = function () {
        var lines = [], line = '';
        for (var y = 0; y < this.rows; y++) {
            line = '|';
            for (var x = 0; x < this.cols; x++) {
                line += String(this.data[y][x] == 0 ? this.data[y][x] : (this.data[y][x] || ' '));
            }
            lines.push(line + '|');
        }
        return lines.join('\n ');
    };
    return HTML_Table_Matrix;
})();
var HTML_Table_EdgesCollection = (function () {
    function HTML_Table_EdgesCollection(name) {
        this.name = name;
        this.edges = [];
        this.purposedSizes = {};
    }
    HTML_Table_EdgesCollection.prototype.setNumber = function (numEdges) {
        this.edges = [];
        for (var i = 0; i < numEdges; i++) {
            this.edges.push(new HTML_Table_Edge(i, this));
        }
    };
    HTML_Table_EdgesCollection.prototype.setSize = function (edgeStartIndex, edgeEndIndex, size) {
        var key;
        if (edgeStartIndex == edgeEndIndex) {
            key = ':' + String(edgeStartIndex);
        }
        else {
            key = '/' + String(edgeStartIndex + ' ' + edgeEndIndex);
        }
        if (this.purposedSizes[key]) {
            this.purposedSizes[key] = Math.max(this.purposedSizes[key], size);
        }
        else {
            this.purposedSizes[key] = size;
        }
    };
    HTML_Table_EdgesCollection.prototype.resetSizes = function () {
        this.purposedSizes = {};
    };
    HTML_Table_EdgesCollection.prototype.applyRangeSize = function (start, end, size) {
        var unset = [], i = 0, len = start - end, sum = 0, pieceWidth = 0;
        for (i = start; i <= end; i++) {
            if (this.edges[i].isSet) {
                sum += this.edges[i].value;
            }
            else {
                unset.push(this.edges[i]);
            }
        }
        if (len = unset.length) {
            if (size < sum)
                return;
            pieceWidth = (size - sum) / len;
            for (i = 0; i < len; i++) {
                this.edges[i].value = pieceWidth;
                this.edges[i].isSet = true;
                sum += pieceWidth;
            }
            return;
        }
        if (size - sum > 0) {
            pieceWidth = (size - sum) / (end - start + 1);
            for (i = start; i <= end; i++) {
                this.edges[i].value += pieceWidth;
            }
        }
    };
    HTML_Table_EdgesCollection.prototype.applySizes = function () {
        var i = 0, len = 0, k = '', iStart = 0, iStop = 0, rng;
        for (i = 0, len = this.edges.length; i < len; i++) {
            this.edges[i].value = 0;
            this.edges[i].isSet = false;
        }
        for (k in this.purposedSizes) {
            if (k[0] == ':') {
                iStart = ~~k.substr(1);
                this.edges[iStart].value = this.purposedSizes[k];
                this.edges[iStart].isSet = true;
            }
        }
        for (k in this.purposedSizes) {
            if (k[0] == '/') {
                rng = k.substr(1).split(' ');
                this.applyRangeSize(~~rng[0], ~~rng[1], this.purposedSizes[k]);
            }
        }
    };
    HTML_Table_EdgesCollection.prototype.toString = function () {
        var out = [];
        for (var i = 0, len = this.edges.length; i < len; i++) {
            out.push(String(this.edges[i].offsetIndexStart + '->' + this.edges[i].offsetIndexEnd));
        }
        return '|' + out.join('|,|') + '|';
    };
    HTML_Table_EdgesCollection.prototype.resizeToFit = function (totalWidth, border, padding, spacing, shiftLeft) {
        if (shiftLeft === void 0) { shiftLeft = 0; }
        var sumTotal = 0, unset = [], i = 0, len = 0, pieceWidth = 0, maxPieceWidth = 0, minPieceWidth = -1, scale = 0.00, lastEdgeIndex = this.edges.length - 1;
        if (totalWidth != null) {
            for (i = 0, len = this.edges.length; i < len; i++) {
                this.edges[i].scaledValue = this.edges[i].value;
                if (this.edges[i].value > 0) {
                    sumTotal += this.edges[i].value;
                    if (maxPieceWidth < this.edges[i].value) {
                        maxPieceWidth = this.edges[i].value;
                        if (minPieceWidth == -1) {
                            minPieceWidth = maxPieceWidth;
                        }
                    }
                    if (minPieceWidth < this.edges[i].value) {
                        minPieceWidth = this.edges[i].value;
                    }
                }
                else {
                    unset.push(this.edges[i]);
                }
            }
            if (unset.length) {
                if (sumTotal < totalWidth) {
                    pieceWidth = (totalWidth - sumTotal) / unset.length;
                    for (i = 0, len = unset.length; i < len; i++) {
                        unset[i].scaledValue = pieceWidth;
                        sumTotal += pieceWidth;
                    }
                }
                else {
                    for (i = 0, len = unset.length; i < len; i++) {
                        unset[i].scaledValue = minPieceWidth;
                        sumTotal += minPieceWidth;
                    }
                }
            }
            scale = totalWidth / sumTotal;
            for (i = 0, len = this.edges.length; i < len; i++) {
                this.edges[i].scaledValue *= scale;
            }
        }
        else {
            for (i = 0, len = this.edges.length; i < len; i++) {
                this.edges[i].scaledValue = this.edges[i].value;
            }
        }
        if (this.edges.length) {
            this.edges[0].indexStart = shiftLeft + spacing;
            this.edges[0].offsetIndexStart = shiftLeft + spacing;
            for (i = 0, len = this.edges.length; i < (len - 1); i++) {
                this.edges[i].indexEnd = this.edges[i].indexStart + this.edges[i].scaledValue + (2 * (padding + border)) + (spacing * .5);
                this.edges[i].offsetIndexEnd = this.edges[i].offsetIndexStart + 2 * border + 2 * padding + this.edges[i].scaledValue;
                this.edges[i + 1].indexStart = this.edges[i].indexEnd;
                this.edges[i + 1].offsetIndexStart = this.edges[i].indexEnd + spacing * .5;
            }
            this.edges[lastEdgeIndex].indexEnd = this.edges[lastEdgeIndex].indexStart + this.edges[lastEdgeIndex].scaledValue + padding * 2 + 2 * border + spacing * 1.5;
            this.edges[lastEdgeIndex].offsetIndexEnd = this.edges[lastEdgeIndex].indexEnd - spacing;
        }
    };
    return HTML_Table_EdgesCollection;
})();
var HTML_Table_Edge = (function () {
    function HTML_Table_Edge(index, group) {
        this.index = index;
        this.group = group;
        this.value = 0;
        this.scaledValue = 0;
        this.isSet = false;
        this.indexStart = 0;
        this.indexEnd = 0;
        this.offsetIndexStart = 0;
        this.offsetIndexEnd = 0;
    }
    HTML_Table_Edge.prototype.setValue = function (amount) {
        amount = ~~amount;
        if (this.value < amount) {
            this.value = amount;
            this.scaledValue = amount;
        }
    };
    return HTML_Table_Edge;
})();
var HTML_TableRow = (function (_super) {
    __extends(HTML_TableRow, _super);
    function HTML_TableRow() {
        _super.call(this);
        this.isMergeable = false;
        this.nodeName = 'tr';
        this.style.display('block');
    }
    // ignore other elements other than table cell
    HTML_TableRow.prototype.appendChild = function (node, index) {
        if (index === void 0) { index = null; }
        var returnValue;
        if (node.nodeType == 2 /* ELEMENT */ && node.nodeName == 'td') {
            returnValue = (_super.prototype.appendChild.call(this, node, index));
            if (this.ownerTable) {
                this.ownerTable.requestCompile();
            }
            return returnValue;
        }
        else {
            //silently discard errors
            return node;
        }
    };
    HTML_TableRow.prototype.removeChild = function (node) {
        var returnValue = _super.prototype.removeChild.call(this, node);
        this.ownerTable.requestCompile();
        return returnValue;
    };
    HTML_TableRow.prototype.removeFromDOMAtUserCommand = function () {
        return false; // table rows cannot be removed even if they are selected when the user press a removal key
    };
    // table rows don't have tabstops
    HTML_TableRow.prototype.tabStop = function (value) {
        if (value === void 0) { value = null; }
        return 0;
    };
    Object.defineProperty(HTML_TableRow.prototype, "ownerTable", {
        get: function () {
            return this.parentNode && this.parentNode.is() == 'table' ? this.parentNode : null;
        },
        set: function (table) {
            console.error("The ownerTable property of a TR is read-only");
        },
        enumerable: true,
        configurable: true
    });
    return HTML_TableRow;
})(TNode_Element);
var HTML_TableCell = (function (_super) {
    __extends(HTML_TableCell, _super);
    function HTML_TableCell() {
        _super.call(this, true);
        this.tableIndex = 0; // the index of the cell in it's table
        this.rowIndex = 0; // the index of the cell in it's row
        this._colSpan = 1;
        this._rowSpan = 1;
        this.edgeLeft = null;
        this.edgeRight = null;
        this.edgeTop = null;
        this.edgeBottom = null;
        this.isSelectable = true;
        this.isResizable = true;
        this.isBlockTextNode = true;
        this.insertLinePolicy = 0 /* BR */;
        this.alternateInsertLinePolicy = 0 /* BR */;
        this.isMergeable = false;
        this.style = new TStyle_TableCell(this);
        this.nodeName = 'td';
        this.style.display('block');
        TStyle_Browser_Calculator.applyDefaultStyles(this, 'td', [
            'fontSize',
            'fontWeight',
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'fontFamily',
            'fontWeight'
        ]);
        this.style.padding('5');
    }
    HTML_TableCell.prototype.colSpan = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this._colSpan;
        }
        else {
            value = ~~value;
            if (value < 1) {
                value = 1;
            }
            this._colSpan = value;
            if (this.ownerTable)
                this.ownerTable.requestCompile();
            return this._colSpan;
        }
    };
    HTML_TableCell.prototype.rowSpan = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this._rowSpan;
        }
        else {
            value = ~~value;
            if (value < 1) {
                value = 1;
            }
            this._rowSpan = value;
            if (this.ownerTable)
                this.ownerTable.requestCompile();
            return this._rowSpan;
        }
    };
    HTML_TableCell.prototype.setAttribute = function (attributeName, attributeValue) {
        switch (attributeName) {
            case 'colspan':
                this.colSpan(~~attributeValue);
                break;
            case 'rowspan':
                this.rowSpan(~~attributeValue);
                break;
            default:
                _super.prototype.setAttribute.call(this, attributeName, attributeValue);
                break;
        }
    };
    HTML_TableCell.prototype.removeFromDOMAtUserCommand = function () {
        this.removeAllChildNodes();
        return true;
    };
    // a table cell cannot become other element type.
    HTML_TableCell.prototype.becomeElement = function (elementName) {
        return this;
    };
    // table cells don't have tabstops
    HTML_TableCell.prototype.tabStop = function (value) {
        if (value === void 0) { value = null; }
        return 0;
    };
    HTML_TableCell.prototype.isTheFirstCell = function () {
        if (this.parentNode) {
            return !!this.parentNode.previousSibling() == false && !!this.previousSibling() == false;
        }
        else {
            return false;
        }
    };
    HTML_TableCell.prototype.isTheLastCell = function () {
        if (this.parentNode) {
            return !!this.parentNode.nextSibling() == false && !!this.nextSibling() == false;
        }
        else {
            return false;
        }
    };
    HTML_TableCell.prototype.onmousemove = function (point, button, driver) {
        if (button == 0) {
            var resizer = this.getResizerTypeAtMousePoint(point);
            switch (resizer) {
                case 4 /* N */:
                    if (this.edgeTop.index == 0) {
                        driver.viewport.canvas.style.cursor = 'url(' + UI_Resources.gif_cursorColSelect + ') 6 17, auto';
                        return true;
                    }
                    else {
                        return false;
                    }
                    break;
                case 6 /* W */:
                    if (this.edgeLeft.index == 0) {
                        driver.viewport.canvas.style.cursor = 'url(' + UI_Resources.gif_cursorRowSelect + ') 17 6, auto';
                        return true;
                        break;
                    }
                case 7 /* E */:
                    driver.viewport.canvas.style.cursor = 'col-resize';
                    return true;
                    break;
                default:
                    return false;
                    break;
            }
        }
        return false;
    };
    HTML_TableCell.prototype.onmousedown = function (point, button, driver) {
        if (button == 1) {
            var resizer = this.getResizerTypeAtMousePoint(point);
            switch (resizer) {
                case 4 /* N */:
                    if (this.edgeTop.index == 0) {
                        // Select all the columns affected by the row
                        this.documentElement.viewport.selection.anchorTo(new TRange_Target(this.ownerTable.createVirtualColumnNode(this.edgeLeft.index, this.edgeRight.index, false), 0));
                        return true;
                    }
                    else {
                        return false;
                    }
                    break;
                case 6 /* W */:
                    if (this.edgeLeft.index == 0) {
                        this.documentElement.viewport.selection.anchorTo(new TRange_Target(this.ownerTable.createVirtualRowNode(this.edgeTop.index, this.edgeBottom.index, false), 0));
                        return true;
                        break;
                    }
                case 7 /* E */:
                    driver.lockTargetForResizing(this.ownerTable.createVirtualColumnNode(this.edgeLeft.index, this.edgeRight.index, true), resizer, point);
                    return true;
                    break;
            }
        }
        return false;
    };
    HTML_TableCell.prototype.applyXEdges = function (edges) {
        var sum = 0, i = 0;
        for (i = this.edgeLeft.index; i <= this.edgeRight.index; i++) {
            sum += edges[i];
        }
        this.style.width(String(sum));
    };
    HTML_TableCell.prototype.xmlAttributes = function () {
        var out = [_super.prototype.xmlAttributes.call(this)];
        if (this.style._width.isSet)
            out.push('width="' + Math.round(this.style.width()) + '"');
        if (this._colSpan > 1)
            out.push('colspan="' + this._colSpan + '"');
        if (this._rowSpan > 1)
            out.push('rowspan="' + this._rowSpan + '"');
        return out.join(' ');
    };
    HTML_TableCell.prototype.xmlBeginning = function () {
        var attrs = this.xmlAttributes();
        return '<td' + (attrs ? ' ' + attrs : '') + '>';
    };
    HTML_TableCell.prototype.xmlEnding = function () {
        return '</td>';
    };
    HTML_TableCell.prototype.createMultiRangeAnchorNode = function () {
        var anchor = new HTML_MultiRange_TableRect(this.documentElement, this.ownerTable);
        anchor.anchorTo(this);
        return anchor;
    };
    /* On the cell, the removeOrphan nodes it is canceled, because the cell
       can be orphan
     */
    HTML_TableCell.prototype.removeOrphanNodes = function () {
        // void, intentionally.
    };
    /* Inserts a column in the ownerTable of the cell.
       If @before is true, the column will be inserted before
       this cell, otherwise the column will be inserted after this cell.
     */
    HTML_TableCell.prototype.insertColumn = function (before) {
        if (before === void 0) { before = true; }
        this.ownerTable._xEdgesApplied = false;
        this.documentElement.undoManager().createUndoEntry('Insert Column');
        var table = this.ownerTable, leftIndex = this.edgeLeft.index, rightIndex = this.edgeRight.index, col = table.getCellsForColumn(leftIndex, rightIndex), indexes = [], i = 0, len = 0, cell;
        for (i = 0, len = col.length; i < len; i++) {
            indexes.push([col[i].edgeLeft.index, col[i].edgeRight.index]);
        }
        for (i = 0, len = col.length; i < len; i++) {
            if (before) {
                // if the cell @i leftIndex is lower than this cell left
                // index, we increase it's colspan, otherwise we insert a cell...
                // the cell should have the same rowspan as the cell @ i.
                if (indexes[i][0] < leftIndex) {
                    col[i].colSpan(col[i].colSpan() + 1);
                }
                else {
                    cell = this.documentElement.createElement('td');
                    cell.rowSpan(col[i].rowSpan());
                    col[i].parentNode.appendChild(cell, col[i].siblingIndex);
                }
            }
            else {
                if (indexes[i][1] > rightIndex) {
                    col[i].colSpan(col[i].colSpan() + 1);
                }
                else {
                    cell = this.documentElement.createElement('td');
                    cell.rowSpan(col[i].rowSpan());
                    col[i].parentNode.appendChild(cell, col[i].siblingIndex + 1);
                }
            }
        }
    };
    /* Inserts a row in the table populated with cells.
       It attempts to keep the same layout of the current visual row
       of the cell */
    HTML_TableCell.prototype.insertRow = function (before) {
        if (before === void 0) { before = true; }
        this.ownerTable._xEdgesApplied = false;
        this.documentElement.undoManager().createUndoEntry('Insert Row');
        var table = this.ownerTable, topIndex = this.edgeTop.index, bottomIndex = this.edgeBottom.index, col = table.getCellsForRow(topIndex, bottomIndex), row = [], tr, indexes = [], i = 0, len = 0, cell;
        for (i = 0, len = col.length; i < len; i++) {
            indexes.push([col[i].edgeTop.index, col[i].edgeBottom.index]);
        }
        for (i = 0, len = col.length; i < len; i++) {
            if (before) {
                if (indexes[i][0] < topIndex) {
                    col[i].rowSpan(col[i].rowSpan() + 1);
                }
                else {
                    cell = this.documentElement.createElement('td');
                    cell.colSpan(col[i].colSpan());
                    row.push(cell);
                }
            }
            else {
                if (indexes[i][1] > bottomIndex) {
                    col[i].rowSpan(col[i].rowSpan() + 1);
                }
                else {
                    cell = this.documentElement.createElement('td');
                    cell.colSpan(col[i].colSpan());
                    row.push(cell);
                }
            }
        }
        if (row.length) {
            tr = this.documentElement.createElement('tr');
            for (i = 0, len = row.length; i < len; i++) {
                tr.appendChild(row[i]);
            }
            if (before) {
                this.ownerTable.appendChild(tr, this.parentNode.siblingIndex);
            }
            else {
                this.ownerTable.appendChild(tr, this.parentNode.siblingIndex + 1);
            }
        }
    };
    /* Deletes the visual column of the cell */
    HTML_TableCell.prototype.deleteColumn = function () {
        this.ownerTable._xEdgesApplied = false;
        this.documentElement.undoManager().createUndoEntry('Delete Column');
        var table = this.ownerTable, leftIndex = this.edgeLeft.index, rightIndex = this.edgeRight.index, col = table.getCellsForColumn(leftIndex, rightIndex), rows = [], i = 0, len = 0, indexes = [], thisColspan = this.colSpan(), removedCells = [], selection = this.documentElement.viewport.selection, rng = selection.getRange();
        for (i = 0, len = this.ownerTable.childNodes.length; i < len; i++) {
            rows.push(this.ownerTable.childNodes[i]);
        }
        for (i = 0, len = col.length; i < len; i++) {
            indexes.push([col[i].edgeLeft.index, col[i].edgeRight.index]);
        }
        for (i = 0, len = col.length; i < len; i++) {
            if (indexes[i][0] < leftIndex || indexes[i][1] > rightIndex) {
                col[i].colSpan(col[i].colSpan() - thisColspan);
            }
            else {
                col[i].remove();
                removedCells.push(col[i]);
            }
        }
        for (i = 0, len = rows.length; i < len; i++) {
            if (rows[i].childNodes.length == 0) {
                rows[i].remove();
            }
        }
        if (table.childNodes.length == 0) {
            table.remove();
        }
        if (table.parentNode)
            selection.anchorTo(new TRange_Target(table, table.FRAGMENT_START));
        else
            selection.anchorTo(new TRange_Target(this.documentElement));
    };
    /* Deletes the "visual" (not the TR) row of the cell from the table.
     */
    HTML_TableCell.prototype.deleteRow = function () {
        this.ownerTable._xEdgesApplied = false;
        this.documentElement.undoManager().createUndoEntry('Delete Row');
        var table = this.ownerTable, topIndex = this.edgeTop.index, bottomIndex = this.edgeBottom.index, col = table.getCellsForRow(topIndex, bottomIndex), rows = [], i = 0, len = 0, indexes = [], thisRowspan = this.rowSpan(), removedCells = [], selection = this.documentElement.viewport.selection, rng = selection.getRange();
        for (i = 0, len = this.ownerTable.childNodes.length; i < len; i++) {
            rows.push(this.ownerTable.childNodes[i]);
        }
        for (i = 0, len = col.length; i < len; i++) {
            indexes.push([col[i].edgeTop.index, col[i].edgeBottom.index]);
        }
        for (i = 0, len = col.length; i < len; i++) {
            if (indexes[i][0] < topIndex || indexes[i][1] > bottomIndex) {
                col[i].rowSpan(col[i].rowSpan() - thisRowspan);
            }
            else {
                col[i].remove();
                removedCells.push(col[i]);
            }
        }
        for (i = 0, len = rows.length; i < len; i++) {
            if (rows[i].childNodes.length == 0) {
                rows[i].remove();
            }
        }
        if (table.childNodes.length == 0) {
            table.remove();
        }
        if (table.parentNode)
            selection.anchorTo(new TRange_Target(table, table.FRAGMENT_START));
        else
            selection.anchorTo(new TRange_Target(this.documentElement));
    };
    /* If the cell has colspan more than 1 or rowspan more than 1,
       we can split it.
     */
    HTML_TableCell.prototype.splitCell = function () {
        if (this.colSpan() == 1 && this.rowSpan() == 1) {
            return;
        }
        this.documentElement.undoManager().createUndoEntry('Split Cell');
        this.documentElement.lockTables();
        var affectedRows = [this.parentNode], i = 0, len = 0, j = 0, n = 0, needRowsAfter = 0, rowspan = this.rowSpan(), cursor, newRow, saveColspan = this.colSpan(), saveRowspan = this.rowSpan(), saveEdgeLeftIndex = this.edgeLeft.index, insertAtPos = null, c;
        if (rowspan > 1) {
            cursor = this.parentNode.nextSibling();
            while (rowspan > 1) {
                if (cursor) {
                    affectedRows.push(cursor);
                }
                else {
                    newRow = this.documentElement.createElement('tr');
                    newRow.ownerTable = this.ownerTable;
                    this.ownerTable.appendChild(newRow);
                    affectedRows.push(newRow);
                    cursor = newRow;
                }
                cursor = cursor.nextSibling();
                rowspan--;
            }
        }
        if (saveColspan > 1) {
            this.colSpan(1);
            for (i = 1; i < saveColspan; i++) {
                c = this.documentElement.createElement('td');
                this.parentNode.appendChild(c, this.siblingIndex + 1);
            }
        }
        if (saveRowspan > 1) {
            this.rowSpan(1);
            for (i = 1; i < affectedRows.length; i++) {
                if (affectedRows[i].childNodes.length == 0) {
                    insertAtPos = null;
                }
                else {
                    insertAtPos = 0;
                    for (j = 0, n = affectedRows[i].childNodes.length; j < n; j++) {
                        c = affectedRows[i].childNodes[j];
                        if (c.edgeLeft && c.edgeLeft.index <= saveEdgeLeftIndex) {
                            insertAtPos = j;
                        }
                        else {
                            break;
                        }
                    }
                }
                for (j = 0; j < saveColspan; j++) {
                    c = this.documentElement.createElement('td');
                    affectedRows[i].appendChild(c, insertAtPos);
                }
            }
        }
        this.documentElement.unlockTables();
        this.ownerTable.compile(true);
        this.documentElement.viewport.selection.fire('changed');
    };
    Object.defineProperty(HTML_TableCell.prototype, "ownerTable", {
        /* Returns the direct table which holds this cell */
        get: function () {
            return this.parentNode && this.parentNode.is() == 'tr' ? this.parentNode.ownerTable : null;
        },
        set: function (table) {
            console.error("The ownerTable property of a TD is read-only");
        },
        enumerable: true,
        configurable: true
    });
    /* Returns the next cell in the ownertable of the current cell.
       The cell is physically layouted visually in the table, and it has
       nothing to do with the DOM node order of the cells in the table */
    HTML_TableCell.prototype.nextCell = function () {
        if (this.nextSibling()) {
            return this.nextSibling();
        }
        else {
            for (var i = this.parentNode.siblingIndex + 1; i < this.parentNode.parentNode.childNodes.length; i++) {
                if (this.parentNode.parentNode.childNodes[i].childNodes[0]) {
                    return this.parentNode.parentNode.childNodes[i].childNodes[0];
                }
            }
        }
        return null;
    };
    /* Returns the pervious cell in the ownertable of the current cell.
       The cell is physically layouted visually in the table, and it has
       nothing to do with the DOM node order of the cells in the table */
    HTML_TableCell.prototype.previousCell = function () {
        var row;
        if (this.previousSibling()) {
            return this.previousSibling();
        }
        else {
            for (var i = this.parentNode.siblingIndex - 1; i >= 0; i--) {
                row = this.parentNode.parentNode.childNodes[i];
                if (row.childNodes[row.childNodes.length - 1]) {
                    return (row.childNodes[row.childNodes.length - 1]);
                }
            }
        }
        return null;
    };
    HTML_TableCell.prototype.upperNeighbourCell = function () {
        var cells = this.ownerTable.getCellsForColumn(this.edgeLeft.index, this.edgeRight.index), index = -1, i = 0, len = cells.length;
        index = cells.indexOf(this);
        if (index > 0) {
            return cells[index - 1];
        }
        else {
            return null;
        }
    };
    HTML_TableCell.prototype.bottomNeighbourCell = function () {
        var cells = this.ownerTable.getCellsForColumn(this.edgeLeft.index, this.edgeRight.index), index = -1, i = 0, len = cells.length;
        index = cells.indexOf(this);
        if (index < cells.length - 1 && index >= 0) {
            return cells[index + 1];
        }
        else {
            return null;
        }
    };
    return HTML_TableCell;
})(TNode_Element);
var HTML_NegationNode = (function (_super) {
    __extends(HTML_NegationNode, _super);
    function HTML_NegationNode(nodeName) {
        _super.call(this);
        this.isDefragmentable = true;
        this.isNegation = true;
        this.nodeName = '!' + nodeName;
        this.style.display('inline');
        switch (nodeName) {
            case 'b':
                this.style.fontWeight('normal');
                break;
            case 'i':
                this.style.fontStyle('normal');
                break;
            case 'u':
            case 'strike':
                this.style.textDecoration('none');
                break;
            case 'sup':
            case 'sub':
                this.style.verticalAlign('normal');
                break;
        }
    }
    HTML_NegationNode.prototype.xmlBeginning = function () {
        var out = '<span data-tag="' + this.nodeName + '" style="';
        switch (this.nodeName) {
            case '!b':
                out += 'font-weight: normal;';
                break;
            case '!i':
                out += 'font-style: normal;';
                break;
            case '!u':
            case '!strike':
                out += 'text-decoration: none;';
                break;
            case '!sub':
            case '!sup':
                out += 'vertical-align: baseline;';
                break;
        }
        out += '">';
        return out;
    };
    HTML_NegationNode.prototype.xmlEnding = function () {
        return '</span>';
    };
    return HTML_NegationNode;
})(TNode_Element);
var HTML_Font = (function (_super) {
    __extends(HTML_Font, _super);
    function HTML_Font() {
        _super.call(this);
        this.isDefragmentable = true;
        this._name = null;
        this.nodeName = 'font';
        this.style.display('inline');
    }
    HTML_Font.prototype.name = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            //getter
            return this._name || '';
        }
        else {
            //setter
            this._name = value || null;
            this.style.fontFamily(this._name || '');
            return value;
        }
    };
    HTML_Font.prototype.setAttribute = function (attributeName, attributeValue) {
        if (attributeValue === void 0) { attributeValue = null; }
        switch (attributeName) {
            case 'name':
                this.name(attributeValue || null);
                break;
            default:
                _super.prototype.setAttribute.call(this, attributeName, attributeValue || '');
                break;
        }
    };
    HTML_Font.prototype.xmlBeginning = function () {
        return '<span data-tag="font:' + this._name + '"' + (this._name ? ' style="font-family: \'' + this._name + '\'"' : '') + '>';
    };
    HTML_Font.prototype.xmlEnding = function () {
        return '</span>';
    };
    HTML_Font.prototype.clone = function () {
        var returnValue = _super.prototype.clone.call(this);
        if (this._name) {
            returnValue.setAttribute('name', this._name);
        }
        return returnValue;
    };
    HTML_Font.prototype.canDefragmentWith = function (font) {
        return font.name() == this.name();
    };
    return HTML_Font;
})(TNode_Element);
var HTML_Color = (function (_super) {
    __extends(HTML_Color, _super);
    function HTML_Color() {
        _super.call(this);
        this.isDefragmentable = true;
        this._name = null;
        this.nodeName = 'color';
        this.style.display('inline');
    }
    HTML_Color.prototype.name = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            //getter
            return this._name || '';
        }
        else {
            //setter
            this._name = value || null;
            this.style.color(this._name || '');
            return value;
        }
    };
    HTML_Color.prototype.setAttribute = function (attributeName, attributeValue) {
        if (attributeValue === void 0) { attributeValue = null; }
        switch (attributeName) {
            case 'name':
                this.name(attributeValue || null);
                break;
            default:
                _super.prototype.setAttribute.call(this, attributeName, attributeValue || '');
                break;
        }
    };
    HTML_Color.prototype.xmlBeginning = function () {
        return '<span data-tag="color:' + this._name + '"' + (this._name ? ' style="color: ' + this._name + '"' : '') + '>';
    };
    HTML_Color.prototype.xmlEnding = function () {
        return '</span>';
    };
    HTML_Color.prototype.clone = function () {
        var returnValue = _super.prototype.clone.call(this);
        if (this._name) {
            returnValue.setAttribute('name', this._name);
        }
        return returnValue;
    };
    HTML_Color.prototype.canDefragmentWith = function (color) {
        return color.name() == this.name();
    };
    return HTML_Color;
})(TNode_Element);
var HTML_Size = (function (_super) {
    __extends(HTML_Size, _super);
    function HTML_Size() {
        _super.call(this);
        this.isDefragmentable = true;
        this._value = '';
        this.nodeName = 'size';
        this.style.display('inline');
    }
    HTML_Size.prototype.value = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._value;
        }
        else {
            this.style.fontSize(this._value = (v || ''));
        }
    };
    HTML_Size.prototype.setAttribute = function (attributeName, attributeValue) {
        switch (attributeName) {
            case 'value':
                this.value(attributeValue);
                break;
            default:
                _super.prototype.setAttribute.call(this, attributeName, attributeValue);
                break;
        }
    };
    HTML_Size.prototype.clone = function () {
        var returnValue = _super.prototype.clone.call(this);
        if (this._value) {
            returnValue.setAttribute('value', this._value);
        }
        return returnValue;
    };
    HTML_Size.prototype.xmlBeginning = function () {
        return '<span data-tag="size:' + (this._value ? this._value : '') + '"' + ((this._value) ? ' style="font-size: ' + this._value + 'px"' : '') + '>';
    };
    HTML_Size.prototype.xmlEnding = function () {
        return '</span>';
    };
    HTML_Size.prototype.canDefragmentWith = function (size) {
        return size.value() == this.value();
    };
    return HTML_Size;
})(TNode_Element);
var HTML_Strike = (function (_super) {
    __extends(HTML_Strike, _super);
    function HTML_Strike() {
        _super.call(this);
        this.isDefragmentable = true;
        this.nodeName = 'strike';
        this.style.display('inline');
        this.style.textDecoration('line-through');
    }
    return HTML_Strike;
})(TNode_Element);
/*
   The HTML_MultiRange Element represents a virtual Element that
   is used by multirange selection.

   The element cannot be appended inside the DOM, removed, etc.

   The childNodes from the HTML_MultiRange element have physically other
   parentNode's, not the HTML_MultiRange element node.

*/
var HTML_MultiRange = (function (_super) {
    __extends(HTML_MultiRange, _super);
    function HTML_MultiRange(document, parentNode, role) {
        _super.call(this);
        this.isSelectable = true;
        this.isResizable = true;
        this.role = 'generic';
        this.resizerHint = null;
        this.nodeName = 'multirange';
        this.documentElement = document;
        this.parentNode = parentNode;
        this.role = role;
        if (!this.parentNode) {
            throw "Bad initialization";
        }
    }
    Object.defineProperty(HTML_MultiRange.prototype, "FRAGMENT_START", {
        get: function () {
            if (this.childNodes.length) {
                return this.childNodes[0].FRAGMENT_START;
            }
            else {
                return this.parentNode.FRAGMENT_START;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HTML_MultiRange.prototype, "FRAGMENT_END", {
        get: function () {
            if (this.childNodes.length) {
                return this.childNodes[this.childNodes.length - 1].FRAGMENT_END;
            }
            else {
                return this.parentNode.FRAGMENT_END;
            }
        },
        enumerable: true,
        configurable: true
    });
    HTML_MultiRange.prototype.sortNodes = function () {
        this.childNodes.sort(function (a, b) {
            return a.FRAGMENT_START - b.FRAGMENT_START;
        });
    };
    HTML_MultiRange.prototype.appendChild = function (node, index) {
        if (index === void 0) { index = null; }
        if (this.childNodes.indexOf(node) == -1) {
            this.childNodes.push(node);
            this.sortNodes();
        }
        return node;
    };
    HTML_MultiRange.prototype.removeChild = function (node) {
        for (var i = 0, len = this.childNodes.length; i < len; i++) {
            if (this.childNodes[i] == node) {
                this.childNodes.splice(i, 1);
                this.sortNodes();
                break;
            }
        }
        return node;
    };
    HTML_MultiRange.prototype.appendCollection = function (collection, siblingIndex) {
        if (siblingIndex === void 0) { siblingIndex = null; }
        throw "ERR_NOT_SUPPORTED";
    };
    HTML_MultiRange.prototype.remove = function () {
        return this;
    };
    HTML_MultiRange.prototype.createSurgery = function (atFragmentIndex, createNodeAfter, nodeNameAfter, hint) {
        if (createNodeAfter === void 0) { createNodeAfter = true; }
        if (nodeNameAfter === void 0) { nodeNameAfter = null; }
        if (hint === void 0) { hint = 0 /* NONE */; }
        throw "ERR_NOT_SUPPORTED";
    };
    HTML_MultiRange.prototype.mergeWith = function (element) {
        throw "ERR_NOT_SUPPORTED";
    };
    HTML_MultiRange.prototype.removeFromDOMAtUserCommand = function () {
        return false;
    };
    HTML_MultiRange.prototype.unwrap = function () {
        throw "ERR_NOT_SUPPORTED";
    };
    HTML_MultiRange.prototype.defragment = function (removeOrphans) {
        if (removeOrphans === void 0) { removeOrphans = true; }
        throw "ERR_NOT_SUPPORTED";
    };
    HTML_MultiRange.prototype.clone = function () {
        return this;
    };
    HTML_MultiRange.prototype.canDefragmentWith = function (element) {
        return false;
    };
    HTML_MultiRange.prototype.becomeElement = function (elementName) {
        throw "ERR_NOT_SUPPORTED";
    };
    HTML_MultiRange.prototype.mergeAdjacentLists = function () {
        // nothing.
    };
    HTML_MultiRange.prototype.tabStop = function (value) {
        if (value === void 0) { value = null; }
        return value;
    };
    HTML_MultiRange.prototype.outerHTML = function (v) {
        if (v === void 0) { v = null; }
        if (v !== null) {
            throw "ERR_NOT_SUPPORTED";
        }
        else {
            return this.innerHTML(null);
        }
    };
    HTML_MultiRange.prototype.createTarget = function () {
        return new TRange_Target(this);
    };
    HTML_MultiRange.prototype.serialize = function () {
        var out = {
            "nodes": [],
            "type": "multirange",
            "parent": this.parentNode ? this.parentNode.FRAGMENT_START : null
        }, i = 0, len = this.childNodes.length;
        for (i = 0; i < len; i++) {
            out.nodes.push(this.childNodes[i].FRAGMENT_START);
        }
        return out;
    };
    HTML_MultiRange.unserialize = function (document, data) {
        var out, i = 0, len = data.nodes.length;
        switch (data.type) {
            case 'multirange':
                out = new HTML_MultiRange(document, document.findNodeAtIndex(data.parent), 'multirange');
                break;
            case 'table-rect':
                out = new HTML_MultiRange_TableRect(document, document.findNodeAtIndex(data.parent));
                if (data.focus) {
                    out.focus = document.findNodeAtIndex(data.focus);
                }
                else {
                    out.focus = null;
                }
                if (data.anchor) {
                    out.anchor = document.findNodeAtIndex(data.anchor);
                }
                else {
                    out.anchor = null;
                }
                break;
            case 'table-row':
                out = new HTML_MultiRange_TableRow(document, document.findNodeAtIndex(data.parent));
                break;
            case 'table-column':
                out = new HTML_MultiRange_TableColumn(document, document.findNodeAtIndex(data.parent));
                break;
            default:
                throw "UNSERIALIZATION FAILED.";
                break;
        }
        for (i = 0; i < len; i++) {
            out.childNodes.push(document.findNodeAtIndex(data.nodes[i]));
        }
        return out;
    };
    return HTML_MultiRange;
})(TNode_Element);
var HTML_MultiRange_TableColumn = (function (_super) {
    __extends(HTML_MultiRange_TableColumn, _super);
    function HTML_MultiRange_TableColumn(document, parentNode) {
        _super.call(this, document, parentNode, 'table-column');
        (function (me) {
            me.style.on('changed', function (propertyName) {
                if (propertyName == 'width') {
                    me.setWidth(me.style.width());
                }
            });
        })(this);
    }
    HTML_MultiRange_TableColumn.prototype.appendChild = function (node, index) {
        if (index === void 0) { index = null; }
        var iNode, i = 0, len = 0, foundIndex = null;
        if (!(node.is() == 'td')) {
            if (node.is() == 'tr') {
                for (i = 0, len = node.childNodes.length; i < len; i++) {
                    this.appendChild(node.childNodes[i]);
                }
                return node;
            }
            else {
                if (!(node.ownerBlockElement().is() == 'td')) {
                    throw "Node not acceptable.";
                }
                else {
                    iNode = node.ownerBlockElement();
                }
            }
        }
        else {
            iNode = node;
        }
        for (i = 0, len = this.childNodes.length; i < len; i++) {
            if (this.childNodes[i] == iNode) {
                return iNode;
            }
        }
        this.childNodes.push(iNode);
        this.sortNodes();
        return node;
    };
    Object.defineProperty(HTML_MultiRange_TableColumn.prototype, "layout", {
        get: function () {
            if (this.childNodes.length) {
                return this.childNodes[0].layout;
            }
            else {
                return this.parentNode.layout;
            }
        },
        set: function (l) {
            // nothing
        },
        enumerable: true,
        configurable: true
    });
    HTML_MultiRange_TableColumn.prototype.setWidth = function (value) {
        if (!this.childNodes.length) {
            return;
        }
        var cell = this.childNodes[0], lEdgeIndex = cell.edgeLeft.index, rEdgeIndex = cell.edgeRight.index, i = 0, len = 0, affectedEdges = [], table = cell.ownerTable, actualEdgesWidthSum = 0, delta = 0, leftNeighbour, rightNeighbour;
        for (i = lEdgeIndex; i <= rEdgeIndex; i++) {
            affectedEdges.push(table.matrix.xEdges.edges[i]);
            actualEdgesWidthSum += table.matrix.xEdges.edges[i].scaledValue;
        }
        leftNeighbour = lEdgeIndex == 0 ? null : table.matrix.xEdges.edges[lEdgeIndex - 1];
        rightNeighbour = rEdgeIndex == table.matrix.xEdges.edges.length - 1 ? null : table.matrix.xEdges.edges[rEdgeIndex + 1];
        actualEdgesWidthSum += 2 * cell.style.paddingLeft() + cell.style.marginLeft() + cell.style.marginRight() + 2 * cell.style.borderWidth();
        delta = value - actualEdgesWidthSum;
        if (delta < 0) {
            switch (this.resizerHint) {
                case 6 /* W */:
                    // increse leftNeighbour with delta
                    // decrease first affected edge with delta
                    if (leftNeighbour)
                        leftNeighbour.scaledValue -= delta;
                    affectedEdges[0].scaledValue += delta;
                    break;
                case 7 /* E */:
                    // increase rightNeighbour with delta
                    // decrease last affected edge with delta
                    if (rightNeighbour)
                        rightNeighbour.scaledValue -= delta;
                    affectedEdges[affectedEdges.length - 1].scaledValue += delta;
                    break;
            }
        }
        else {
            switch (this.resizerHint) {
                case 6 /* W */:
                    // decrease leftNeighbour with delta
                    // increase first affected Edge with delta
                    if (leftNeighbour)
                        leftNeighbour.scaledValue -= delta;
                    affectedEdges[0].scaledValue += delta;
                    break;
                case 7 /* E */:
                    // decrease rightNeigbour with delta
                    // decrease last affected Edge with delta
                    if (rightNeighbour)
                        rightNeighbour.scaledValue -= delta;
                    affectedEdges[affectedEdges.length - 1].scaledValue += delta;
                    break;
            }
        }
        table.applyXEdges();
    };
    HTML_MultiRange_TableColumn.prototype.becomeTableRectRange = function () {
        if (this.childNodes.length) {
            var become = new HTML_MultiRange_TableRect(this.childNodes[0].documentElement, this.parentNode);
            become.anchorTo(this.childNodes[0]);
            for (var i = 1, len = this.childNodes.length; i < len; i++) {
                become.appendChild(this.childNodes[i]);
            }
            return become;
        }
        else {
            return null;
        }
    };
    HTML_MultiRange_TableColumn.prototype.serialize = function () {
        var out = _super.prototype.serialize.call(this);
        out.type = 'table-column';
        return out;
    };
    return HTML_MultiRange_TableColumn;
})(HTML_MultiRange);
var HTML_MultiRange_TableRow = (function (_super) {
    __extends(HTML_MultiRange_TableRow, _super);
    function HTML_MultiRange_TableRow(document, parentNode) {
        _super.call(this, document, parentNode, 'table-row');
    }
    HTML_MultiRange_TableRow.prototype.appendChild = function (node, index) {
        if (index === void 0) { index = null; }
        var iNode, i = 0, len = 0, foundIndex = null;
        if (!(node.is() == 'td')) {
            if (node.is() == 'tr') {
                for (i = 0, len = node.childNodes.length; i < len; i++) {
                    this.appendChild(node.childNodes[i]);
                }
                return node;
            }
            else {
                if (!(node.ownerBlockElement().is() == 'td')) {
                    throw "Node not acceptable.";
                }
                else {
                    iNode = node.ownerBlockElement();
                }
            }
        }
        else {
            iNode = node;
        }
        for (i = 0, len = this.childNodes.length; i < len; i++) {
            if (this.childNodes[i] == iNode) {
                return iNode;
            }
        }
        this.childNodes.push(iNode);
        this.sortNodes();
        return node;
    };
    Object.defineProperty(HTML_MultiRange_TableRow.prototype, "layout", {
        get: function () {
            if (this.childNodes.length) {
                return this.childNodes[0].layout;
            }
            else {
                return this.parentNode.layout;
            }
        },
        set: function (l) {
            // nothing
        },
        enumerable: true,
        configurable: true
    });
    HTML_MultiRange_TableRow.prototype.becomeTableRectRange = function () {
        if (this.childNodes.length) {
            var become = new HTML_MultiRange_TableRect(this.childNodes[0].documentElement, this.parentNode);
            become.anchorTo(this.childNodes[0]);
            for (var i = 1, len = this.childNodes.length; i < len; i++) {
                become.appendChild(this.childNodes[i]);
            }
            return become;
        }
        else {
            return null;
        }
    };
    HTML_MultiRange_TableRow.prototype.serialize = function () {
        var out = _super.prototype.serialize.call(this);
        out.type = 'table-row';
        return out;
    };
    return HTML_MultiRange_TableRow;
})(HTML_MultiRange);
var HTML_MultiRange_TableRect = (function (_super) {
    __extends(HTML_MultiRange_TableRect, _super);
    function HTML_MultiRange_TableRect(document, parentNode) {
        _super.call(this, document, parentNode, 'table-selection');
        this.anchor = null;
        this.focus = null;
    }
    HTML_MultiRange_TableRect.prototype.appendChild = function (node, index) {
        if (index === void 0) { index = null; }
        var iNode, i = 0, len = 0, foundIndex = null;
        if (!(node.is() == 'td')) {
            if (node.is() == 'tr') {
                for (i = 0, len = node.childNodes.length; i < len; i++) {
                    this.appendChild(node.childNodes[i]);
                }
                return node;
            }
            else {
                if (!(node.ownerBlockElement().is() == 'td')) {
                    throw "Node not acceptable.";
                }
                else {
                    iNode = node.ownerBlockElement();
                }
            }
        }
        else {
            iNode = node;
        }
        for (i = 0, len = this.childNodes.length; i < len; i++) {
            if (this.childNodes[i] == iNode) {
                return iNode;
            }
        }
        this.childNodes.push(iNode);
        this.sortNodes();
        return node;
    };
    HTML_MultiRange_TableRect.prototype.anchorTo = function (cell) {
        this.anchor = cell;
        this.focus = cell;
        this.childNodes = [cell];
        return this;
    };
    HTML_MultiRange_TableRect.prototype.focusTo = function (cell) {
        if (cell.ownerTable != this.parentNode) {
            // TODO: Search if the cell is a child of a cell of this ownerTable.
            return;
        }
        var edgeLeft = Math.min(this.anchor.edgeLeft.index, cell.edgeLeft.index), edgeRight = Math.max(this.anchor.edgeRight.index, cell.edgeRight.index), edgeTop = Math.min(this.anchor.edgeTop.index, cell.edgeTop.index), edgeBottom = Math.max(this.anchor.edgeBottom.index, cell.edgeBottom.index), row = 0, rows = 0, col = 0, cols = 0, c;
        this.childNodes = [];
        for (row = 0, rows = this.parentNode.childNodes.length; row < rows; row++) {
            for (col = 0, cols = this.parentNode.childNodes[row].childNodes.length; col < cols; col++) {
                c = this.parentNode.childNodes[row].childNodes[col];
                if (c.edgeLeft.index >= edgeLeft && c.edgeRight.index <= edgeRight && c.edgeTop.index >= edgeTop && c.edgeBottom.index <= edgeBottom) {
                    this.childNodes.push(c);
                }
            }
        }
        this.sortNodes();
        this.anchor.documentElement.viewport.selection.getRange().fire('changed');
        this.focus = cell;
    };
    HTML_MultiRange_TableRect.prototype.acceptNode = function (node) {
        var cursor = node;
        while (cursor) {
            if (cursor.is() == 'td' && cursor.parentNode.parentNode == this.parentNode) {
                return cursor;
            }
            cursor = cursor.parentNode;
        }
        return null;
    };
    HTML_MultiRange_TableRect.prototype.mergeCells = function () {
        var affectedRows = [], i = 0, len = this.childNodes.length, cellTopLeft = null, c, minEdgeTop = null, minEdgeLeft = null, maxEdgeRight = null, maxEdgeBottom = null, finalColSpan = null, finalRowSpan = null;
        if (len < 2) {
            return;
        }
        for (i = 0; i < len; i++) {
            c = this.childNodes[i];
            if (cellTopLeft === null) {
                cellTopLeft = c;
            }
            else {
                if (cellTopLeft.edgeLeft.index >= c.edgeLeft.index && cellTopLeft.edgeTop.index >= c.edgeTop.index) {
                    cellTopLeft = c;
                }
            }
            if (minEdgeTop === null) {
                minEdgeTop = c.edgeTop.index;
                minEdgeLeft = c.edgeLeft.index;
                maxEdgeRight = c.edgeRight.index;
                maxEdgeBottom = c.edgeBottom.index;
            }
            else {
                minEdgeTop = Math.min(c.edgeTop.index, minEdgeTop);
                minEdgeLeft = Math.min(c.edgeLeft.index, minEdgeLeft);
                maxEdgeRight = Math.max(c.edgeRight.index, maxEdgeRight);
                maxEdgeBottom = Math.max(c.edgeBottom.index, maxEdgeBottom);
            }
            if (affectedRows.indexOf(c.parentNode) == -1) {
                affectedRows.push(c.parentNode);
            }
        }
        finalColSpan = maxEdgeRight - minEdgeLeft + 1;
        finalRowSpan = maxEdgeBottom - minEdgeTop + 1;
        for (i = 0; i < len; i++) {
            c = this.childNodes[i];
            if (c == cellTopLeft)
                continue;
            if (c.childNodes.length) {
                if (c.childNodes[0].is() == '#text') {
                    cellTopLeft.appendChild(cellTopLeft.documentElement.createElement('br'));
                }
                cellTopLeft.appendCollection(new TNode_Collection(c.childNodes));
            }
            c.remove();
        }
        cellTopLeft.colSpan(finalColSpan);
        cellTopLeft.rowSpan(finalRowSpan);
        for (i = 0, len = affectedRows.length; i < len; i++) {
            if (affectedRows[i].childNodes.length == 0) {
                affectedRows[i].remove();
            }
        }
        this.focus = cellTopLeft;
        this.anchor = cellTopLeft;
        this.childNodes = [cellTopLeft];
        cellTopLeft.ownerTable.compile(true);
        this.anchor.documentElement.viewport.selection.getRange().fire('changed');
        this.anchor.documentElement.viewport.selection.editorState.fire('changed', ['cell', 'table']);
        // recompute document state
    };
    HTML_MultiRange_TableRect.prototype.serialize = function () {
        var out = _super.prototype.serialize.call(this);
        out.type = 'table-rect';
        if (this.focus) {
            out.focus = this.focus.FRAGMENT_START;
        }
        else {
            out.focus = null;
        }
        if (this.anchor) {
            out.anchor = this.anchor.FRAGMENT_START;
        }
        else {
            out.anchor = null;
        }
        return out;
    };
    return HTML_MultiRange_TableRect;
})(HTML_MultiRange);
var TStyle = (function (_super) {
    __extends(TStyle, _super);
    function TStyle(node) {
        _super.call(this);
        this.node = node;
        this._width = new TStyle_Dimension(this, 'width');
        this._height = new TStyle_Dimension(this, 'height');
        this._aspectRatio = new TStyle_Dimension(this, 'aspectRatio');
        this._paddingTop = new TStyle_Dimension(this, 'paddingTop');
        this._paddingRight = new TStyle_Dimension(this, 'paddingRight');
        this._paddingLeft = new TStyle_Dimension(this, 'paddingLeft');
        this._paddingBottom = new TStyle_Dimension(this, 'paddingBottom');
        this._marginTop = new TStyle_Dimension(this, 'marginTop');
        this._marginRight = new TStyle_Dimension(this, 'marginRight');
        this._marginLeft = new TStyle_Dimension(this, 'marginLeft');
        this._marginBottom = new TStyle_Dimension(this, 'marginBottom');
        this._borderWidth = new TStyle_Dimension(this, 'borderWidth');
        this._fontSize = new TStyle_Dimension(this, 'fontSize');
        this._fontFamily = new TStyle_String(this, 'fontFamily', TStyle.$FontFamily);
        this._fontStyle = new TStyle_String(this, 'fontStyle', TStyle.$FontStyle);
        this._fontWeight = new TStyle_String(this, 'fontWeight', TStyle.$FontWeight);
        this._textDecoration = new TStyle_String(this, 'textDecoration', TStyle.$TextDecoration);
        this._lineHeight = new TStyle_Dimension(this, 'lineHeight');
        this._textAlign = new TStyle_String(this, 'textAlign', TStyle.$TextAlign);
        this._verticalAlign = new TStyle_String(this, 'verticalAlign', TStyle.$VerticalAlign);
        this._display = new TStyle_String(this, 'display', TStyle.$Display);
        this._float = new TStyle_String(this, 'float', TStyle.$Floats);
        this._color = new TStyle_Color(this, 'color', true);
        this._backgroundColor = new TStyle_Color(this, 'backgroundColor', false);
        this._borderColor = new TStyle_Color(this, 'borderColor', false);
    }
    TStyle.prototype.width = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._width.get();
        }
        else {
            this._width.set(~~v < 0 ? '0' : v);
            this.node.requestRelayout();
            this.fire('changed', "width");
            return null;
        }
    };
    TStyle.prototype.height = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._height.get();
        }
        else {
            this._height.set(~~v < 0 ? '0' : v);
            this.node.requestRelayout();
            this.fire('changed', "height");
            return null;
        }
    };
    TStyle.prototype.aspectRatio = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._aspectRatio.get();
        }
        else {
            this._aspectRatio.set(v);
            this.node.requestRelayout();
            this.fire('changed', "aspectRatio");
            return null;
        }
    };
    TStyle.prototype.paddingLeft = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._paddingLeft.get();
        }
        else {
            this._paddingLeft.set(v);
            this.node.requestRelayout();
            this.fire('changed', "paddingLeft");
            return null;
        }
    };
    TStyle.prototype.paddingTop = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._paddingTop.get();
        }
        else {
            this._paddingTop.set(v);
            this.node.requestRelayout();
            this.fire('changed', "paddingTop");
            return null;
        }
    };
    TStyle.prototype.paddingRight = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._paddingRight.get();
        }
        else {
            this._paddingRight.set(v);
            this.node.requestRelayout();
            this.fire('changed', "paddingRight");
            return null;
        }
    };
    TStyle.prototype.paddingBottom = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._paddingBottom.get();
        }
        else {
            this._paddingBottom.set(v);
            this.node.requestRelayout();
            this.fire('changed', "paddingBottom");
            return null;
        }
    };
    TStyle.prototype.marginLeft = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._marginLeft.get();
        }
        else {
            this._marginLeft.set(v);
            this.node.requestRelayout();
            this.fire('changed', "marginLeft");
            return null;
        }
    };
    TStyle.prototype.marginTop = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._marginTop.get();
        }
        else {
            this._marginTop.set(v);
            this.node.requestRelayout();
            this.fire('changed', "marginTop");
            return null;
        }
    };
    TStyle.prototype.marginRight = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._marginRight.get();
        }
        else {
            this._marginRight.set(v);
            this.node.requestRelayout();
            this.fire('changed', "marginRight");
            return null;
        }
    };
    TStyle.prototype.marginBottom = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._marginBottom.get();
        }
        else {
            this._marginBottom.set(v);
            this.node.requestRelayout();
            this.fire('changed', "marginBottom");
            return null;
        }
    };
    TStyle.prototype.borderWidth = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._borderWidth.get();
        }
        else {
            this._borderWidth.set(v);
            this.node.requestRelayout();
            this.fire('changed', "borderWidth");
            return null;
        }
    };
    TStyle.prototype.fontSize = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._fontSize.get();
        }
        else {
            this._fontSize.set(v);
            this.node.requestRelayout();
            this.fire('changed', "fontSize");
            return null;
        }
    };
    TStyle.prototype.lineHeight = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._lineHeight.get();
        }
        else {
            this._lineHeight.set(v);
            this.node.requestRelayout();
            this.fire('changed', "lineHeight");
            return null;
        }
    };
    TStyle.prototype.fontFamily = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._fontFamily.get();
        }
        else {
            this._fontFamily.set(v);
            this.node.requestRelayout();
            this.fire('changed', "fontFamily");
            return v;
        }
    };
    TStyle.prototype.fontStyle = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._fontStyle.get();
        }
        else {
            this._fontStyle.set(v);
            this.node.requestRelayout();
            this.fire('changed', "fontStyle");
            return v;
        }
    };
    TStyle.prototype.fontWeight = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._fontWeight.get();
        }
        else {
            this._fontWeight.set(v);
            this.node.requestRelayout();
            this.fire('changed', "fontWeight");
            return v;
        }
    };
    // the text that is used on the canvas context for fontStyle
    TStyle.prototype.fontStyleText = function () {
        return (this.fontStyle() == 'italic' ? 'italic ' : '') + (this.fontWeight() == 'bold' ? 'bold ' : '') + (this.fontSize()) + 'px ' + this.fontFamily();
    };
    TStyle.prototype.textDecoration = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._textDecoration.get();
        }
        else {
            this._textDecoration.set(v);
            this.node.requestRepaint();
            this.fire('changed', "textDecoration");
            return v;
        }
    };
    TStyle.prototype.display = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._display.get();
        }
        else {
            this._display.set(v);
            this.node.requestRelayout();
            this.fire('changed', "display");
            return v;
        }
    };
    TStyle.prototype.color = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._color.get();
        }
        else {
            this._color.set(v);
            this.node.requestRepaint();
            this.fire('changed', "color");
            return v;
        }
    };
    TStyle.prototype.backgroundColor = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._backgroundColor.get();
        }
        else {
            this._backgroundColor.set(v);
            this.node.requestRepaint();
            this.fire('changed', "backgroundColor");
            return v;
        }
    };
    TStyle.prototype.borderColor = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._borderColor.get();
        }
        else {
            this._borderColor.set(v);
            this.node.requestRepaint();
            this.fire('changed', "borderColor");
            return v;
        }
    };
    TStyle.prototype.float = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this._float.get();
        }
        else {
            this._float.set(v);
            this.node.requestRelayout();
            if (['left', 'right', 'center'].indexOf(v) >= 0) {
                var blockElement = this.node.ownerBlockElement();
                if (blockElement && blockElement.is() != 'body') {
                    blockElement.appendChild(this.node, v == 'center' ? null : 0);
                }
            }
            this.fire('changed', "float");
            return v;
        }
    };
    TStyle.prototype.padding = function (value) {
        this._paddingLeft.value = this._paddingRight.value = this._paddingTop.value = this._paddingBottom.value = (parseFloat(value || '0') || 0);
        this._paddingLeft.isSet = this._paddingRight.isSet = this._paddingBottom.isSet = this._paddingTop.isSet = true;
        this.node.requestRelayout();
        this.fire('changed', "padding");
    };
    TStyle.prototype.margin = function (value) {
        this._marginLeft.value = this._marginRight.value = this._marginTop.value = this._marginBottom.value = (parseFloat(value || '0') || 0);
        this._marginLeft.isSet = this._marginRight.isSet = this._marginBottom.isSet = this._marginTop.isSet = true;
        this.node.requestRelayout();
        this.fire('changed', "margin");
    };
    TStyle.prototype.textAlign = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            //getter
            return this._textAlign.get();
        }
        else {
            //setter
            this._textAlign.set(value);
            this.node.requestRepaint();
            this.fire('changed', "textAlign");
            return value;
        }
    };
    TStyle.prototype.verticalAlign = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this._verticalAlign.get();
        }
        else {
            this._verticalAlign.set(value);
            this.node.requestRepaint();
            this.fire('changed', "verticalAlign");
            return value;
        }
    };
    TStyle.prototype.offsetWidth = function () {
        return this.borderWidth() + this.paddingLeft() + this.width() + this.paddingRight() + this.borderWidth();
    };
    TStyle.prototype.offsetHeight = function () {
        return this.borderWidth() + this.paddingTop() + this.height() + this.paddingRight() + this.borderWidth();
    };
    TStyle.prototype.copyTo = function (style, properties) {
        for (var i = 0, len = properties.length; i < len; i++) {
            if (properties[i] && this['_' + properties[i]] && style['_' + properties[i]] && typeof this['_' + properties[i]].isSet != 'undefined') {
                this['_' + properties[i]].copyTo(style['_' + properties[i]]);
            }
        }
    };
    TStyle.$FontFamily = [
        "Arial",
        "Calibri",
        "Cambria",
        "Comic Sans MS",
        "Corbel",
        "Courier New",
        "Gabriola",
        "Georgia",
        "Impact",
        "Lucida Console",
        "Miriam",
        "Nyala",
        "Palatino Linotype",
        "Symbol",
        "Tahoma",
        "Times New Roman",
        "Trebuchet MS",
        "Verdana",
        "Webdings",
        "Wingdings"
    ];
    TStyle.$FontStyle = [
        "normal",
        "italic"
    ];
    TStyle.$FontWeight = [
        "normal",
        "bold"
    ];
    TStyle.$TextDecoration = [
        "none",
        "underline",
        "line-through"
    ];
    TStyle.$Display = [
        "block",
        "inline",
        "none"
    ];
    TStyle.$Floats = [
        "none",
        "left",
        "right",
        "center"
    ];
    TStyle.$TextAlign = [
        'left',
        'right',
        'center',
        'justified'
    ];
    TStyle.$VerticalAlign = [
        'super',
        'sub',
        'normal'
    ];
    return TStyle;
})(Events);
/* This class is used to read the default appearence of the nodes in the browser,
   in order to apply them as best as possible inside the canvas */
var TStyle_Browser_Calculator = (function () {
    function TStyle_Browser_Calculator() {
    }
    TStyle_Browser_Calculator.parseColor = function (c) {
        var matches, rs, gs, bs;
        switch (true) {
            case /^\#[a-f\d]{3}$/i.test(c):
            case /^\#[a-f\d]{6}$/i.test(c):
            case /^[a-z]+$/i.test(c):
                return c;
                break;
            case (matches = /^rgb\(([\s]+)?([\d]+)([\s]+)?\,([\s]+)?([\d]+)([\s]+)?\,([\s]+)?([\d]+)([\s]+)?\)$/i.exec(c)) ? true : false:
            case (matches = /^rgba\(([\s]+)?([\d]+)([\s]+)?\,([\s]+)?([\d]+)([\s]+)?\,([\s]+)?([\d]+)([\s]+)?\,([\s]+)?([\d]+)([\s]+)?\)$/i.exec(c)) ? true : false:
                rs = (~~matches[2]).toString(16);
                gs = (~~matches[5]).toString(16);
                bs = (~~matches[8]).toString(16);
                rs = rs.length == 1 ? '0' + rs : rs;
                gs = gs.length == 1 ? '0' + gs : gs;
                bs = bs.length == 1 ? '0' + bs : bs;
                return '#' + rs + gs + bs;
                break;
            default:
                return null;
                break;
        }
    };
    TStyle_Browser_Calculator.parseDimension = function (c) {
        var matches = /^([\-])?([\d\.]+)(px|\%)$/.exec(c), f, f1;
        if (!matches) {
            return null;
        }
        else {
            f = String(matches[1] || '') + (matches[2] || '');
            if (f.indexOf('.') > -1) {
                f = parseFloat(f).toFixed(1);
            }
            return f + (matches[3] == '%' ? '%' : '');
        }
    };
    TStyle_Browser_Calculator.initializeNode = function (nodeName) {
        var node = document.createElement(nodeName), computed;
        if (nodeName == 'a') {
            node.innerHTML = 'aaa';
            node['href'] = '#';
        }
        document.body.appendChild(node);
        computed = Helper.peek(window.getComputedStyle(node), [
            "color",
            "backgroundColor",
            "borderWidth",
            "borderColor",
            "paddingLeft",
            "paddingRight",
            "paddingBottom",
            "paddingTop",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
            "fontFamily",
            "fontSize",
            "textDecoration",
            "fontStyle",
            "fontWeight",
            "verticalAlign",
            "textAlign"
        ]);
        computed['color'] = TStyle_Browser_Calculator.parseColor(computed['color']);
        computed['backgroundColor'] = TStyle_Browser_Calculator.parseColor(computed['backgroundColor']);
        computed['backgroundColor'] = computed['backgroundColor'] == '#000000' ? null : computed['backgroundColor'];
        computed['borderColor'] = TStyle_Browser_Calculator.parseColor(computed['borderColor']);
        computed['borderWidth'] = TStyle_Browser_Calculator.parseDimension(computed['borderWidth']);
        computed['paddingLeft'] = TStyle_Browser_Calculator.parseDimension(computed['paddingLeft']);
        computed['paddingRight'] = TStyle_Browser_Calculator.parseDimension(computed['paddingRight']);
        computed['paddingBottom'] = TStyle_Browser_Calculator.parseDimension(computed['paddingBottom']);
        computed['paddingTop'] = TStyle_Browser_Calculator.parseDimension(computed['paddingTop']);
        computed['marginLeft'] = TStyle_Browser_Calculator.parseDimension(computed['marginLeft']);
        computed['marginRight'] = TStyle_Browser_Calculator.parseDimension(computed['marginRight']);
        computed['marginBottom'] = TStyle_Browser_Calculator.parseDimension(computed['marginBottom']);
        computed['marginTop'] = TStyle_Browser_Calculator.parseDimension(computed['marginTop']);
        computed['fontSize'] = TStyle_Browser_Calculator.parseDimension(computed['fontSize']);
        computed['textAlign'] = ['left', 'right', 'center', 'justify', 'justified'].indexOf(computed['textAlign']) >= 0 ? computed['textAlign'] : null;
        if (computed['textAlign'] == 'justify') {
            computed['textAlign'] = 'justified';
        }
        computed['fontFamily'] = /^"(.*)"$/.test(computed['fontFamily']) ? computed['fontFamily'].substr(1, computed['fontFamily'].length - 2) : computed['fontFamily'];
        computed['fontFamily'] = /^'(.*)'$/.test(computed['fontFamily']) ? computed['fontFamily'].substr(1, computed['fontFamily'].length - 2) : computed['fontFamily'];
        if (computed['verticalAlign'] != 'sub' && computed['verticalAlign'] != 'super') {
            computed['verticalAlign'] = null;
        }
        else {
            if (computed['verticalAlign'] == 'super') {
                computed['verticalAlign'] = 'sup';
            }
        }
        if (TStyle.$FontFamily.indexOf(computed['fontFamily']) == -1) {
            computed['fontFamily'] = 'Times New Roman';
        }
        var computed1 = {};
        for (var k in computed) {
            if (computed[k]) {
                computed1[k] = computed[k];
            }
        }
        TStyle_Browser_Calculator.nativeNodes[nodeName] = computed1;
        document.body.removeChild(node);
    };
    TStyle_Browser_Calculator.initialize = function () {
        var nodes = HTML_Body.IMPLEMENTED_NODES, i = 0, len = nodes.length;
        for (i = 0; i < len; i++) {
            TStyle_Browser_Calculator.initializeNode(nodes[i]);
        }
    };
    TStyle_Browser_Calculator.applyDefaultStyles = function (node, fromNode, styleNames) {
        for (var i = 0, len = styleNames.length; i < len; i++) {
            if (TStyle_Browser_Calculator.nativeNodes[fromNode][styleNames[i]]) {
                node.style[styleNames[i]](TStyle_Browser_Calculator.nativeNodes[fromNode][styleNames[i]]);
            }
        }
    };
    TStyle_Browser_Calculator.nativeNodes = {};
    return TStyle_Browser_Calculator;
})();
window.addEventListener('load', function () {
    TStyle_Browser_Calculator.initialize();
}, true);
var TStyle_TableCell = (function (_super) {
    __extends(TStyle_TableCell, _super);
    function TStyle_TableCell(node) {
        _super.call(this, node);
        this.node = node;
    }
    // the padding of the table cell cannot be modified.
    TStyle_TableCell.prototype.paddingLeft = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            if (this.node.parentNode && this.node.parentNode.parentNode) {
                return this.node.parentNode.parentNode.cellPadding();
            }
            else {
                return 0;
            }
        }
        else
            return 0;
    };
    TStyle_TableCell.prototype.paddingTop = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            if (this.node.parentNode && this.node.parentNode.parentNode) {
                return this.node.parentNode.parentNode.cellPadding();
            }
            else {
                return 0;
            }
        }
        else
            return 0;
    };
    TStyle_TableCell.prototype.paddingRight = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            if (this.node.parentNode && this.node.parentNode.parentNode) {
                return this.node.parentNode.parentNode.cellPadding();
            }
            else {
                return 0;
            }
        }
        else
            return 0;
    };
    TStyle_TableCell.prototype.paddingBottom = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            if (this.node.parentNode && this.node.parentNode.parentNode) {
                return this.node.parentNode.parentNode.cellPadding();
            }
            else {
                return 0;
            }
        }
        else
            return 0;
    };
    // the margin of the table cell cannot be modified.
    TStyle_TableCell.prototype.marginLeft = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            if (this.node.parentNode && this.node.parentNode.parentNode) {
                return this.node.parentNode.parentNode.cellSpacing();
            }
            else {
                return 0;
            }
        }
        else
            return 0;
    };
    TStyle_TableCell.prototype.marginTop = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            if (this.node.parentNode && this.node.parentNode.parentNode) {
                return this.node.parentNode.parentNode.cellSpacing();
            }
            else {
                return 0;
            }
        }
        else
            return 0;
    };
    TStyle_TableCell.prototype.marginRight = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            if (this.node.parentNode && this.node.parentNode.parentNode) {
                return this.node.parentNode.parentNode.cellSpacing();
            }
            else {
                return 0;
            }
        }
        else
            return 0;
    };
    TStyle_TableCell.prototype.marginBottom = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            if (this.node.parentNode && this.node.parentNode.parentNode) {
                return this.node.parentNode.parentNode.cellSpacing();
            }
            else {
                return 0;
            }
        }
        else
            return 0;
    };
    // the border-width and border-color cannot be modified
    TStyle_TableCell.prototype.borderWidth = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            if (this.node.parentNode && this.node.parentNode.parentNode) {
                return this.node.parentNode.parentNode.border();
            }
            else {
                return 0;
            }
        }
        else
            return 0;
    };
    TStyle_TableCell.prototype.borderColor = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            if (this.node.parentNode && this.node.parentNode.parentNode) {
                return this.node.parentNode.parentNode.style.borderColor();
            }
            else
                return '';
        }
        else
            return '';
    };
    return TStyle_TableCell;
})(TStyle);
var TStyle_Property = (function () {
    function TStyle_Property(style, name) {
        this.style = style;
        this.name = name;
        // <constructor> public style: TStyle;
        // <constructor> public name: string;
        this.isSet = false;
        this.value = null;
    }
    TStyle_Property.prototype.get = function () {
        return this.isSet ? this.value : null;
    };
    TStyle_Property.prototype.set = function (v) {
        this.isSet = true;
        this.value = v;
    };
    TStyle_Property.prototype.copyTo = function (property) {
        property.value = this.value;
        property.isSet = this.isSet;
    };
    return TStyle_Property;
})();
var TStyle_PropertyInheritable = (function (_super) {
    __extends(TStyle_PropertyInheritable, _super);
    function TStyle_PropertyInheritable() {
        _super.apply(this, arguments);
    }
    TStyle_PropertyInheritable.prototype.get = function () {
        if (!this.isSet && this.style.node.parentNode) {
            return this.style.node.parentNode.style[this.name]();
        }
        else
            return _super.prototype.get.call(this);
    };
    return TStyle_PropertyInheritable;
})(TStyle_Property);
var TStyle_Dimension = (function (_super) {
    __extends(TStyle_Dimension, _super);
    function TStyle_Dimension() {
        _super.apply(this, arguments);
    }
    TStyle_Dimension.prototype.set = function (v) {
        var matches;
        if (!(matches = /^(\-)?([\d\.]+)(%)?$/.exec(v))) {
            console.warn("bad value for css style: " + this.name + " (" + JSON.stringify(v) + "). Unsetting...");
            this.isSet = false;
            this.value = null;
        }
        else {
            _super.prototype.set.call(this, v);
        }
    };
    TStyle_Dimension.prototype.get = function () {
        if (this.isSet) {
            if (/%$/.test(this.value)) {
                if (this.style.node.parentNode) {
                    // this is a percent value. we must obtain it from the parent node
                    var percent = parseFloat(this.value.substr(0, this.value.length - 1));
                    return (this.style.node.parentNode.style[this.name]() / 100) * percent;
                }
                else {
                    // is a percent, but don't have from where to inherit. return 0.
                    return 0;
                }
            }
            else {
                return parseFloat(this.value);
            }
        }
        else {
            // is not set.
            if ((this.name == 'width' && this.style._height.isSet || this.name == 'height' && this.style._width.isSet) && this.style._aspectRatio.isSet) {
                if (this.name == 'width') {
                    return this.style._height.get() * this.style._aspectRatio.get();
                }
                else {
                    return this.style._width.get() / this.style._aspectRatio.get();
                }
            }
            else if (this.style.node.parentNode && ['width', 'height', 'fontSize', 'lineHeight'].indexOf(this.name) >= 0) {
                return this.style.node.parentNode.style[this.name]();
            }
            else {
                return 0;
            }
        }
    };
    return TStyle_Dimension;
})(TStyle_Property);
var TStyle_String = (function (_super) {
    __extends(TStyle_String, _super);
    function TStyle_String(style, name, allowedOptions) {
        _super.call(this, style, name);
        this.style = style;
        this.name = name;
        this.allowedOptions = allowedOptions;
    }
    TStyle_String.prototype.get = function () {
        return this.isSet ? this.value : _super.prototype.get.call(this);
    };
    TStyle_String.prototype.set = function (v) {
        if (!v || this.allowedOptions.indexOf(v) == -1) {
            this.isSet = false;
            this.value = '';
        }
        else {
            this.value = v;
            this.isSet = true;
        }
    };
    return TStyle_String;
})(TStyle_PropertyInheritable);
var TStyle_Color = (function (_super) {
    __extends(TStyle_Color, _super);
    function TStyle_Color(style, name, allowInheritance) {
        _super.call(this, style, name);
        this.style = style;
        this.name = name;
        this.allowInheritance = allowInheritance;
    }
    TStyle_Color.prototype.get = function () {
        if (this.isSet) {
            return this.value;
        }
        else {
            if (this.allowInheritance) {
                return _super.prototype.get.call(this);
            }
            else {
                return '';
            }
        }
    };
    TStyle_Color.prototype.set = function (v) {
        v = String(v || '').toLowerCase();
        if (TStyle_Color.$NamedColors[v]) {
            this.isSet = true;
            this.value = TStyle_Color.$NamedColors[v];
            return;
        }
        if (/^#([a-f\d]{3}|[a-f\d]{6})$/.test(v)) {
            this.isSet = true;
            this.value = v;
            return;
        }
        this.isSet = false;
    };
    TStyle_Color.$NamedColors = {
        white: "#ffffff",
        ivory: "#fffff0",
        lightyellow: "#ffffe0",
        yellow: "#ffff00",
        snow: "#fffafa",
        floralwhite: "#fffaf0",
        lemonchiffon: "#fffacd",
        cornsilk: "#fff8dc",
        seashell: "#fff5ee",
        lavenderblush: "#fff0f5",
        papayawhip: "#ffefd5",
        blanchedalmond: "#ffebcd",
        mistyrose: "#ffe4e1",
        bisque: "#ffe4c4",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        peachpuff: "#ffdab9",
        gold: "#ffd700",
        pink: "#ffc0cb",
        lightpink: "#ffb6c1",
        orange: "#ffa500",
        lightsalmon: "#ffa07a",
        darkorange: "#ff8c00",
        coral: "#ff7f50",
        hotpink: "#ff69b4",
        tomato: "#ff6347",
        orangered: "#ff4500",
        deeppink: "#ff1493",
        fuchsia: "#ff00ff",
        magenta: "#ff00ff",
        red: "#ff0000",
        oldlace: "#fdf5e6",
        lightgoldenrodyellow: "#fafad2",
        linen: "#faf0e6",
        antiquewhite: "#faebd7",
        salmon: "#fa8072",
        ghostwhite: "#f8f8ff",
        mintcream: "#f5fffa",
        whitesmoke: "#f5f5f5",
        beige: "#f5f5dc",
        wheat: "#f5deb3",
        sandybrown: "#f4a460",
        azure: "#f0ffff",
        honeydew: "#f0fff0",
        aliceblue: "#f0f8ff",
        khaki: "#f0e68c",
        lightcoral: "#f08080",
        palegoldenrod: "#eee8aa",
        violet: "#ee82ee",
        darksalmon: "#e9967a",
        lavender: "#e6e6fa",
        lightcyan: "#e0ffff",
        burlywood: "#deb887",
        plum: "#dda0dd",
        gainsboro: "#dcdcdc",
        crimson: "#dc143c",
        palevioletred: "#db7093",
        goldenrod: "#daa520",
        orchid: "#da70d6",
        thistle: "#d8bfd8",
        lightgray: "#d3d3d3",
        tan: "#d2b48c",
        chocolate: "#d2691e",
        peru: "#cd853f",
        indianred: "#cd5c5c",
        mediumvioletred: "#c71585",
        silver: "#c0c0c0",
        darkkhaki: "#bdb76b",
        rosybrown: "#bc8f8f",
        mediumorchid: "#ba55d3",
        darkgoldenrod: "#b8860b",
        firebrick: "#b22222",
        powderblue: "#b0e0e6",
        lightsteelblue: "#b0c4de",
        paleturquoise: "#afeeee",
        greenyellow: "#adff2f",
        lightblue: "#add8e6",
        darkgray: "#a9a9a9",
        brown: "#a52a2a",
        sienna: "#a0522d",
        yellowgreen: "#9acd32",
        darkorchid: "#9932cc",
        palegreen: "#98fb98",
        darkviolet: "#9400d3",
        mediumpurple: "#9370db",
        lightgreen: "#90ee90",
        darkseagreen: "#8fbc8f",
        saddlebrown: "#8b4513",
        darkmagenta: "#8b008b",
        darkred: "#8b0000",
        blueviolet: "#8a2be2",
        lightskyblue: "#87cefa",
        skyblue: "#87ceeb",
        gray: "#808080",
        olive: "#808000",
        purple: "#800080",
        maroon: "#800000",
        aquamarine: "#7fffd4",
        chartreuse: "#7fff00",
        lawngreen: "#7cfc00",
        mediumslateblue: "#7b68ee",
        lightslategray: "#778899",
        slategray: "#708090",
        olivedrab: "#6b8e23",
        slateblue: "#6a5acd",
        dimgray: "#696969",
        mediumaquamarine: "#66cdaa",
        cornflowerblue: "#6495ed",
        cadetblue: "#5f9ea0",
        darkolivegreen: "#556b2f",
        indigo: "#4b0082",
        mediumturquoise: "#48d1cc",
        darkslateblue: "#483d8b",
        steelblue: "#4682b4",
        royalblue: "#4169e1",
        turquoise: "#40e0d0",
        mediumseagreen: "#3cb371",
        limegreen: "#32cd32",
        darkslategray: "#2f4f4f",
        seagreen: "#2e8b57",
        forestgreen: "#228b22",
        lightseagreen: "#20b2aa",
        dodgerblue: "#1e90ff",
        midnightblue: "#191970",
        aqua: "#00ffff",
        cyan: "#00ffff",
        springgreen: "#00ff7f",
        lime: "#00ff00",
        mediumspringgreen: "#00fa9a",
        darkturquoise: "#00ced1",
        deepskyblue: "#00bfff",
        darkcyan: "#008b8b",
        teal: "#008080",
        green: "#008000",
        darkgreen: "#006400",
        blue: "#0000ff",
        mediumblue: "#0000cd",
        darkblue: "#00008b",
        navy: "#000080",
        black: "#000000"
    };
    return TStyle_Color;
})(TStyle_PropertyInheritable);
var Character = (function () {
    function Character(node, index) {
        this.node = node;
        this.index = index;
        //public node: TElement_Text = null;      // the text node containing the character
        //public index: number;					// the index of the character in it's text node
        this.size = null;
        if (this.node.isBR) {
            this.isBR = true;
        }
    }
    Character.prototype.letter = function () {
        return this.node._text[this.index];
    };
    /* Compute the width of the character based on the
       style of the element which contains the text
       node */
    Character.prototype.computeSize = function () {
        if (this.size) {
            return this.size;
        }
        else {
            if (this.isBR) {
                return this.size = [0, (this.node && this.node.parentNode) ? this.node.parentNode.style.fontSize() : 0];
            }
            else {
                if (!this.node.parentNode) {
                    return (this.size = [0, 0]);
                }
                else {
                    var fontSize, font = (this.node.parentNode.style.fontStyle() == 'italic' ? 'italic ' : '') + (this.node.parentNode.style.fontWeight() == 'bold' ? 'bold ' : '') + (fontSize = this.node.parentNode.style.fontSize()) + 'px ' + this.node.parentNode.style.fontFamily(), lineHeight = fontSize * this.node.parentNode.style.lineHeight();
                    return (this.size = [Character_Metrics.measureCharWidth(font, this.letter()), lineHeight]);
                }
            }
        }
    };
    Character.prototype.fragmentPosition = function () {
        var i = 0, len = 0, out = this.node.FRAGMENT_START;
        for (i = 0, len = this.index; i < len; i++) {
            out++;
            if (this.node.EOL_POS && this.node.EOL_POS[i]) {
                out++;
            }
        }
        return out;
    };
    return Character;
})();
var Character_Metrics = (function () {
    function Character_Metrics() {
    }
    Character_Metrics.measureCharWidth = function (fontFamily, letter) {
        var self = Character_Metrics;
        if (!self.FontMap[fontFamily]) {
            self.FontMap[fontFamily] = {};
            self.ctx.font = fontFamily;
            self.FontMap[fontFamily][letter] = self.ctx.measureText(letter).width;
            return self.FontMap[fontFamily][letter];
        }
        else {
            if (!self.FontMap[fontFamily][letter]) {
                self.ctx.font = fontFamily;
                self.FontMap[fontFamily][letter] = self.ctx.measureText(letter).width;
            }
            return self.FontMap[fontFamily][letter];
        }
    };
    Character_Metrics.ctx = document.createElement('canvas').getContext('2d');
    Character_Metrics.FontMap = {};
    return Character_Metrics;
})();
var Character_Line = (function () {
    function Character_Line(maxWidth) {
        this.maxWidth = maxWidth;
        // <constructor> public maxWidth       : number = 0;     // physical width of the parent
        this.words = [];
        this.wordGap = 0.00;
        this.size = [0, 0]; // dimensions in pixels, [0]=>width, [1]=>height
        this.index = 0; // the line index
        this.owner = null; // initialized by creator
        this.fragmentIndexStart = null;
        this.fragmentIndexEnd = null;
    }
    // a line accepts a word either:
    // - if the line contains no words
    // - if the line width + the word width is smaller the the line max allowed physicalWidth
    Character_Line.prototype.acceptWord = function (w) {
        if (this.words.length && w.isBR) {
            return false;
        }
        else {
            return !!!(this.words[0]) || (this.size[0] + w.computeSize()[0] < this.maxWidth);
        }
    };
    Character_Line.prototype.addWord = function (w) {
        var size = w.computeSize();
        this.words.push(w);
        this.size[0] += size[0];
        this.size[1] = Math.max(size[1], this.size[1]);
        this.wordGap = (this.words.length > 2 && !this.words[0].isBR) ? ((this.maxWidth - this.size[0]) / (this.words.length - 1)) : 0.00;
    };
    Character_Line.prototype.buildIndexes = function () {
        var c, nWords;
        if (nWords = this.words.length) {
            c = this.words[0].characters[0];
            this.fragmentIndexStart = c.fragmentPosition();
            c = this.words[nWords - 1].characters[this.words[nWords - 1].characters.length - 1];
            this.fragmentIndexEnd = c.fragmentPosition();
            // add a +1 if line has EOL
            if (c.node.EOL_POS && c.node.EOL_POS[c.index]) {
                this.fragmentIndexEnd++;
            }
        }
        else {
            this.fragmentIndexStart = null;
            this.fragmentIndexEnd = null;
        }
    };
    Character_Line.prototype.toString = function () {
        var i = 0, len = this.words.length, out = '';
        for (i = 0; i < len; i++) {
            out += this.words[i].toString();
        }
        return out;
    };
    Character_Line.prototype.getFragmentPositionByAbsoluteX = function (caretX) {
        var layout = this.owner, ownerNode = layout.ownerNode(), align = ownerNode.style.textAlign() || 'left', lineHeight = ownerNode.style.lineHeight() || 0, paintX = 0, paintY = 0, useWordGap = false, i = 0, len = 0, j = 0, n = 0, size = [0, 0], charIndex = 0, c;
        switch (align) {
            case 'justified':
                useWordGap = true;
            case 'left':
                paintX = layout.offsetLeft;
                break;
            case 'right':
                paintX = layout.offsetLeft + (this.maxWidth - this.size[0]);
                break;
            case 'center':
                paintX = layout.offsetLeft + ((this.maxWidth / 2) - (this.size[0] / 2));
                break;
        }
        if (caretX < paintX) {
            return this.fragmentIndexStart;
        }
        if (caretX > layout.offsetLeft + layout.offsetWidth) {
            return this.fragmentIndexEnd;
        }
        for (i = 0, len = this.words.length; i < len; i++) {
            for (j = 0, n = this.words[i].characters.length; j < n; j++) {
                c = this.words[i].characters[j];
                size = c.computeSize();
                paintX += size[0];
                if (paintX > caretX) {
                    return this.words[i].characters[j].fragmentPosition();
                }
                charIndex++;
            }
            if (useWordGap) {
                paintX += this.wordGap;
            }
        }
        return this.fragmentIndexEnd;
    };
    return Character_Line;
})();
var Character_Word = (function () {
    function Character_Word(characters) {
        this.characters = characters;
        //<constructor> public characters: Character[];
        this.size = null;
        if (this.characters[0].isBR) {
            this.isBR = true;
        }
    }
    Character_Word.prototype.computeSize = function () {
        var i, len, size = [0, 0], charSize;
        if (this.size) {
            return this.size;
        }
        else {
            for (i = 0, len = this.characters.length; i < len; i++) {
                charSize = this.characters[i].computeSize();
                size[0] += charSize[0];
                size[1] = Math.max(size[1], charSize[1]);
            }
            this.size = size;
            return size;
        }
    };
    Character_Word.prototype.toString = function () {
        var out = '';
        for (var i = 0, len = this.characters.length; i < len; i++) {
            out += this.characters[i].letter();
        }
        return out;
    };
    Character_Word.prototype.splitWordToFit = function (lineWidth) {
        var chars = [], ch, i = 0, len = this.characters.length, out = [], sum = 0, size = [];
        if (this.characters.length <= 1) {
            return [this];
        }
        else {
            for (i = 0; i < len; i++) {
                ch = this.characters[i];
                size = ch.computeSize();
                if (chars.length == 0) {
                    chars.push(ch);
                    sum += size[0];
                }
                else {
                    if (sum + size[0] <= lineWidth) {
                        chars.push(ch);
                        sum += size[0];
                    }
                    else {
                        out.push(new Character_Word(chars));
                        chars = [ch];
                        sum = size[0];
                    }
                }
            }
        }
        if (chars.length) {
            out.push(new Character_Word(chars));
        }
        return out;
    };
    return Character_Word;
})();
var Character_LinesCollection = (function () {
    function Character_LinesCollection() {
        this.count = 0;
        this.items = [];
    }
    Character_LinesCollection.prototype.reset = function () {
        var i = 0;
        for (i = 0; i < this.count; i++) {
            this.items[i] = null;
        }
        this.count = 0;
    };
    Character_LinesCollection.prototype.length = function () {
        return this.count;
    };
    Character_LinesCollection.prototype.add = function (line) {
        line.index = this.count;
        this.items[this.count] = line;
        this.count++;
        return line;
    };
    Character_LinesCollection.prototype.at = function (index) {
        if (!this.items[index]) {
            throw "ERR_INDEX_OUTSIDE_BOUNDS (" + index + ")";
        }
        if (this.items[index].fragmentIndexStart === null) {
            this.items[index].buildIndexes();
        }
        return this.items[index] || null;
    };
    return Character_LinesCollection;
})();
// the layout class is responsible to render elements on the canvas.
var Layout = (function () {
    function Layout() {
        this.offsetTop = 0;
        this.offsetLeft = 0;
        this.offsetWidth = 0;
        this.offsetHeight = 0;
        this.innerTop = 0;
        this.innerLeft = 0;
        this.innerWidth = 0;
        this.innerHeight = 0;
        this.parent = null;
        this.children = [];
        this.node = null;
        this.hasChars = false;
        this.isBuilt = false;
        this.siblingIndex = 0;
        this.layoutType = 'abstract';
    }
    Layout.prototype.buildAhead = function (layout) {
        if (layout === void 0) { layout = null; }
        throw "Abstract method";
    };
    /* Even if the layout has the node property set to null,
       as implemented on Layout_BlockChar, it is a child of a node
       in the upper layout logic. This function returns that node
    */
    Layout.prototype.ownerNode = function () {
        if (this.node === null) {
            if (this.parent) {
                return this.parent.ownerNode();
            }
            else
                return null;
        }
        else
            return this.node;
    };
    Layout.prototype.serialize = function (tabIndex) {
        if (tabIndex === void 0) { tabIndex = 0; }
        var tab = '', i = 0, len, out = [];
        for (i = 0, len = tabIndex * 4; i < len; i++) {
            tab += ' ';
        }
        out.push(tab + '<' + this.layoutType + (this.node ? ' of=' + this.node.nodeName + ' ' : ' shadow=' + this.ownerNode().nodeName + ' ') + ('offsetWidth=' + this.offsetWidth + ' offsetHeight=' + this.offsetHeight + ' offsetTop=' + this.offsetTop + ' offsetLeft=' + this.offsetLeft + ' innerWidth=' + this.innerWidth + ' innerHeight=' + this.innerHeight + ' innerTop=' + this.innerTop + ' innerLeft=' + this.innerLeft + ' ') + '>');
        if (this.children && (len = this.children.length)) {
            for (i = 0; i < len; i++) {
                out.push(this.children[i].serialize(tabIndex + 1));
            }
        }
        out.push(tab + '</' + this.layoutType + '>');
        return out.join('\n');
    };
    Layout.prototype.computeOffset = function (parentInnerOffsetLeft, parentInnerOffsetTop, parentInnerOffsetWidth) {
        if (parentInnerOffsetLeft === void 0) { parentInnerOffsetLeft = 0; }
        if (parentInnerOffsetTop === void 0) { parentInnerOffsetTop = 0; }
        if (parentInnerOffsetWidth === void 0) { parentInnerOffsetWidth = 0; }
        throw "Abstract method";
    };
    // sets the innerHeight of the block.
    // automatially increases the offset height if needed
    Layout.prototype.setInnerHeight = function (amount) {
        var diffInnerOuter = this.offsetHeight - this.innerHeight;
        this.innerHeight = amount;
        this.offsetHeight = this.innerHeight + diffInnerOuter;
    };
    Layout.prototype.setInnerHeightIfSmaller = function (amount) {
        if (amount < this.innerHeight) {
            this.setInnerHeight(amount);
        }
    };
    Layout.prototype.computeWidths = function (offsetLeftComputed) {
        if (offsetLeftComputed === void 0) { offsetLeftComputed = false; }
        // This is abstract.
        // DO NOT FORGET TO SET THE BODY _maxRightEdge
    };
    /* @input: top placement position
       @output: top placement position */
    Layout.prototype.computeHeights = function (topPlacement, indent) {
        if (indent === void 0) { indent = 0; }
        throw "Abstract method!";
    };
    Layout.prototype.tab = function (num) {
        var out = '', i = 0;
        for (i = 0; i < num * 4; i++) {
            out += ' ';
        }
        return out;
    };
    Layout.prototype.isPaintable = function (viewport) {
        var x1 = this.offsetLeft, y1 = this.offsetTop, x2 = this.offsetLeft + this.offsetWidth, y2 = this.offsetTop + this.offsetHeight, xx1 = viewport.scrollLeft(), yy1 = viewport.scrollTop(), xx2 = viewport.scrollLeft() + viewport.width() - viewport._scrollbarSize, yy2 = viewport.scrollTop() + viewport.height() - viewport._scrollbarSize;
        return (x2 <= xx1 || x1 >= xx2 || y2 <= yy1 || y1 >= yy2) ? false : true;
    };
    Layout.prototype.increaseYBy = function (pixels) {
        this.offsetTop += pixels;
        this.innerTop += pixels;
        if (this.children && this.children.length) {
            for (var i = 0, len = this.children.length; i < len; i++)
                this.children[i].increaseYBy(pixels);
        }
    };
    Layout.prototype.increaseHeightBy = function (pixels) {
        this.offsetHeight += pixels;
        this.innerHeight += pixels;
    };
    // paints the node, and after that paints it's sub-children
    Layout.prototype.paint = function (ctx, scrollLeft, scrollTop, viewport) {
        if (!this.isPaintable(viewport) || this.offsetWidth <= 0) {
            return;
        }
        if (this.node) {
            this.node.paint(ctx, this, scrollLeft, scrollTop);
        }
        if (this.children) {
            for (var i = 0, len = this.children.length; i < len; i++) {
                this.children[i].paint(ctx, scrollLeft, scrollTop, viewport);
            }
        }
    };
    Object.defineProperty(Layout.prototype, "offsetTopOuter", {
        get: function () {
            if (this.node) {
                return this.offsetTop - this.node.style.marginTop();
            }
            else {
                return this.offsetTop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layout.prototype, "offsetLeftOuter", {
        get: function () {
            if (this.node) {
                return this.offsetLeft - this.node.style.marginLeft();
            }
            else {
                return this.offsetLeft;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layout.prototype, "offsetWidthOuter", {
        get: function () {
            if (this.node) {
                return this.offsetWidth + this.node.style.marginLeft() + this.node.style.marginRight();
            }
            else {
                return this.offsetWidth;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layout.prototype, "offsetHeightOuter", {
        get: function () {
            if (this.node) {
                return this.offsetHeight + this.node.style.marginTop() + this.node.style.marginBottom();
            }
            else {
                return this.offsetHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    /* Note that the user should use only the first argument,
       the rest of arguments are internally used.
     */
    Layout.prototype.getTargetAtXY = function (point, boundsChecking, parentTarget) {
        if (boundsChecking === void 0) { boundsChecking = true; }
        if (parentTarget === void 0) { parentTarget = null; }
        if (point.y < this.offsetTopOuter || (point.y > (this.offsetTopOuter + this.offsetHeightOuter) && boundsChecking) || point.x < (this.offsetLeftOuter) || (point.x > (this.offsetLeftOuter + this.offsetWidthOuter) && boundsChecking))
            return null; // click outside the layout.
        var node = this.ownerNode(), bestTarget = new TRange_Target(node, node.FRAGMENT_START), childTarget, i, len, lines;
        if (this.children && this.children.length) {
            for (i = this.children.length - 1; i >= 0; i--) {
                childTarget = this.children[i].getTargetAtXY(point, true, bestTarget);
                if (childTarget !== null) {
                    return childTarget;
                }
            }
        }
        return bestTarget;
    };
    return Layout;
})();
var Layout_Horizontal = (function (_super) {
    __extends(Layout_Horizontal, _super);
    function Layout_Horizontal(node, children) {
        _super.call(this);
        this.layoutType = 'horizontal';
        this.node = node;
        this.children = children;
        for (var i = 0, len = this.children.length; i < len; i++) {
            this.children[i].parent = this;
            this.children[i].siblingIndex = i;
        }
    }
    Layout_Horizontal.prototype.buildAhead = function (layout) {
        if (layout === void 0) { layout = null; }
        var i, len;
        if (!this.isBuilt) {
            for (var i = 0, len = this.children.length; i < len; i++) {
                this.children[i].buildAhead(this);
            }
            this.isBuilt = true;
        }
    };
    Layout_Horizontal.prototype.getCellWidth = function (cellIndex) {
        var width = 0, i = 0, len = 0;
        if (this.children[cellIndex] && this.children[cellIndex].children) {
            for (i = 0, len = this.children[cellIndex].children.length; i < len; i++) {
                if (!this.children[cellIndex].children[i].node) {
                    return null;
                }
                else {
                    width += (this.children[cellIndex].children[i].node.style.offsetWidth() + this.children[cellIndex].children[i].node.style.marginLeft() + this.children[cellIndex].children[i].node.style.marginRight());
                }
            }
        }
        return width;
    };
    Layout_Horizontal.prototype.computeWidths = function () {
        /* on horizontal layouts, we set the widths for the layouts which have nodes.
           the rest of the widths is computed as the average undefined widths */
        var widthLeft = this.innerWidth, computeAfter = [], leftPosition = this.innerLeft, i = 0, len = this.children.length, averageWidth = 0, sumWidths = 0, optimalWidth = 0, tabSize = (this.children && len && this.children[0].node && this.children[0].node.documentElement) ? this.children[0].node.documentElement.tabSize() : 0;
        for (i = 0; i < len; i++) {
            if (this.children[i].node) {
                // the child has a node associated.
                // if the node has a width, we set it's width as the
                // node width, otherwise we set it's width automatically
                if (this.children[i].node.style._width.isSet) {
                    this.children[i].offsetWidth = this.children[i].node.style.width() + (this.children[i].node.style.borderWidth() * 2) + this.children[i].node.style.paddingLeft() + this.children[i].node.style.paddingRight() + (this.children[i].node.tabStop() * tabSize);
                    sumWidths += this.children[i].offsetWidth;
                }
                else {
                    computeAfter.push(this.children[i]);
                }
                sumWidths += (this.children[i].node.style.marginLeft() + this.children[i].node.style.marginRight());
            }
            else {
                optimalWidth = this.getCellWidth(i);
                if (optimalWidth === null) {
                    computeAfter.push(this.children[i]);
                }
                else {
                    sumWidths += optimalWidth;
                    this.children[i].offsetWidth = optimalWidth;
                }
            }
        }
        averageWidth = (this.innerWidth - sumWidths) / computeAfter.length;
        for (i = 0, len = computeAfter.length; i < len; i++) {
            computeAfter[i].offsetWidth = averageWidth;
        }
        leftPosition = this.innerLeft;
        for (i = 0, len = this.children.length; i < len; i++) {
            if (this.children[i].node) {
                leftPosition += this.children[i].node.style.marginLeft();
                this.children[i].offsetLeft = leftPosition;
                this.children[i].innerLeft = this.children[i].offsetLeft + this.children[i].node.style.paddingLeft() + (this.children[i].node.tabStop() * tabSize) + this.children[i].node.style.borderWidth();
                this.children[i].innerWidth = this.children[i].offsetWidth - (this.children[i].node.style.borderWidth() * 2) - this.children[i].node.style.paddingLeft() - (this.children[i].node.tabStop() * tabSize) - this.children[i].node.style.paddingRight();
                leftPosition += this.children[i].node.style.marginRight();
            }
            else {
                this.children[i].offsetLeft = leftPosition;
                this.children[i].innerLeft = this.children[i].offsetLeft;
                this.children[i].innerWidth = this.children[i].offsetWidth;
            }
            leftPosition += this.children[i].offsetWidth;
        }
        for (i = 0, len = this.children.length; i < len; i++) {
            this.children[i].computeWidths(true);
        }
        if (this.node) {
            this.node.documentElement.setMaxRightEdgeUsingLayout(this);
        }
    };
    Layout_Horizontal.prototype.computeHeights = function (topPlacement, indent) {
        if (indent === void 0) { indent = 0; }
        var topPlacementBegin = topPlacement, contentHeight = 0, topPlacementMax = 0, i = 0, len;
        this.offsetHeight = 0;
        this.innerHeight = 0;
        if (this.node) {
            topPlacement += this.node.style.marginTop();
            this.offsetHeight += (this.node.style.borderWidth() + this.node.style.paddingTop());
            this.offsetTop = topPlacement;
            this.innerTop = topPlacement + this.offsetHeight;
            topPlacement += this.node.style.borderWidth() + this.node.style.paddingTop();
        }
        else {
            this.offsetTop = topPlacement;
            this.innerTop = topPlacement;
        }
        topPlacementMax = topPlacement;
        if (this.children && (len = this.children.length)) {
            for (i = 0; i < len; i++) {
                topPlacementMax = Math.max(topPlacementMax, this.children[i].computeHeights(topPlacement - (this.children[i].node ? this.children[i].node.style.marginTop() : 0), indent + 1) - (this.children[i].node ? this.children[i].node.style.marginBottom() : 0));
            }
            contentHeight = topPlacementMax - topPlacement;
        }
        this.innerHeight = contentHeight;
        this.offsetHeight += this.innerHeight;
        topPlacement += this.innerHeight;
        if (this.node) {
            topPlacement += (this.node.style.paddingBottom() + this.node.style.borderWidth() + this.node.style.marginBottom());
            this.offsetHeight += this.node.style.paddingBottom() + this.node.style.borderWidth();
        }
        return topPlacement;
    };
    return Layout_Horizontal;
})(Layout);
var Layout_Vertical = (function (_super) {
    __extends(Layout_Vertical, _super);
    function Layout_Vertical(node, children) {
        _super.call(this);
        this.layoutType = 'vertical';
        this.node = node;
        this.children = children;
        for (var i = 0, len = this.children.length; i < len; i++) {
            this.children[i].parent = this;
            this.children[i].siblingIndex = i;
        }
    }
    Layout_Vertical.prototype.buildAhead = function (layout) {
        if (layout === void 0) { layout = null; }
        var i, len;
        if (!this.isBuilt) {
            for (var i = 0, len = this.children.length; i < len; i++) {
                this.children[i].buildAhead(this);
            }
            this.isBuilt = true;
        }
    };
    Layout_Vertical.prototype.computeWidths = function (offsetLeftComputed) {
        if (offsetLeftComputed === void 0) { offsetLeftComputed = false; }
        var i = 0, len = this.children.length, tabSize = (this.children && len && this.children[0].node && this.children[0].node.documentElement) ? this.children[0].node.documentElement.tabSize() : 0, floatVal, needAdd;
        for (i = 0; i < len; i++) {
            if (this.children[i].node) {
                // the child is represented by a node
                // compute offsetleft and innerLeft
                this.children[i].offsetLeft = this.innerLeft + this.children[i].node.style.marginLeft() - this.children[i].node.style.borderWidth();
                // if the child has a specified width, set the width to the layout,
                // otherwise determine it's width by this parent
                if (this.children[i].node.style._width.isSet) {
                    this.children[i].innerWidth = this.children[i].node.style.width();
                    this.children[i].offsetWidth = this.children[i].node.style.offsetWidth();
                }
                else {
                    this.children[i].innerWidth = this.innerWidth - (this.children[i].node.style.borderWidth() * 2) - this.children[i].node.style.paddingLeft() - (this.children[i].node.tabStop() * tabSize) - this.children[i].node.style.paddingRight() - this.children[i].node.style.marginLeft() - this.children[i].node.style.marginRight();
                    this.children[i].offsetWidth = this.children[i].innerWidth + this.children[i].node.style.paddingLeft() + (this.children[i].node.tabStop() * tabSize) + this.children[i].node.style.paddingRight() + (this.children[i].node.style.borderWidth() * 2);
                }
                /* If the child node has a "float=left|right" style property, align
                   the node properly */
                if (['right', 'center'].indexOf(floatVal = this.children[i].node.style.float()) >= 0) {
                    switch (floatVal) {
                        case 'right':
                            this.children[i].offsetLeft = this.innerLeft + this.innerWidth - this.children[i].node.style.marginRight() - this.children[i].node.style.borderWidth() * 2 - this.children[i].node.style.paddingLeft() - this.children[i].node.style.paddingRight() - this.children[i].offsetWidth;
                            break;
                        case 'center':
                            this.children[i].offsetLeft = this.innerLeft + (this.innerWidth / 2) - ((this.children[i].node.style.marginRight() + this.children[i].node.style.borderWidth() * 2 + this.children[i].node.style.paddingLeft() + this.children[i].node.style.paddingRight() + this.children[i].offsetWidth) / 2);
                            break;
                    }
                }
                if (this.children[i].offsetLeft < this.innerLeft) {
                    this.children[i].offsetLeft = this.innerLeft;
                }
                this.children[i].innerLeft = this.children[i].offsetLeft + this.children[i].node.style.borderWidth() + (this.children[i].node.style.paddingLeft() + this.children[i].node.tabStop() * tabSize);
            }
            else {
                // the child is not represented by a node, so it doesn't have padding, margin, etc
                this.children[i].offsetLeft = this.children[i].innerLeft = this.innerLeft;
                this.children[i].offsetWidth = this.children[i].innerWidth = this.innerWidth;
            }
            this.children[i].computeWidths(true);
        }
        if (this.node) {
            this.node.documentElement.setMaxRightEdgeUsingLayout(this);
        }
    };
    Layout_Vertical.prototype.computeHeights = function (topPlacement, indent) {
        if (indent === void 0) { indent = 0; }
        var contentHeight = 0, i = 0, len = 0, addHeight = 0, nodeStyleMarginTop = 0, nodeStyleMarginBottom = 0, nodeStyleBorderWidth = 0, nodeStylePaddingTop = 0, nodeStylePaddingBottom = 0;
        this.offsetHeight = 0;
        if (this.node) {
            nodeStyleMarginTop = this.node.style.marginTop();
            nodeStyleMarginBottom = this.node.style.marginBottom();
            nodeStyleBorderWidth = this.node.style.borderWidth();
            nodeStylePaddingTop = this.node.style.paddingTop();
            nodeStylePaddingBottom = this.node.style.paddingBottom();
            topPlacement += nodeStyleMarginTop;
            this.offsetTop = topPlacement;
            topPlacement += (this.offsetHeight = nodeStylePaddingTop + nodeStyleBorderWidth);
            this.innerTop = topPlacement;
        }
        else {
            this.offsetTop = topPlacement;
            this.innerTop = topPlacement;
        }
        if (this.children && (len = this.children.length)) {
            for (i = 0; i < len; i++) {
                addHeight = (this.children[i].computeHeights(topPlacement, indent + 1) - topPlacement);
                contentHeight += addHeight;
                topPlacement += addHeight;
                this.offsetHeight += addHeight;
            }
        }
        this.innerHeight = contentHeight;
        if (this.node) {
            this.offsetHeight += nodeStylePaddingBottom + nodeStyleBorderWidth;
            topPlacement += nodeStylePaddingBottom + nodeStyleBorderWidth + nodeStyleMarginBottom;
        }
        return topPlacement;
    };
    return Layout_Vertical;
})(Layout);
var Layout_Block = (function (_super) {
    __extends(Layout_Block, _super);
    function Layout_Block(element) {
        _super.call(this);
        this.children = null;
        this.layoutType = 'block';
        this.node = element;
    }
    Layout_Block.prototype.buildAhead = function (layout) {
        if (layout === void 0) { layout = null; }
        var i, len, replaceLayout;
        if (!this.isBuilt) {
            // console.log( 'build ahead: block layout for ' + this.node.nodeName );
            if (this.node) {
                if (this.node.childNodes && this.node.childNodes.length) {
                    if (!this.parent) {
                        throw "unhandled scenario";
                    }
                    // console.log( 'replace layout @index: ' + this.siblingIndex );
                    replaceLayout = this.node.createLayout(this.parent);
                    this.parent.children[this.siblingIndex] = this.node.createLayout(this.parent);
                    this.parent.children[this.siblingIndex].node = this.node;
                }
            }
            else {
                throw "Unhandled scenario.";
            }
            this.isBuilt = true;
        }
    };
    Layout_Block.prototype.computeWidths = function (offsetLeftComputed) {
        if (offsetLeftComputed === void 0) { offsetLeftComputed = false; }
        if (this.node) {
            if (!offsetLeftComputed)
                this.offsetLeft += this.node.style.marginLeft();
            this.node.documentElement.setMaxRightEdgeUsingLayout(this);
        }
        else {
            throw "Unhandled scenario while computing widths!";
        }
    };
    Layout_Block.prototype.computeHeights = function (topPlacement, indent) {
        if (indent === void 0) { indent = 0; }
        var contentHeight = 0, topPlacementBegin = topPlacement, add = 0;
        if (this.node) {
            topPlacement += this.node.style.marginTop();
            this.offsetTop = topPlacement;
            this.innerTop = this.offsetTop + this.node.style.paddingTop() + this.node.style.borderWidth();
            contentHeight = this.node.style.height();
        }
        else {
            throw "invalid block scenario";
        }
        if (this.children && this.children.length) {
            throw "unexpected children!";
        }
        if (this.node && this.node.isOrphanElement()) {
            add = (this.node.style.fontSize() * this.node.style.lineHeight());
            contentHeight += add;
        }
        // a block Node doesn't contain children anymore...
        topPlacement += contentHeight;
        this.innerHeight = contentHeight;
        this.offsetHeight = contentHeight;
        if (this.node) {
            this.offsetHeight += (this.node.style.paddingBottom() + (2 * this.node.style.borderWidth()));
            topPlacement += (this.node.style.paddingBottom() + (2 * this.node.style.borderWidth()) + this.node.style.marginBottom());
        }
        else {
            throw "invalid block scenario";
        }
        return topPlacement;
    };
    return Layout_Block;
})(Layout);
var Layout_BlockChar = (function (_super) {
    __extends(Layout_BlockChar, _super);
    function Layout_BlockChar() {
        _super.apply(this, arguments);
        this.chars = [];
        this.children = null;
        this.hasChars = true;
        this.layoutType = 'text';
        this.lines = [];
        this.lineIndexStart = 0;
    }
    Layout_BlockChar.prototype.addTextNode = function (node) {
        node.EOL_POS = null;
        for (var i = 0, len = node._text.length; i < len; i++) {
            this.chars.push(new Character(node, i));
        }
    };
    // the blockchar layout doesn't contain any sub-layouts, so
    // no building is needed
    Layout_BlockChar.prototype.buildAhead = function () {
        if (!this.isBuilt) {
            this.isBuilt = true;
        }
    };
    // routine to build the lines of the block.
    // it takes in consideration the words, etc.
    Layout_BlockChar.prototype.buildLines = function (lineWidthInPixels) {
        var contents = this.textContents(), contentsWithWords = contents.replace(/([\S]+)([\s]+)?/g, '$1$2|'), len = contentsWithWords.length, word = [], words = [], line, ownerNode = this.ownerNode(), i = 0, j = 0, n = 0, w, c, chIndex = 0, size, mwords;
        for (i = 0; i < len; i++) {
            if (contentsWithWords[i] == contents[j]) {
                // if we find a break character, we create a new word.
                if (this.chars[j].isBR) {
                    if (word.length) {
                        words.push(new Character_Word(word));
                    }
                    word = [this.chars[j]];
                }
                else {
                    word.push(this.chars[j]);
                }
                j++;
            }
            else {
                if (word.length) {
                    words.push(new Character_Word(word));
                    word = [];
                }
            }
        }
        if (word.length) {
            words.push(new Character_Word(word));
        }
        for (len = words.length - 1, i = len; i >= 0; i--) {
            size = words[i].computeSize();
            if (size[0] > lineWidthInPixels) {
                mwords = words[i].splitWordToFit(lineWidthInPixels);
                mwords.splice(0, 0, i, 1);
                Array.prototype.splice.apply(words, mwords);
            }
        }
        this.lines = [];
        if (!words.length)
            return;
        line = new Character_Line(lineWidthInPixels);
        for (i = 0, len = words.length; i < len; i++) {
            if (line.acceptWord(words[i])) {
                line.addWord(words[i]);
            }
            else {
                this.lines.push(line);
                line = new Character_Line(lineWidthInPixels);
                line.addWord(words[i]);
            }
        }
        if (line.words.length)
            this.lines.push(line);
        this.lineIndexStart = ownerNode.documentElement.lines.length();
        for (i = 0, len = this.lines.length; i < len; i++) {
            this.lines[i].size[1] *= ownerNode.style.lineHeight();
            if ((n = this.lines[i].words.length)) {
                w = this.lines[i].words[n - 1];
                if ((n = w.characters.length)) {
                    c = w.characters[n - 1];
                    c.node.EOL_POS = c.node.EOL_POS || {};
                    c.node.EOL_POS[c.index] = 1;
                }
            }
            this.lines[i].owner = this;
            ownerNode.documentElement.lines.add(this.lines[i]);
        }
        return this.lines;
    };
    // returns the text contents of block
    Layout_BlockChar.prototype.textContents = function () {
        var out = '', i = 0, len = 0;
        for (var i = 0, len = this.chars.length; i < len; i++) {
            out += this.chars[i].letter();
        }
        return out;
    };
    Layout_BlockChar.prototype.serialize = function (tabIndex) {
        if (tabIndex === void 0) { tabIndex = 0; }
        var out = _super.prototype.serialize.call(this, tabIndex).split('\n');
        return out[0] + this.textContents() + '</text>';
    };
    Layout_BlockChar.prototype.computeWidths = function (offsetLeftComputed) {
        if (offsetLeftComputed === void 0) { offsetLeftComputed = false; }
        this.buildLines(this.innerWidth);
    };
    Layout_BlockChar.prototype.computeHeights = function (topPlacement, indent) {
        if (indent === void 0) { indent = 0; }
        this.offsetTop = this.innerTop = topPlacement;
        this.offsetHeight = this.innerHeight = 0;
        for (var i = 0, len = this.lines.length; i < len; i++) {
            topPlacement += this.lines[i].size[1];
            //console.log( this.tab( indent ) + 'added line height: ' + this.lines[i].size[1], this.lines[i] );
            this.offsetHeight += this.lines[i].size[1];
            this.innerHeight = this.offsetHeight;
        }
        return topPlacement;
    };
    Layout_BlockChar.prototype.paintCaret = function (ctx, x, y, height, scrollLeft, scrollTop) {
        ctx.save();
        ctx.fillStyle = '#000';
        ctx.fillRect(~~(Math.min(this.offsetLeft + this.offsetWidth, x - .5)), ~~(y + 1), 2, (height + 2) * 1.12);
        ctx.restore();
    };
    Layout_BlockChar.prototype.paint = function (ctx, scrollLeft, scrollTop, viewport) {
        if (!this.isPaintable(viewport)) {
            return;
        }
        var i = 0, len = 0, node = this.ownerNode(), align = node.style.textAlign(), j = 0, n = 0, k = 0, l = 0, wordGap = (align == 'justified'), lineHeight = node.style.lineHeight(), lineDiff = 0, startY = this.offsetTop - scrollTop, startX = this.offsetLeft, currentNode = null, isUnderline = false, isStrike = false, underlineWidth = 0.00, size, valign = 'normal', valignShift = 0, fragPos = 0, lastTextNode = null, range = node.documentElement.viewport.selection.getRange(), caret = range.focusNode(), saveColor = '', isPaintedSelected = node.isPaintedSelected, textDecoration;
        ctx.save();
        ctx.beginPath();
        ctx.rect(this.offsetLeft - scrollLeft - 1, this.offsetTop - scrollTop, this.offsetWidth + 2, this.offsetHeight);
        ctx.clip();
        ctx.closePath();
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';
        for (i = 0, len = this.lines.length; i < len; i++) {
            lineDiff = this.lines[i].size[1] / lineHeight;
            switch (align) {
                case 'right':
                    startX = this.offsetLeft + this.offsetWidth - (this.lines[i].size[0]);
                    break;
                case 'center':
                    startX = this.offsetLeft + (this.offsetWidth / 2) - (this.lines[i].size[0] / 2);
                    break;
                case 'justified':
                    startX = this.offsetLeft;
                    break;
                default:
                    startX = this.offsetLeft;
                    break;
            }
            startX -= scrollLeft;
            for (j = 0, n = this.lines[i].words.length; j < n; j++) {
                for (k = 0, l = this.lines[i].words[j].characters.length; k < l; k++) {
                    if (lastTextNode != this.lines[i].words[j].characters[k].node) {
                        lastTextNode = this.lines[i].words[j].characters[k].node;
                        fragPos = lastTextNode.FRAGMENT_START;
                    }
                    // recompute text drawing settings each time the parentNode of the text node changes.
                    if (currentNode != this.lines[i].words[j].characters[k].node.parentNode) {
                        currentNode = this.lines[i].words[j].characters[k].node.parentNode;
                        ctx.font = currentNode.style.fontStyleText();
                        ctx.fillStyle = isPaintedSelected ? 'white' : (saveColor = currentNode.style.color());
                        textDecoration = currentNode.style.textDecoration();
                        isUnderline = textDecoration == 'underline';
                        isStrike = textDecoration == 'line-through';
                        valign = currentNode.style.verticalAlign();
                        if (isUnderline || isStrike) {
                            underlineWidth = ~~(currentNode.style.fontSize() * .1);
                            if (underlineWidth < 1) {
                                underlineWidth = 1;
                            }
                        }
                        switch (valign) {
                            case 'super':
                                valignShift = this.lines[i].size[1] * -.2;
                                break;
                            case 'sub':
                                valignShift = this.lines[i].size[1] * .1;
                                break;
                            default:
                                valignShift = 0;
                                break;
                        }
                    }
                    size = this.lines[i].words[j].characters[k].computeSize();
                    if (caret && range.contains(fragPos) && !isPaintedSelected) {
                        ctx.fillStyle = DocSelection.$Colors.focus;
                        ctx.fillRect(startX, ~~startY + 1, size[0] + (wordGap && (k == l - 1) && (i < len - 1) ? this.lines[i].wordGap : 0) + .5, ~~this.lines[i].size[1] + 1);
                        ctx.fillStyle = 'white';
                        ctx.fillText(this.lines[i].words[j].characters[k].letter(), startX, startY + lineDiff + valignShift);
                        if (isUnderline) {
                            ctx.fillRect(startX, ~~((startY + lineDiff) + 2 + valignShift), size[0] + (wordGap && (k == l - 1) && (i < len - 1) ? this.lines[i].wordGap : 0), underlineWidth);
                        }
                        else if (isStrike) {
                            ctx.fillRect(startX, ~~((startY + (lineDiff / 1.3)) + valignShift), size[0] + (wordGap && (k == l - 1) && (i < len - 1) ? this.lines[i].wordGap : 0), underlineWidth);
                        }
                        ctx.fillStyle = saveColor;
                    }
                    else {
                        ctx.fillText(this.lines[i].words[j].characters[k].letter(), startX, startY + lineDiff + valignShift);
                        if (isUnderline) {
                            ctx.fillRect(startX, ~~((startY + lineDiff) + 2 + valignShift), size[0] + (wordGap && (k == l - 1) && (i < len - 1) ? this.lines[i].wordGap : 0), underlineWidth);
                        }
                        else if (isStrike) {
                            ctx.fillRect(startX, ~~((startY + (lineDiff / 1.3)) + valignShift), size[0] + (wordGap && (k == l - 1) && (i < len - 1) ? this.lines[i].wordGap : 0), underlineWidth);
                        }
                    }
                    if (caret && caret.fragPos == fragPos) {
                        //paint caret @ this pos
                        this.paintCaret(ctx, startX, startY, lineDiff, scrollLeft, scrollTop);
                    }
                    startX += size[0];
                    fragPos++; // reached end of character, increment the fragment position
                }
                if (wordGap && (i < len - 1)) {
                    startX += this.lines[i].wordGap;
                }
            }
            if (caret && caret.fragPos == fragPos) {
                // paint caret @ this pos
                this.paintCaret(ctx, startX, startY, lineDiff, scrollLeft, scrollTop);
            }
            startY += this.lines[i].size[1];
            fragPos++; // reached end of line, increment the fragment position
        }
        ctx.restore();
    };
    /* Note that the user should use only the first argument,
       the rest of arguments are internally used.
     */
    Layout_BlockChar.prototype.getTargetAtXY = function (point, boundsChecking, parentTarget) {
        if (boundsChecking === void 0) { boundsChecking = true; }
        if (parentTarget === void 0) { parentTarget = null; }
        var target = _super.prototype.getTargetAtXY.call(this, point, false) || parentTarget, i = 0, len = 0, j = 0, n = 0, line = 0, lines = 0, bestLine = null, bestLineIndex = 0, startX = 0, startY = 0, bestCharLineIndex = 0, bestCharTargetIndex = 0, bestNode, align, wordGap = false, size, breakFor = false, relative, w, isLastLine = false, parentHasOtherBlockCharsBeforeMyself = false;
        if (this.parent) {
            for (i = 0, len = this.parent.children.length; i < len; i++) {
                if (this.parent.children[i] == this) {
                    for (j = i - 1; j >= 0; j--) {
                        if (this.parent.children[j].layoutType == 'text') {
                            parentHasOtherBlockCharsBeforeMyself = true;
                            break;
                        }
                    }
                    break;
                }
            }
            if (parentHasOtherBlockCharsBeforeMyself && point.y < this.offsetTop) {
                return null;
            }
        }
        if (target !== null) {
            relative = {
                "x": point.x - this.offsetLeft,
                "y": point.y - this.offsetTop
            };
            bestCharTargetIndex = target.fragPos;
            for (line = 0, lines = this.lines.length; line < lines; line++) {
                if (relative.y >= startY || (line == 0 && !parentHasOtherBlockCharsBeforeMyself)) {
                    bestLine = this.lines[line];
                    bestLineIndex = line;
                    isLastLine = line == lines - 1;
                }
                else {
                    break;
                }
                startY += this.lines[line].size[1];
            }
            if (bestLine !== null) {
                align = target.target.style.textAlign();
                wordGap = align == 'justified' && !isLastLine;
                switch (align) {
                    case 'right':
                        startX = this.offsetLeft + this.offsetWidth - bestLine.size[0];
                        break;
                    case 'center':
                        startX = this.offsetLeft + (this.offsetWidth / 2) - (bestLine.size[0] / 2);
                        break;
                    default:
                        startX = this.offsetLeft;
                        break;
                }
                for (i = 0, len = bestLine.words.length; i < len; i++) {
                    for (j = 0, n = bestLine.words[i].characters.length; j < n; j++) {
                        size = bestLine.words[i].characters[j].computeSize();
                        if (wordGap && j == n - 1) {
                            w = size[0] + bestLine.wordGap;
                        }
                        else {
                            w = size[0];
                        }
                        if (((w / 2) + startX < point.x)) {
                            bestCharLineIndex++;
                            bestNode = bestLine.words[i].characters[j].node;
                            bestCharTargetIndex = bestLine.words[i].characters[j].fragmentPosition() + 1;
                            startX += w;
                        }
                        else {
                            bestNode = bestLine.words[i].characters[j].node;
                            bestCharTargetIndex = bestLine.words[i].characters[j].fragmentPosition();
                            breakFor = true;
                            break;
                        }
                    }
                    if (breakFor)
                        break;
                }
                target.target = bestNode;
                target.fragPos = bestCharTargetIndex;
                return target;
            }
            else
                return target;
        }
        else
            return null;
    };
    return Layout_BlockChar;
})(Layout);
var Layout_Block_Table = (function (_super) {
    __extends(Layout_Block_Table, _super);
    function Layout_Block_Table(element, matrix) {
        _super.call(this, element);
        this.matrix = matrix;
        this.children = null;
        this.layoutType = 'table';
        this.node = element;
        this.children = [];
        for (var i = 0, len = this.matrix.cellsArray.length; i < len; i++) {
            this.children.push(this.matrix.cellsArray[i].createLayout(this));
        }
    }
    Layout_Block_Table.prototype.computeWidths = function (offsetLeftComputed) {
        if (offsetLeftComputed === void 0) { offsetLeftComputed = false; }
        var i = 0, len = 0, table = this.node, node, totalCellsInnerWidths = 0, borderWidth = table.border() || 1, cellSpacing = table.cellSpacing(), cellPadding = table.cellPadding();
        this.offsetLeft += table.style.marginLeft();
        this.innerLeft = this.offsetLeft + table.style.borderWidth() + table.style.paddingLeft();
        this.matrix.xEdges.resetSizes();
        for (i = 0, len = this.matrix.cellsArray.length; i < len; i++) {
            if (this.matrix.cellsArray[i].style._width.isSet)
                this.matrix.xEdges.setSize(this.matrix.cellsArray[i].edgeLeft.index, this.matrix.cellsArray[i].edgeRight.index, this.matrix.cellsArray[i].style.width());
        }
        this.matrix.xEdges.applySizes();
        totalCellsInnerWidths = this.innerWidth - ((this.matrix.cols + 1) * cellSpacing) - (this.matrix.cols * 2 * (cellPadding + borderWidth));
        //console.warn( 'totalCellsInnerWidths: ' + this.innerWidth + '- (( ' + this.matrix.cols + ' + 1 ) * ' + cellSpacing + ') - ( ' + this.matrix.cols + ' * 2 * (' + cellPadding + '+' + borderWidth + ') ) = ' + totalCellsInnerWidths );
        // resize the colums in order to fit this layout
        this.matrix.xEdges.resizeToFit(totalCellsInnerWidths, borderWidth, cellPadding, cellSpacing, this.innerLeft);
        for (var i = 0, len = this.children.length; i < len; i++) {
            node = (this.children[i].node);
            this.children[i].offsetLeft = node.edgeLeft.offsetIndexStart;
            this.children[i].offsetWidth = node.edgeRight.offsetIndexEnd - node.edgeLeft.offsetIndexStart;
            this.children[i].innerWidth = this.children[i].offsetWidth - 2 * cellPadding - 2 * borderWidth;
            this.children[i].innerLeft = this.children[i].offsetLeft + cellPadding + borderWidth;
            this.children[i].computeWidths();
        }
        if (this.node) {
            this.node.documentElement.setMaxRightEdgeUsingLayout(this);
        }
    };
    Layout_Block_Table.prototype.computeHeights = function (topPlacement, indent) {
        if (indent === void 0) { indent = 0; }
        var i = 0, len = 0, table = this.node, borderWidth = table.border() || 1, cellSpacing = table.cellSpacing(), cellPadding = table.cellPadding();
        topPlacement += table.style.marginTop();
        this.offsetTop = topPlacement;
        topPlacement += (this.offsetHeight = (table.style.borderWidth() + this.node.style.paddingTop()));
        this.innerTop = topPlacement;
        this.innerHeight = 0;
        /* Compute the heights for all the sub-layouts, then hang them on
           top position.
           Set the line heights of the rows of the matrix
         */
        this.matrix.yEdges.resetSizes();
        for (i = 0, len = this.children.length; i < len; i++) {
            this.children[i].computeHeights(topPlacement);
            this.matrix.yEdges.setSize(this.children[i].node.edgeTop.index, this.children[i].node.edgeBottom.index, this.children[i].offsetHeight - 2 * cellPadding);
        }
        this.matrix.yEdges.applySizes();
        this.matrix.yEdges.resizeToFit(null, borderWidth, cellPadding, cellSpacing, -cellSpacing);
        for (i = 0, len = this.children.length; i < len; i++) {
            this.children[i].increaseYBy(this.children[i].node.edgeTop.offsetIndexStart);
            this.children[i].increaseHeightBy((this.children[i].node.edgeBottom.offsetIndexEnd - this.children[i].node.edgeTop.offsetIndexStart) - this.children[i].offsetHeight);
        }
        if (this.matrix.yEdges.edges.length) {
            this.innerHeight = this.matrix.yEdges.edges[this.matrix.yEdges.edges.length - 1].offsetIndexEnd;
            topPlacement += this.innerHeight;
            this.offsetHeight += this.innerHeight;
        }
        this.offsetHeight += (this.node.style.paddingBottom() + table.style.borderWidth() + 2 * cellSpacing);
        topPlacement += (this.node.style.paddingBottom() + table.style.borderWidth() + 2 * cellSpacing);
        topPlacement += this.node.style.marginBottom();
        return topPlacement;
    };
    return Layout_Block_Table;
})(Layout_Block);
var Viewport = (function (_super) {
    __extends(Viewport, _super);
    function Viewport(_width, _height) {
        if (_width === void 0) { _width = null; }
        if (_height === void 0) { _height = null; }
        _super.call(this);
        this._width = 500;
        this._height = 500;
        this._scrollbarSize = 10;
        this._scrollTop = 0;
        this._scrollLeft = 0;
        this._clientWidth = 0;
        this._clientHeight = 0;
        this.canvas = document.createElement('canvas');
        this.context = null;
        this.document = null;
        this.painter = null;
        this.selection = null;
        this.undo = null;
        this.mouseDriver = null;
        this.keyboardDriver = null;
        this.router = null;
        this.context = this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = this.context.msImageSmoothingEnabled = this.context.mozImageSmoothingEnabled = this.context.oImageSmoothingEnabled = true;
        this.canvas.tabIndex = 0;
        this.canvas.setAttribute('data-object-type', 'html-viewport');
        (function (me) {
            me.painter = new Throttler(function () {
                if (me.document)
                    me.document.repaint();
                me.paintScrollbars();
            }, 10);
            me.canvas.onclipboardtrap = function () {
                return me.selection.toString();
            };
            me.canvas.execCommand = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return me.execCommand.apply(me, args);
            };
        })(this);
        this.document = new HTML_Body(this);
        this.selection = new DocSelection(this);
        this.undo = new UndoManager(this);
        this.width(_width === null ? this._width : _width);
        this.height(_height === null ? this._height : _height);
        this.mouseDriver = new Viewport_MouseDriver(this);
        this.keyboardDriver = new Viewport_KeyboardDriver(this);
        this.router = new Viewport_CommandRouter(this);
    }
    Viewport.prototype.width = function (newWidth) {
        if (newWidth === void 0) { newWidth = null; }
        if (newWidth === null) {
            //getter
            return this._width;
        }
        else {
            this._width = newWidth < 0 ? 0 : newWidth;
            this.canvas.width = this._width;
            this.document.requestRelayout();
            return this._width;
        }
    };
    Viewport.prototype.height = function (newHeight) {
        if (newHeight === void 0) { newHeight = null; }
        if (newHeight === null) {
            //getter
            return this._height;
        }
        else {
            this._height = newHeight < 0 ? 0 : newHeight;
            this.canvas.height = this._height;
            this.document.requestRelayout();
            return this._height;
        }
    };
    Viewport.prototype.scrollTop = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            //getter
            return this._scrollTop;
        }
        else {
            if (this.document && this.document._layout) {
                if ((value + this._height - this._scrollbarSize) > (this.document._layout.offsetHeight + this.document._layout.offsetTop)) {
                    value = this.document._layout.offsetHeight + this.document._layout.offsetTop - this._height + this._scrollbarSize;
                }
                if (value < 0) {
                    value = 0;
                }
                value = Math.round(value);
                if (value != this._scrollTop) {
                    this._scrollTop = value;
                    this.document.requestRepaint();
                }
            }
            return this._scrollTop;
        }
    };
    Viewport.prototype.scrollLeft = function (value) {
        if (value === void 0) { value = null; }
        if (value === null) {
            return this._scrollLeft;
        }
        else {
            if (this.document && this.document._layout) {
                if ((value + this._width - this._scrollbarSize) > this.document._maxRightEdge) {
                    value = this.document._maxRightEdge - this._width + this._scrollbarSize;
                }
                if (value < 0) {
                    value = 0;
                }
                value = Math.round(value);
                if (value != this._scrollLeft) {
                    this._scrollLeft = value;
                    this.document.requestRepaint();
                }
            }
            return this._scrollLeft;
        }
    };
    // attempts to scroll the document to the last known painted caret position.
    // note that this is not guaranteed.
    Viewport.prototype.scrollToCaret = function () {
        var rng = this.selection.getRange(), focus = rng.focusNode(), details, lineIndex = 0, line;
        if (focus) {
            details = focus.details();
            if (!details) {
                return; // abort @this point
            }
            if (details.paintAbsolute.y - 20 < this._scrollTop) {
                this.scrollTop(details.paintAbsolute.y - 30);
            }
            else if (details.paintAbsolute.y + 82 > this._scrollTop + this._height) {
                this.scrollTop(details.paintAbsolute.y - this._height + 82);
            }
        }
    };
    // paints the scrollbars on the canvas context
    Viewport.prototype.paintScrollbars = function () {
        if (!this.document) {
            return;
        }
        var physScrollHeight = 0, physScrollWidth = 0, docWidth = this.document._maxRightEdge, docHeight = this.document._layout.offsetHeight + this.document._layout.offsetTop, physScrollXShoe = 0, physScrollYShoe = 0, yScale = 0, xScale = 0;
        this.context.fillStyle = '#ddd';
        this.context.fillRect(physScrollWidth = (this._width - this._scrollbarSize), 0, this._scrollbarSize, this._height - this._scrollbarSize + 1);
        this.context.fillRect(0, physScrollHeight = (this._height - this._scrollbarSize), this._width - this._scrollbarSize, this._scrollbarSize);
        if (docWidth < this._width - this._scrollbarSize) {
            docWidth = this._width - this._scrollbarSize;
        }
        physScrollYShoe = yScale = physScrollHeight / docHeight;
        physScrollYShoe = physScrollYShoe <= 1 ? physScrollHeight * physScrollYShoe : 0;
        if (physScrollYShoe != 0) {
            physScrollYShoe = ~~physScrollYShoe;
        }
        this.context.fillStyle = "#888";
        if (physScrollYShoe) {
            this.context.fillRect(this._width - this._scrollbarSize, (this._scrollTop * yScale), this._scrollbarSize, physScrollYShoe);
        }
        physScrollXShoe = xScale = physScrollWidth / docWidth;
        physScrollXShoe = physScrollXShoe <= 1 ? physScrollWidth * physScrollXShoe : 0;
        if (physScrollXShoe != 0) {
            physScrollXShoe = ~~physScrollXShoe;
        }
        if (physScrollXShoe) {
            this.context.fillRect((this._scrollLeft * xScale), this._height - this._scrollbarSize, physScrollXShoe, this._scrollbarSize);
        }
    };
    Viewport.prototype.value = function (v) {
        if (v === void 0) { v = null; }
        if (v === null) {
            return this.document.innerHTML();
        }
        else {
            this.document.innerHTML(v);
            this.document.relayout(true);
            this.selection.anchorTo(this.document.fragment.createTargetAt(0 /* DOC_BEGIN */));
            this.selection.editorState.compute();
            this.undo.reset();
        }
    };
    Viewport.prototype.getTargetAtXY = function (point) {
        if (this.document && this.document._layout) {
            return this.document._layout.getTargetAtXY(point);
        }
        else
            return null;
    };
    Viewport.prototype.execCommand = function (command) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.router.dispatchCommand.call(this.router, command, args);
    };
    return Viewport;
})(Events);
var Viewport_MouseDriver = (function (_super) {
    __extends(Viewport_MouseDriver, _super);
    function Viewport_MouseDriver(viewport) {
        _super.call(this);
        this.viewport = null;
        this.mbPressed = false; // weather a mouse button is pressed
        this.mouseIsGlobal = false;
        /* Scrollbar locking properties */
        this.lockedScrollbar = null; // 0 the vertical, 1 the horizontal, null -> no locked scrollbar
        /* Resizing properties */
        this.resizingReferencePoint = null;
        this.resizingLockTarget = null;
        this.resizingMethod = null;
        this.resizingAspectRatio = null;
        this.resizingDelta = null;
        this.resizingLastPoint = null;
        this.mouseDownCombo = 0;
        this.prevTimestampCombo = Date.now();
        this.mousePoint = { "x": 0, "y": 0 };
        this.viewport = viewport;
        (function (me) {
            function globalMouseMove(DOMEvent) {
                me.onmousemove(DOMEvent, true);
            }
            function globalMouseUp(DOMEvent) {
                document.body.removeEventListener('mousemove', globalMouseMove, true);
                document.body.removeEventListener('mouseup', globalMouseUp, true);
                me.onmouseup(DOMEvent, true);
                me.mouseIsGlobal = false;
            }
            me.viewport.canvas.addEventListener(typeof me.viewport.canvas.onmousewheel !== 'undefined' ? 'mousewheel' : 'wheel', function (DOMEvent) {
                if (!DOMEvent.shiftKey) {
                    me.viewport.scrollTop(me.viewport.scrollTop() + ((DOMEvent.wheelDelta || -DOMEvent.deltaY) < 0 ? 40 : -40));
                }
                else {
                    me.viewport.scrollLeft(me.viewport.scrollLeft() + ((DOMEvent.wheelDelta || -DOMEvent.deltaY) < 0 ? 40 : -40));
                }
                DOMEvent.preventDefault();
                DOMEvent.stopPropagation();
            }, true);
            me.viewport.canvas.addEventListener('mousedown', function (DOMEvent) {
                me.mousePoint.x = DOMEvent.offsetX;
                me.mousePoint.y = DOMEvent.offsetY;
                var ts = Date.now();
                if ((ts - me.prevTimestampCombo) > 200) {
                    me.mouseDownCombo = 1;
                }
                else {
                    me.mouseDownCombo++;
                }
                me.prevTimestampCombo = ts;
                if (me.mouseDownCombo == 1) {
                    me.onmousedown(DOMEvent);
                    document.body.addEventListener('mousemove', globalMouseMove, true);
                    document.body.addEventListener('mouseup', globalMouseUp, true);
                    me.mouseIsGlobal = true;
                }
                else {
                    me.onmousedown(DOMEvent);
                    if (me.mouseDownCombo == 2) {
                        me.onmousedblclick(DOMEvent);
                    }
                    else if (me.mouseDownCombo > 2) {
                        me.onmousetripleclick(DOMEvent);
                        me.prevTimestampCombo = 0;
                    }
                    document.body.addEventListener('mousemove', globalMouseMove, true);
                    document.body.addEventListener('mouseup', globalMouseUp, true);
                    me.mouseIsGlobal = true;
                }
            }, true);
            me.viewport.canvas.addEventListener('mousemove', function (DOMEvent) {
                if (me.mousePoint.x == DOMEvent.offsetX && me.mousePoint.y == DOMEvent.offsetY) {
                }
                else {
                    me.prevTimestampCombo = 0;
                }
                if (!me.mouseIsGlobal) {
                    me.onmousemove(DOMEvent);
                }
            }, true);
            me.viewport.canvas.addEventListener('mouseup', function (DOMEvent) {
                if (!me.mouseIsGlobal) {
                    me.onmouseup(DOMEvent);
                }
            }, true);
            me.viewport.canvas.addEventListener('click', function (DOMEvent) {
                me.onmouseclick(DOMEvent);
            }, true);
            /*
            me.viewport.canvas.addEventListener( 'dblclick',   function( DOMEvent ) {
                me.onmousedblclick( DOMEvent );
            }, true );
            */
            me.viewport.canvas.oncontextmenu = function (DOMEvent) {
                me.oncontextmenu(DOMEvent);
                DOMEvent.preventDefault();
                DOMEvent.stopPropagation();
                return false;
            };
        })(this);
    }
    Viewport_MouseDriver.prototype.translateMouseEventXY = function (DOMEvent) {
        return {
            "x": (DOMEvent.offsetX || DOMEvent.layerX) + this.viewport.scrollLeft(),
            "y": (DOMEvent.offsetY || DOMEvent.layerY) + this.viewport.scrollTop()
        };
    };
    Viewport_MouseDriver.prototype.onmousedown = function (DOMEvent) {
        var point = this.translateMouseEventXY(DOMEvent);
        switch (DOMEvent.which) {
            case 1:
                switch (true) {
                    case point.x - this.viewport.scrollLeft() >= this.viewport.width() - this.viewport._scrollbarSize:
                        this.lockedScrollbar = 0;
                        this.viewport.canvas.style.cursor = 'default';
                        return;
                        break;
                    case point.y - this.viewport.scrollTop() >= this.viewport.height() - this.viewport._scrollbarSize:
                        this.lockedScrollbar = 1;
                        this.viewport.canvas.style.cursor = 'default';
                        return;
                        break;
                    default:
                        this.lockedScrollbar = null;
                        break;
                }
                var target = this.viewport.getTargetAtXY(point);
                if (target) {
                    window['$1'] = target.target;
                    /* If the ownerBlock of the target handles the onmousedown event, we abort
                       ulterior operations
                    */
                    if ((target.target && target.target.nodeType == 1 /* TEXT */ && (target.target.ownerBlockElement()).onmousedown(point, 1, this)) || (target.target && target.target.nodeType == 2 /* ELEMENT */ && target.target.onmousedown(point, 1, this))) {
                        break;
                    }
                    this.mbPressed = true;
                    if (DOMEvent.ctrlKey && target.target && target.target.firstParentOfType('td')) {
                        this.viewport.selection.anchorTo((((target.target).firstParentOfType('td')).createMultiRangeAnchorNode()).createTarget());
                        this.viewport.canvas.style.cursor = 'url(' + UI_Resources.gif_cursorCellSelect + ') 1 1, default';
                    }
                    else {
                        this.viewport.selection.anchorTo(target);
                    }
                    this.fire('refocus');
                }
                break;
            case 3:
                break;
            default:
                DOMEvent.preventDefault();
                DOMEvent.stopPropagation();
                break;
        }
    };
    Viewport_MouseDriver.prototype.onmousemove = function (DOMEvent, isFromBody) {
        if (isFromBody === void 0) { isFromBody = false; }
        DOMEvent.preventDefault();
        DOMEvent.stopPropagation();
        var target, point, selection = this.viewport.selection, rng = selection.getRange(), anchor, focus;
        if (!isFromBody) {
            point = this.translateMouseEventXY(DOMEvent);
            if (this.lockedScrollbar !== null) {
                this.onhandlescrollbar(point);
                return;
            }
            else if (this.resizingLockTarget !== null) {
                this.handleResize(point);
            }
            else {
                target = this.viewport.getTargetAtXY(point);
            }
        }
        else {
            var rectObject = this.viewport.canvas.getBoundingClientRect(), point = {
                "x": DOMEvent.clientX - rectObject.left,
                "y": DOMEvent.clientY - rectObject.top
            };
            if (this.lockedScrollbar !== null) {
                this.onhandlescrollbar(point);
                return;
            }
            else if (this.resizingLockTarget !== null) {
                this.handleResize(point);
                return;
            }
            else {
                point.x += this.viewport.scrollLeft();
                point.y += this.viewport.scrollTop();
            }
            target = this.viewport.getTargetAtXY(point);
        }
        if (this.mbPressed) {
            if (target) {
                if (rng.isMultiRange()) {
                    if (!rng.becomeTableRectRange()) {
                        return;
                    }
                    else {
                        var targetCell;
                        if (targetCell = (rng.anchorNode().target.acceptNode(target.target.ownerBlockElement()))) {
                            rng.anchorNode().target.focusTo(targetCell);
                        }
                    }
                }
                else {
                    selection.focusTo(target);
                }
            }
            // scroll up or down if mouse is on top / bottom bound.
            // make the point absolute on canvas
            point.x -= this.viewport.scrollLeft();
            point.y -= this.viewport.scrollTop();
            if (point.y < 50 && this.viewport.scrollTop() > 0) {
                this.viewport.scrollTop(this.viewport.scrollTop() - 5);
            }
            else {
                if (point.y + 50 > this.viewport.height()) {
                    this.viewport.scrollTop(this.viewport.scrollTop() + 5);
                }
            }
        }
        else {
            if (target && target.target.nodeType == 2 /* ELEMENT */) {
                if (!target.target.onmousemove(point, 0, this)) {
                    this.viewport.canvas.style.cursor = target.target.isOrphanElement() ? 'text' : 'default';
                }
            }
            else {
                if (target && target.target.nodeType == 1 /* TEXT */) {
                    if (!(target.target.ownerBlockElement().onmousemove(point, 0, this))) {
                        this.viewport.canvas.style.cursor = 'text';
                    }
                }
                else {
                    this.viewport.canvas.style.cursor = target && target.target.isOrphanElement() ? 'text' : 'default';
                }
            }
        }
    };
    Viewport_MouseDriver.prototype.onmouseup = function (DOMEvent, isFromBody) {
        if (isFromBody === void 0) { isFromBody = false; }
        // cancel scrollbar locking
        this.lockedScrollbar = null;
        // cancel resizing locking
        this.resizingLockTarget = null;
        this.resizingMethod = null;
        this.resizingReferencePoint = null;
        this.resizingDelta = null;
        this.resizingLastPoint = null;
        this.resizingAspectRatio = null;
        switch (DOMEvent.which) {
            case 3:
            case 1:
                this.mbPressed = false;
                break;
        }
        // cancel the event.
        DOMEvent.preventDefault();
        DOMEvent.stopPropagation();
    };
    Viewport_MouseDriver.prototype.onmouseclick = function (DOMEvent) {
    };
    Viewport_MouseDriver.prototype.onmousetripleclick = function (DOMEvent) {
        var sel = this.viewport.selection, rng = sel.getRange().collapse(), focus = rng.focusNode(), anchor = rng.anchorNode(), targetStart, targetEnd, ownerBlock;
        if (!focus) {
            return;
        }
        ownerBlock = focus.target.ownerBlockElement();
        targetStart = ownerBlock.createCaretTarget(false);
        targetEnd = ownerBlock.createCaretTarget(true);
        if (!targetStart || !targetEnd) {
            return;
        }
        sel.anchorTo(targetStart);
        sel.focusTo(targetEnd);
    };
    Viewport_MouseDriver.prototype.onmousedblclick = function (DOMEvent) {
        var sel = this.viewport.selection, rng = sel.getRange().collapse(), focus = rng.focusNode(), anchor = rng.anchorNode(), at;
        if (!focus) {
            return;
        }
        at = this.viewport.document.fragment.at(focus.fragPos);
        try {
            if (at != 4 /* WHITE_SPACE */ && at != 2 /* EOL */) {
                anchor.moveByWords(-1);
                focus.moveByWords(1);
            }
            else {
                anchor.moveByWords(-1);
            }
        }
        catch (Error) {
            console.error(Error);
        }
    };
    Viewport_MouseDriver.prototype.oncontextmenu = function (DOMEvent) {
        console.warn("SHOW CONTEXT MENU!", DOMEvent);
    };
    Viewport_MouseDriver.prototype.onhandlescrollbar = function (point) {
        var percent = 0, height = 0, width = 0, value = 0;
        switch (this.lockedScrollbar) {
            case null:
                break;
            case 0:
                //handle vertical scrollbar
                height = this.viewport.height() - this.viewport._scrollbarSize;
                if (this.viewport._clientHeight < height) {
                    return; // scrolling is disabled
                }
                if (point.y < 0) {
                    point.y = 0;
                }
                if (point.y > height) {
                    point.y = height;
                }
                percent = point.y / (height / 100);
                value = percent * ((this.viewport._clientHeight - height) / 100);
                this.viewport.scrollTop(value);
                break;
            case 1:
                //handle horizontal scrollbar
                width = this.viewport.width() - this.viewport._scrollbarSize;
                if (this.viewport._clientWidth <= width) {
                    return;
                }
                if (point.x < 0) {
                    point.x = 0;
                }
                if (point.x > width) {
                    point.x = width;
                }
                percent = point.x / (width / 100);
                value = percent * ((this.viewport._clientWidth - width) / 100);
                this.viewport.scrollLeft(value);
                break;
        }
    };
    Viewport_MouseDriver.prototype.handleResize = function (point) {
        var computeWidth = false, computeHeight = false, newWidth = null, newHeight = null;
        if (this.resizingLastPoint.x != point.x || this.resizingLastPoint.y != point.y) {
            this.resizingDelta = {
                "x": point.x - this.resizingLastPoint.x,
                "y": point.y - this.resizingLastPoint.y
            };
            if (this.resizingAspectRatio === null) {
                computeHeight = true;
                computeWidth = true;
            }
            else {
                if (this.resizingLockTarget.style._width.isSet) {
                    computeWidth = true;
                }
                if (this.resizingLockTarget.style._height.isSet) {
                    computeHeight = true;
                }
            }
            if (!computeWidth && !computeHeight) {
                computeWidth = true;
                computeHeight = true;
            }
            switch (this.resizingMethod) {
                case 0 /* NW */:
                    if (computeWidth) {
                        newWidth = this.resizingLockTarget.layout.offsetWidth - this.resizingDelta.x;
                    }
                    if (computeHeight) {
                        newHeight = this.resizingLockTarget.layout.offsetHeight - this.resizingDelta.y;
                    }
                    break;
                case 1 /* NE */:
                    if (computeWidth) {
                        newWidth = this.resizingLockTarget.layout.offsetWidth + this.resizingDelta.x;
                    }
                    if (computeHeight) {
                        newHeight = this.resizingLockTarget.layout.offsetHeight - this.resizingDelta.y;
                    }
                    break;
                case 2 /* SW */:
                    if (computeWidth) {
                        newWidth = this.resizingLockTarget.layout.offsetWidth - this.resizingDelta.x;
                    }
                    if (computeHeight) {
                        newHeight = this.resizingLockTarget.layout.offsetHeight + this.resizingDelta.y;
                    }
                    break;
                case 3 /* SE */:
                    if (computeWidth) {
                        newWidth = this.resizingLockTarget.layout.offsetWidth + this.resizingDelta.x;
                    }
                    if (computeHeight) {
                        newHeight = this.resizingLockTarget.layout.offsetHeight + this.resizingDelta.y;
                    }
                    break;
                case 4 /* N */:
                    if (computeHeight) {
                        newHeight = this.resizingLockTarget.layout.offsetHeight - this.resizingDelta.y;
                    }
                    break;
                case 5 /* S */:
                    if (computeHeight) {
                        newHeight = this.resizingLockTarget.layout.offsetHeight + this.resizingDelta.y;
                    }
                    break;
                case 7 /* E */:
                    if (computeWidth) {
                        newWidth = this.resizingLockTarget.layout.offsetWidth + this.resizingDelta.x;
                    }
                    break;
                case 6 /* W */:
                    if (computeWidth) {
                        newWidth = this.resizingLockTarget.layout.offsetWidth - this.resizingDelta.x;
                    }
                    break;
                default:
                    throw "Unexpected resizing method!";
            }
            if (this.resizingLockTarget.is() == 'multirange') {
                this.resizingLockTarget.resizerHint = this.resizingMethod;
            }
            if (this.resizingAspectRatio === null) {
                if (computeWidth) {
                    this.resizingLockTarget.style.width(String(newWidth - 2 * this.resizingLockTarget.style.borderWidth() - this.resizingLockTarget.style.paddingLeft() - this.resizingLockTarget.style.paddingRight()));
                }
                if (computeHeight) {
                    this.resizingLockTarget.style.height(String(newHeight - 2 * this.resizingLockTarget.style.borderWidth() - this.resizingLockTarget.style.paddingTop() - this.resizingLockTarget.style.paddingBottom()));
                }
            }
            else {
                if (computeWidth) {
                    newHeight = ~~(newWidth / this.resizingAspectRatio);
                }
                else {
                    newWidth = ~~(newHeight * this.resizingAspectRatio);
                }
                if (this.resizingLockTarget.style._width.isSet) {
                    this.resizingLockTarget.style.width(String(newWidth - 2 * this.resizingLockTarget.style.borderWidth() - this.resizingLockTarget.style.paddingLeft() - this.resizingLockTarget.style.paddingRight()));
                }
                if (computeHeight) {
                    this.resizingLockTarget.style.height(String(newHeight - 2 * this.resizingLockTarget.style.borderWidth() - this.resizingLockTarget.style.paddingTop() - this.resizingLockTarget.style.paddingBottom()));
                }
            }
            this.resizingLastPoint.x = point.x;
            this.resizingLastPoint.y = point.y;
        }
    };
    Viewport_MouseDriver.prototype.lockTargetForResizing = function (target, resizeType, initialEventPoint) {
        this.viewport.undo.createUndoEntry('Resize Element');
        this.resizingMethod = resizeType;
        this.resizingLockTarget = target;
        switch (resizeType) {
            case 0 /* NW */:
            case 4 /* N */:
            case 6 /* W */:
                // save the opposite node for the resizing process
                this.resizingReferencePoint = {
                    "x": target.layout.offsetLeft + target.layout.offsetWidth,
                    "y": target.layout.offsetTop + target.layout.offsetHeight
                };
                break;
            case 1 /* NE */:
            case 7 /* E */:
                // save the opposite node for the resizing process
                this.resizingReferencePoint = {
                    "x": target.layout.offsetLeft,
                    "y": target.layout.offsetTop + target.layout.offsetHeight
                };
                break;
            case 2 /* SW */:
            case 5 /* S */:
                // save the opposite node for the resizing process
                this.resizingReferencePoint = {
                    "x": target.layout.offsetLeft + target.layout.offsetWidth,
                    "y": target.layout.offsetTop
                };
                break;
            case 3 /* SE */:
                // save the opposite node for the resizing process
                this.resizingReferencePoint = {
                    "x": target.layout.offsetLeft,
                    "y": target.layout.offsetTop
                };
                break;
            default:
                throw "Unimplemented resize method!";
                break;
        }
        this.resizingAspectRatio = target.style._aspectRatio.isSet ? target.style.aspectRatio() : null;
        this.resizingDelta = {
            "x": 0,
            "y": 0
        };
        this.resizingLastPoint = initialEventPoint;
        // cancel mouse moving ...
        this.mbPressed = false;
    };
    return Viewport_MouseDriver;
})(Events);
var Viewport_KeyboardDriver = (function (_super) {
    __extends(Viewport_KeyboardDriver, _super);
    function Viewport_KeyboardDriver(viewport) {
        _super.call(this);
        this.viewport = null;
        this.viewport = viewport;
        (function (me) {
            me.viewport.canvas.addEventListener('keydown', function (DOMEvent) {
                me.onkeydown(DOMEvent);
            }, true);
            me.viewport.canvas.addEventListener('keyup', function (DOMEvent) {
                me.onkeyup(DOMEvent);
            }, true);
            me.viewport.canvas.addEventListener('keypress', function (DOMEvent) {
                me.onkeypress(DOMEvent);
            }, true);
            me.viewport.canvas.forwardKeyboardEvent = function (evtype, evt) {
                switch (evtype) {
                    case 'keydown':
                        me.onkeydown(evt);
                        break;
                    case 'keyup':
                        me.onkeyup(evt);
                        break;
                    case 'keypress':
                        me.onkeypress(evt);
                        break;
                }
            };
        })(this);
    }
    Viewport_KeyboardDriver.prototype.onkeyup = function (DOMEvent, eventSource) {
    };
    Viewport_KeyboardDriver.prototype.onkeypress = function (DOMEvent) {
        var chr = String.fromCharCode(DOMEvent.charCode), key = DOMEvent.keyCode;
        if (!DOMEvent.ctrlKey && chr && chr != '\n') {
            this.viewport.execCommand(0 /* INSERT_TEXT */, chr);
            DOMEvent.preventDefault();
            DOMEvent.stopPropagation();
        }
    };
    Viewport_KeyboardDriver.prototype.onkeydown = function (DOMEvent) {
        var cancelEvent = false, nextCell, textNodes, iTemp;
        switch (DOMEvent.keyCode) {
            case 32:
                this.viewport.execCommand(0 /* INSERT_TEXT */, ' ');
                cancelEvent = true;
                break;
            case 9:
                cancelEvent = true;
                if (!this.viewport.selection.editorState.state.cell) {
                    this.viewport.execCommand(DOMEvent.shiftKey ? 14 /* UNINDENT */ : 13 /* INDENT */);
                }
                else {
                    if (!DOMEvent.shiftKey) {
                        nextCell = this.viewport.selection.editorState.state.cell.nextCell();
                        if (nextCell) {
                            if (nextCell.isOrphanElement()) {
                                this.viewport.selection.anchorTo(new TRange_Target(nextCell, nextCell.FRAGMENT_START));
                            }
                            else {
                                textNodes = nextCell.allTextNodes();
                                if (textNodes.length) {
                                    this.viewport.selection.anchorTo(new TRange_Target(textNodes[textNodes.length - 1], textNodes[textNodes.length - 1].FRAGMENT_END));
                                }
                                else {
                                    this.viewport.selection.anchorTo(new TRange_Target(nextCell, nextCell.FRAGMENT_END));
                                }
                            }
                        }
                        else {
                            // create a new row in the table
                            this.viewport.selection.editorState.state.cell.insertRow(false);
                            nextCell = this.viewport.selection.editorState.state.cell.nextCell();
                            if (nextCell) {
                                if (nextCell.isOrphanElement()) {
                                    this.viewport.selection.anchorTo(new TRange_Target(nextCell, nextCell.FRAGMENT_START));
                                }
                                else {
                                    textNodes = nextCell.allTextNodes();
                                    if (textNodes.length) {
                                        this.viewport.selection.anchorTo(new TRange_Target(textNodes[textNodes.length - 1], textNodes[textNodes.length - 1].FRAGMENT_END));
                                    }
                                    else {
                                        this.viewport.selection.anchorTo(new TRange_Target(nextCell, nextCell.FRAGMENT_END));
                                    }
                                }
                            }
                        }
                    }
                    else {
                    }
                }
                break;
            case 66:
                if (DOMEvent.ctrlKey && !DOMEvent.shiftKey) {
                    this.viewport.execCommand(4 /* BOLD */);
                    cancelEvent = true;
                }
                break;
            case 73:
                if (DOMEvent.ctrlKey && !DOMEvent.shiftKey) {
                    this.viewport.execCommand(5 /* ITALIC */);
                    cancelEvent = true;
                }
                break;
            case 85:
                if (DOMEvent.ctrlKey && !DOMEvent.shiftKey) {
                    this.viewport.execCommand(6 /* UNDERLINE */);
                    cancelEvent = true;
                }
                break;
            case 76:
                if (DOMEvent.ctrlKey && !DOMEvent.shiftKey) {
                    this.viewport.execCommand(8 /* ALIGN */, 'left');
                    cancelEvent = true;
                }
                break;
            case 69:
                if (DOMEvent.ctrlKey && !DOMEvent.shiftKey) {
                    this.viewport.execCommand(8 /* ALIGN */, 'center');
                    cancelEvent = true;
                }
                break;
            case 74:
                if (DOMEvent.ctrlKey && !DOMEvent.shiftKey) {
                    this.viewport.execCommand(8 /* ALIGN */, 'justified');
                    cancelEvent = true;
                }
                break;
            case 82:
                if (DOMEvent.ctrlKey && !DOMEvent.shiftKey) {
                    this.viewport.execCommand(8 /* ALIGN */, 'right');
                    cancelEvent = true;
                }
                break;
            case 189:
                if (DOMEvent.ctrlKey) {
                    this.viewport.execCommand(19 /* SIZE */, '-1');
                    cancelEvent = true;
                }
                break;
            case 107:
            case 187:
                if (DOMEvent.ctrlKey) {
                    this.viewport.execCommand(19 /* SIZE */, '+1');
                    cancelEvent = true;
                }
                break;
            case 13:
            case 10:
                if (!DOMEvent.ctrlKey) {
                    this.viewport.execCommand(2 /* NEW_LINE */, DOMEvent.shiftKey);
                    cancelEvent = true;
                }
                break;
            case 46:
                if (!DOMEvent.ctrlKey && !DOMEvent.shiftKey) {
                    this.viewport.execCommand(1 /* DELETE_TEXT */, 1);
                    cancelEvent = true;
                }
                break;
            case 8:
                if (!DOMEvent.ctrlKey) {
                    this.viewport.execCommand(1 /* DELETE_TEXT */, -1);
                    cancelEvent = true;
                }
                break;
            case 36:
                if (!DOMEvent.ctrlKey) {
                    this.viewport.execCommand(3 /* MOVE */, 0 /* LINE_HORIZONTAL */, -1, DOMEvent.shiftKey);
                    cancelEvent = true;
                }
                break;
            case 35:
                if (!DOMEvent.ctrlKey) {
                    this.viewport.execCommand(3 /* MOVE */, 0 /* LINE_HORIZONTAL */, 1, DOMEvent.shiftKey);
                    cancelEvent = true;
                }
                break;
            case 37:
                if (!DOMEvent.ctrlKey) {
                    this.viewport.execCommand(3 /* MOVE */, 2 /* CHARACTER */, -1, DOMEvent.shiftKey);
                }
                else {
                    this.viewport.execCommand(3 /* MOVE */, 3 /* WORD */, -1, DOMEvent.shiftKey);
                }
                cancelEvent = true;
                break;
            case 39:
                if (!DOMEvent.ctrlKey) {
                    this.viewport.execCommand(3 /* MOVE */, 2 /* CHARACTER */, 1, DOMEvent.shiftKey);
                }
                else {
                    this.viewport.execCommand(3 /* MOVE */, 3 /* WORD */, 1, DOMEvent.shiftKey);
                }
                cancelEvent = true;
                break;
            case 38:
                if (!DOMEvent.ctrlKey) {
                    this.viewport.execCommand(3 /* MOVE */, 1 /* LINE_VERTICAL */, -1, DOMEvent.shiftKey);
                    cancelEvent = true;
                }
                break;
            case 40:
                if (!DOMEvent.ctrlKey) {
                    this.viewport.execCommand(3 /* MOVE */, 1 /* LINE_VERTICAL */, 1, DOMEvent.shiftKey);
                    cancelEvent = true;
                }
                break;
            case 33:
                if (!DOMEvent.ctrlKey) {
                    this.viewport.execCommand(3 /* MOVE */, 4 /* VIEWPORT */, -1, DOMEvent.shiftKey);
                    cancelEvent = true;
                }
                break;
            case 34:
                if (!DOMEvent.ctrlKey) {
                    this.viewport.execCommand(3 /* MOVE */, 4 /* VIEWPORT */, 1, DOMEvent.shiftKey);
                    cancelEvent = true;
                }
                break;
            case 90:
                if (DOMEvent.ctrlKey) {
                    this.viewport.execCommand(24 /* UNDO */);
                    cancelEvent = true;
                }
                break;
            case 89:
                if (DOMEvent.ctrlKey) {
                    this.viewport.execCommand(25 /* REDO */);
                    cancelEvent = true;
                }
                break;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
                if (DOMEvent.ctrlKey) {
                    cancelEvent = true;
                    iTemp = DOMEvent.keyCode - 48;
                    this.viewport.execCommand(20 /* BLOCK_LEVEL */, iTemp == 0 ? 'normal' : 'h' + iTemp);
                }
                break;
            default:
                break;
        }
        if (cancelEvent) {
            DOMEvent.preventDefault();
            DOMEvent.stopPropagation();
        }
    };
    return Viewport_KeyboardDriver;
})(Events);
var Viewport_CommandRouter = (function (_super) {
    __extends(Viewport_CommandRouter, _super);
    function Viewport_CommandRouter(viewport) {
        _super.call(this);
        this.caretX = null;
        this.viewport = viewport;
        (function (me) {
            me.viewport.mouseDriver.on('refocus', function () {
                this.caretX = null;
            });
        })(this);
    }
    Viewport_CommandRouter.prototype.commandName = function (command) {
        switch (command) {
            case 0 /* INSERT_TEXT */:
                return 'insertText';
                break;
            case 1 /* DELETE_TEXT */:
                return 'deleteText';
                break;
            case 2 /* NEW_LINE */:
                return 'newLine';
                break;
            case 3 /* MOVE */:
                return 'moveCaret';
                break;
            case 4 /* BOLD */:
                return 'bold';
                break;
            case 7 /* STRIKE */:
                return 'strike';
                break;
            case 5 /* ITALIC */:
                return 'italic';
                break;
            case 6 /* UNDERLINE */:
                return 'underline';
                break;
            case 8 /* ALIGN */:
                return 'align';
                break;
            case 10 /* COPY */:
                return 'copy';
                break;
            case 11 /* CUT */:
                return 'cut';
                break;
            case 12 /* PASTE */:
                return 'paste';
                break;
            case 13 /* INDENT */:
                return 'indent';
                break;
            case 14 /* UNINDENT */:
                return 'unindent';
                break;
            case 15 /* VALIGN */:
                return 'verticalAlign';
                break;
            case 16 /* FONT */:
                return 'setFont';
                break;
            case 17 /* COLOR */:
                return 'setColor';
                break;
            case 18 /* BGCOLOR */:
                return 'setBgColor';
                break;
            case 19 /* SIZE */:
                return 'setSize';
                break;
            case 20 /* BLOCK_LEVEL */:
                return 'blockLevel';
                break;
            case 21 /* LIST */:
                return 'list';
                break;
            case 9 /* CLEAR_FORMATTING */:
                return 'clearFormatting';
                break;
            case 22 /* INSERT_LINK */:
                return 'link';
                break;
            case 23 /* REMOVE_LINK */:
                return 'unlink';
                break;
            case 24 /* UNDO */:
                return 'undo';
                break;
            case 25 /* REDO */:
                return 'redo';
                break;
            default:
                throw "ERR_UNKNOWN_COMMAND";
                break;
        }
    };
    Viewport_CommandRouter.prototype.ensureArgs = function (args, minArgs, maxArgs) {
        return args && args.length >= minArgs && args.length <= maxArgs;
    };
    Viewport_CommandRouter.prototype.dispatchCommand = function (command, args) {
        var commandName = this.commandName(command);
        //console.log( 'dispatchCommand: ' + commandName + '(' + JSON.stringify( args ) + ')' );
        if (this.caretX != null && (command != 3 /* MOVE */)) {
            this.caretX = null;
        }
        switch (command) {
            case 0 /* INSERT_TEXT */:
                if (!this.ensureArgs(args, 1, 1)) {
                    throw "Command: " + commandName + " require 1 argument of type string[1]";
                }
                else {
                    this.insertText(String(args[0]));
                }
                break;
            case 1 /* DELETE_TEXT */:
                if (!this.ensureArgs(args, 1, 1)) {
                    throw "Command: " + commandName + " require 1 argument of type integer";
                }
                else {
                    this.deleteText(~~args[0]);
                }
                break;
            case 2 /* NEW_LINE */:
                if (!this.ensureArgs(args, 0, 1)) {
                    throw "Command: " + commandName + " require a maximum 1 argument of type boolean";
                }
                else {
                    if (args.length == 1) {
                        this.newLine(!!args[0]);
                    }
                    else {
                        this.newLine();
                    }
                }
                break;
            case 3 /* MOVE */:
                if (!this.ensureArgs(args, 3, 3)) {
                    throw "Command: " + commandName + " require 3 arguments of type CaretPos, int, boolean.";
                }
                else {
                    this.moveCaret(args[0], args[1], args[2]);
                }
                break;
            case 4 /* BOLD */:
                if (!this.ensureArgs(args, 0, 1)) {
                    throw "Command: " + commandName + " require one optional argument of type boolean.";
                }
                else {
                    this.bold(args.length ? !!args[0] : null);
                }
                break;
            case 7 /* STRIKE */:
                if (!this.ensureArgs(args, 0, 1)) {
                    throw "Command: " + commandName + " require one optional argument of type boolean.";
                }
                else {
                    this.strike(args.length ? !!args[0] : null);
                }
                break;
            case 5 /* ITALIC */:
                if (!this.ensureArgs(args, 0, 1)) {
                    throw "Command: " + commandName + " require one optional argument of type boolean.";
                }
                else {
                    this.italic(args.length ? !!args[0] : null);
                }
                break;
            case 6 /* UNDERLINE */:
                if (!this.ensureArgs(args, 0, 1)) {
                    throw "Command: " + commandName + " require one optional argument of type boolean.";
                }
                else {
                    this.underline(args.length ? !!args[0] : null);
                }
                break;
            case 8 /* ALIGN */:
                if (!this.ensureArgs(args, 1, 1)) {
                    throw "Command: " + commandName + " require a single string argument.";
                }
                else {
                    this.align(String(args[0]));
                }
                break;
            case 10 /* COPY */:
                if (!this.ensureArgs(args, 0, 1)) {
                    throw "Command: " + commandName + " requires max 1 argument of type boolean!";
                }
                else {
                    this.copy(args.length ? !!args[0] : null);
                }
                break;
            case 11 /* CUT */:
                if (!this.ensureArgs(args, 0, 1)) {
                    throw "Command: " + commandName + " requires max 1 argument of type boolean!";
                }
                else {
                    this.cut(args.length ? !!args[0] : null);
                }
                break;
            case 12 /* PASTE */:
                if (!this.ensureArgs(args, 0, 2)) {
                    throw "Command: " + commandName + " require 2 optional args of type string!";
                }
                else {
                    this.paste(args.length == 0 ? null : String(args[0]), args.length == 2 ? args[1] : null);
                }
                break;
            case 13 /* INDENT */:
                if (!this.ensureArgs(args, 0, 1)) {
                    throw "Command: " + commandName + " requires a single optional number argument!";
                }
                else {
                    this.indent(args.length ? ~~args[0] : null);
                }
                break;
            case 14 /* UNINDENT */:
                if (!this.ensureArgs(args, 0, 1)) {
                    throw "Command: " + commandName + " requires a single optional number argument!";
                }
                else {
                    this.unindent(args.length ? ~~args[0] : null);
                }
                break;
            case 15 /* VALIGN */:
                if (!this.ensureArgs(args, 1, 1)) {
                    throw "Command: " + commandName + " requires a single argument of type string!";
                }
                else {
                    this.valign(String(args[0] || 'normal'));
                }
                break;
            case 16 /* FONT */:
                if (!this.ensureArgs(args, 1, 1)) {
                    throw "Command: " + commandName + " requires a single string argument!";
                }
                else {
                    this.font(String(args[0] || "Arial"));
                }
                break;
            case 17 /* COLOR */:
                if (!this.ensureArgs(args, 1, 1)) {
                    throw "Command: " + commandName + " requires a single argument!";
                }
                else {
                    this.color(String(args[0] || ''));
                }
                break;
            case 18 /* BGCOLOR */:
                if (!this.ensureArgs(args, 1, 1)) {
                    throw "Command: " + commandName + " requires a single argument!";
                }
                else {
                    this.bgColor(String(args[0] || ''));
                }
                break;
            case 19 /* SIZE */:
                if (!this.ensureArgs(args, 1, 1)) {
                    throw "Command: " + commandName + " requires a single argument of type string!";
                }
                else {
                    this.size(String(args[0] || ''));
                }
                break;
            case 20 /* BLOCK_LEVEL */:
                if (!this.ensureArgs(args, 1, 1)) {
                    throw "Command: " + commandName + " requires a single argument of type string!";
                }
                else {
                    this.blockLevel(String(args[0] || ''));
                }
                break;
            case 21 /* LIST */:
                if (!this.ensureArgs(args, 1, 2)) {
                    throw "Command: " + commandName + " requires two arguments: string, boolean";
                }
                else {
                    if (args.length == 1) {
                        this.list(String(args[0] || 'ul'), null);
                    }
                    else {
                        this.list(String(args[0] || 'ul'), !!args[1]);
                    }
                }
                break;
            case 9 /* CLEAR_FORMATTING */:
                if (!this.ensureArgs(args, 0, 0)) {
                    throw "Command: " + commandName + " don't have any arguments.";
                }
                else {
                    this.clearFormatting();
                }
                break;
            case 22 /* INSERT_LINK */:
                if (!this.ensureArgs(args, 1, 3)) {
                    throw "Command: " + commandName + " requires 1 argument.";
                }
                else {
                    this.link(String(args[0]), args[1] === null ? null : String(args[1] || ''), String(args[2]) || null);
                }
                break;
            case 23 /* REMOVE_LINK */:
                if (!this.ensureArgs(args, 0, 0)) {
                    throw "Command: " + commandName + " requires no arguments.";
                }
                else {
                    this.unlink();
                }
                break;
            case 24 /* UNDO */:
                if (!this.ensureArgs(args, 0, 0)) {
                    throw "Command: " + commandName + " requires no arguments.";
                }
                else {
                    this.undo();
                }
                break;
            case 25 /* REDO */:
                if (!this.ensureArgs(args, 0, 0)) {
                    throw "Command: " + commandName + " requires no arguments.";
                }
                else {
                    this.redo();
                }
                break;
            default:
                throw "ERR_UNIMPLEMENTED_COMMAND";
                break;
        }
    };
    // inserts a string @ caret position.
    Viewport_CommandRouter.prototype.insertText = function (str) {
        str = String(str || '');
        if (!str) {
            return;
        }
        var range = this.viewport.selection.getRange(), focus = range.focusNode(), len = str.length, nowPos, jump = 0, otherNode = false, textNode;
        if (range.isMultiRange()) {
            return;
        }
        // clear existing selection if any.
        if (this.viewport.selection.getRange().length()) {
            this.viewport.selection.removeContents();
            range = this.viewport.selection.getRange();
            focus = range.focusNode();
        }
        if (!focus && range.anchorNode().target.isOrphanElement()) {
            this.viewport.undo.createUndoEntry('Write');
            textNode = range.anchorNode().target.documentElement.createTextNode(str);
            range.anchorNode().target.appendChild(textNode);
            this.viewport.document.relayout(true);
            this.viewport.selection.anchorTo(new TRange_Target(textNode, textNode.FRAGMENT_END));
            return;
        }
        if (!focus) {
            return;
        }
        this.viewport.undo.createUndoEntry('Write');
        //console.log( 'before: ' + focus.fragPos + ' => ' + JSON.stringify( this.viewport.document.fragment.sliceDebug( ( nowPos = focus.fragPos - 10 ), 20, focus.fragPos ) ) );
        // find the target text node offset
        jump = focus.target.insertTextAtTargetOffset(focus.fragPos, str);
        if (jump < 0) {
            jump = -jump;
            otherNode = true; // we've inserted text into a br, which redirected the text. we need
        }
        this.viewport.document.relayout(true);
        if (!otherNode) {
            focus.fragPos = focus.target.textIndexToFragmentPosition(jump);
        }
        else {
            focus.fragPos = focus.target.textIndexToFragmentPosition(jump);
            focus.target = focus.target.documentElement.findNodeAtIndex(focus.fragPos);
        }
        //console.log( 'after: ' + focus.fragPos + ' => ' + JSON.stringify( this.viewport.document.fragment.sliceDebug( ( nowPos ), 20, focus.fragPos ) ) + ', jump = ' + jump );
        range.collapse(true);
        this.viewport.scrollToCaret();
    };
    // negative values delete characters in the left of the caret,
    // positive values delete characters in the right of the caret
    Viewport_CommandRouter.prototype.deleteText = function (amount) {
        if (!amount) {
            return;
        }
        var document = this.viewport.document, selection = this.viewport.selection, rng = selection.getRange(), focus = rng.focusNode(), anchor = rng.anchorNode(), cursorPosition = 0, newCursorPosition = 0, fragment = this.viewport.document.fragment, at = null, i = 0, j = 0, n = 0, added = false, increment = 0, atMax = fragment.length(), traversedTextNodes = [], node = null, lock = null, chars = 0, sourceBlockElement, destinationBlockElement, mergeOrder, mergePosition = 0, collection = null;
        if (rng.isMultiRange()) {
            this.viewport.undo.createUndoEntry('Delete Text');
            this.viewport.selection.removeContents();
            return;
        }
        if (amount == -1 && rng.isOrphan() && rng.anchorNode().target.is() == 'td') {
            return;
        }
        this.viewport.undo.createUndoEntry('Delete Text');
        if (rng.length()) {
            this.viewport.selection.removeContents();
            this.viewport.scrollToCaret();
            return;
        }
        else {
            if (rng.length() === null) {
                if (anchor.target && anchor.target.nodeType == 2 /* ELEMENT */) {
                    // create lock before target
                    lock = fragment.createLockTarget(anchor.target.FRAGMENT_START + 1, 0 /* FROM_BEGINNING_OF_DOCUMENT */);
                    if (anchor.target.removeFromDOMAtUserCommand()) {
                        document.relayout(true);
                        document.removeOrphanNodes();
                        selection.anchorTo(lock.getTarget());
                        selection.fire('changed');
                        this.viewport.scrollToCaret();
                        return;
                    }
                }
                return;
            }
            else {
                // deny deleting more than a character @ once.
                if (Math.abs(amount) != 1) {
                    throw "ERR_BAD_ARGUMENT. Allowed argument is -1 or 1.";
                }
            }
        }
        /* Ensure we're positioned on a character */
        if (amount > 0) {
            rng.moveRightUntilCharacterIfNotLandedOnText();
        }
        else {
            rng.moveLeftUntilCharacterIfNotLandedOnText();
        }
        /* Store cursor position */
        cursorPosition = focus.fragPos;
        sourceBlockElement = focus.target.ownerBlockElement();
        destinationBlockElement = null;
        if (amount < 0) {
            increment = -1;
        }
        else {
            increment = 1;
        }
        i = cursorPosition;
        while ((chars != amount) && (i > 0) && (i < atMax)) {
            if (increment < 0)
                i += increment;
            at = fragment.at(i);
            if (at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */) {
                newCursorPosition = i; // store the cursor position
                node = fragment.getNodeAtIndex(i) || null;
                if (node == null || node.nodeType != 1 /* TEXT */) {
                    throw "ASSERTION_FAILED!";
                }
                chars += increment;
                added = false;
                for (j = 0, n = traversedTextNodes.length; j < n; j++) {
                    if (traversedTextNodes[j].node == node) {
                        if (i < traversedTextNodes[j].start) {
                            traversedTextNodes[j].start = i;
                        }
                        else {
                            traversedTextNodes[j].stop = i;
                        }
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    destinationBlockElement = node.ownerBlockElement();
                    if (destinationBlockElement != sourceBlockElement && (!destinationBlockElement.isMergeable || !sourceBlockElement.isMergeable)) {
                        return;
                    }
                    traversedTextNodes.push({
                        node: node,
                        start: i,
                        stop: i
                    });
                }
            }
            if (increment > 0)
                i += increment;
        }
        if (traversedTextNodes.length == 0) {
            //no text to be deleted.
            return;
        }
        // create a lock @ new cursor position.
        if (amount < 0) {
            lock = fragment.createLockTarget(cursorPosition, 1 /* FROM_ENDING_OF_DOCUMENT */, 'Remove' + amount);
        }
        else {
            lock = fragment.createLockTarget(cursorPosition, 0 /* FROM_BEGINNING_OF_DOCUMENT */, 'Remove' + amount);
        }
        this.viewport.document.canRelayout = false;
        if (destinationBlockElement != sourceBlockElement && destinationBlockElement !== null && destinationBlockElement.isMergeable && sourceBlockElement.isMergeable) {
            //console.warn( "MERGE BEGIN" );
            if (amount < 0) {
                mergePosition = 1; // 1 = at end
                mergeOrder = [destinationBlockElement, sourceBlockElement];
            }
            else {
                mergePosition = 1; // 0 = at beginning
                mergeOrder = [sourceBlockElement, destinationBlockElement];
            }
            //console.log( 'append: ' + mergeOrder[1].xmlBeginning() + " in " + mergeOrder[0].xmlBeginning() + " at: " + ( mergePosition == 1 ? "beginning" : "end" ) );
            if (mergeOrder[1] != document) {
                collection = new TNode_Collection(mergeOrder[1].childNodes);
                if (mergeOrder[1].parentNode == mergeOrder[0]) {
                    mergeOrder[0].appendCollection(collection, mergeOrder[1].siblingIndex + mergePosition == 1 ? 1 : 0);
                }
                else {
                    mergeOrder[0].appendCollection(collection, mergePosition == 1 ? null : 0);
                }
                this.viewport.document.removeOrphanNodes();
                if (destinationBlockElement.nodeName == 'li') {
                    destinationBlockElement.parentNode.parentNode.mergeAdjacentLists();
                }
                else if (sourceBlockElement.nodeName == 'li') {
                    sourceBlockElement.parentNode.parentNode.mergeAdjacentLists();
                }
            }
        }
        // if we did a merging, we're not doing the locking
        if (collection === null) {
            for (i = 0, n = traversedTextNodes.length; i < n; i++) {
                traversedTextNodes[i].node.deleteTextContentsBetweenFragmentPositions(traversedTextNodes[i].start, traversedTextNodes[i].stop);
                if (traversedTextNodes[i].node.textContents() == '') {
                    traversedTextNodes[i].node.remove(); // remove text node if has no text anymore
                }
            }
        }
        //remove all the orphan nodes from the document.
        this.viewport.document.removeOrphanNodes();
        this.viewport.document.canRelayout = true;
        // relayout *RIGHT NOW* the document
        this.viewport.document.relayout(true);
        // finally, move the cursor.
        selection.anchorTo(lock.getTarget());
        this.viewport.scrollToCaret();
    };
    // inserts a new line in document. if forceBRTag is set (not null)
    // a <br> tag will be inserted instead of creating a new paragraph.
    Viewport_CommandRouter.prototype.newLine = function (alternateMethod) {
        if (alternateMethod === void 0) { alternateMethod = null; }
        if (this.viewport.selection.getRange().isMultiRange() || this.viewport.selection.getRange().isOrphan()) {
            return;
        }
        this.viewport.undo.createUndoEntry('New Line');
        if (this.viewport.selection.getRange()) {
            this.viewport.selection.removeContents();
        }
        var rng = this.viewport.selection.getRange(), len = rng.length(), focus = rng.focusNode(), anchor = rng.anchorNode(), target = focus || anchor, targetNode = target.target.ownerBlockElement(), method, index = target.fragPos, jumpPosition = 0;
        // no target node, no new line ...
        if (targetNode === null) {
            return;
        }
        if (!alternateMethod) {
            //default
            method = targetNode.insertLinePolicy;
        }
        else {
            method = targetNode.alternateInsertLinePolicy;
        }
        if (method == 0 /* BR */) {
            jumpPosition = targetNode.createSurgery(index, false);
            // we're expecting that the jump position is a node begin.
            target.target = this.viewport.document.findNodeAtIndex(jumpPosition);
            target.fragPos = jumpPosition;
            var breakElement = this.viewport.document.createElement('br');
            // append the break *before* the target.target.
            target.target.parentNode.appendChild(breakElement, target.fragPos == target.target.FRAGMENT_END ? target.target.siblingIndex + 1 : target.target.siblingIndex);
            // force relayout;
            this.viewport.document.relayout(true);
            jumpPosition = breakElement.FRAGMENT_START;
            target.target = breakElement;
        }
        else {
            jumpPosition = targetNode.createSurgery(index, true, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote'].indexOf(targetNode.is()) >= 0 ? 'p' : targetNode.is());
            target.target = this.viewport.document.findNodeAtIndex(jumpPosition);
            target.fragPos = jumpPosition;
        }
        while (jumpPosition < this.viewport.document.fragment.length() && [3 /* CHARACTER */, 4 /* WHITE_SPACE */, 2 /* EOL */].indexOf(this.viewport.document.fragment.at(jumpPosition)) == -1) {
            jumpPosition++;
        }
        target.target = this.viewport.document.findNodeAtIndex(jumpPosition);
        target.fragPos = jumpPosition;
        rng.collapse(true);
        this.viewport.scrollToCaret();
    };
    // moves the caret, and optionally extends the selection to the
    // new caret position.
    Viewport_CommandRouter.prototype.moveCaret = function (movementType, amount, expandSelection) {
        var td, p;
        if (this.caretX && movementType != 1 /* LINE_VERTICAL */) {
            this.caretX = null;
        }
        var range = this.viewport.selection.getRange(), focus = range.focusNode(), lineIndex, lines, line, saveFragPos, altMovement, cell, caretTarget;
        if (range.isMultiRange()) {
            return;
        }
        if (range.length() == null && (!focus && !range.isOrphan())) {
            return;
        }
        else {
            if (!expandSelection) {
                range.collapse(true);
            }
        }
        range.setEventingState(false);
        try {
            switch (movementType) {
                case 2 /* CHARACTER */:
                    if (focus) {
                        saveFragPos = focus.fragPos;
                        try {
                            focus.moveByCharacters(amount);
                            if (!expandSelection) {
                                range.collapse(true);
                            }
                            if (saveFragPos == focus.fragPos) {
                                // no movement has been made.
                                altMovement = true;
                            }
                        }
                        catch (Exception) {
                            altMovement = true;
                        }
                    }
                    else {
                        altMovement = true;
                    }
                    if (altMovement) {
                        if (cell = this.viewport.selection.editorState.state.cell) {
                            if (amount == 1 && cell.nextCell()) {
                                cell = cell.nextCell();
                                caretTarget = cell.createCaretTarget(false);
                                if (caretTarget) {
                                    this.viewport.selection.anchorTo(caretTarget);
                                    this.viewport.selection.focusTo(caretTarget);
                                }
                                else {
                                    this.viewport.selection.anchorTo(new TRange_Target(cell, cell.FRAGMENT_START));
                                }
                            }
                            if (amount == -1 && cell.previousCell()) {
                                cell = cell.previousCell();
                                caretTarget = cell.createCaretTarget(true);
                                if (caretTarget) {
                                    this.viewport.selection.anchorTo(caretTarget);
                                    this.viewport.selection.focusTo(caretTarget);
                                }
                                else {
                                    this.viewport.selection.anchorTo(new TRange_Target(cell, cell.FRAGMENT_END));
                                }
                            }
                        }
                    }
                    this.viewport.scrollToCaret();
                    this.viewport.document.requestRepaint();
                    break;
                case 3 /* WORD */:
                    focus.moveByWords(amount);
                    if (!expandSelection) {
                        range.collapse(true);
                    }
                    this.viewport.scrollToCaret();
                    this.viewport.document.requestRepaint();
                    break;
                case 4 /* VIEWPORT */:
                    break;
                case 0 /* LINE_HORIZONTAL */:
                    if (Math.abs(amount) != 1) {
                        throw "Allowed values are -1 or 1.";
                    }
                    lineIndex = focus.getLineIndex();
                    if (lineIndex >= 0) {
                        lines = this.viewport.document.lines;
                        line = lines.at(lineIndex);
                        focus.fragPos = line[amount == -1 ? "fragmentIndexStart" : "fragmentIndexEnd"];
                        focus.target = this.viewport.document.findNodeAtIndex(focus.fragPos);
                        if (!expandSelection) {
                            range.collapse(true);
                        }
                        this.viewport.scrollToCaret();
                        this.viewport.document.requestRepaint();
                    }
                    break;
                case 1 /* LINE_VERTICAL */:
                    if (Math.abs(amount) != 1) {
                        throw "Allowed values are -1 or 1.";
                    }
                    if (focus) {
                        if (focus.target.ownerBlockElement().is() == 'td' && !expandSelection) {
                            td = focus.target.ownerBlockElement();
                            if (amount == -1 && td.isTheFirstCell() && !td.parentNode.parentNode.previousSibling()) {
                                p = td.documentElement.createElement('p');
                                td.parentNode.parentNode.parentNode.appendChild(p, 0);
                                td.documentElement.relayout(true);
                                this.viewport.selection.anchorTo(new TRange_Target(p, p.FRAGMENT_START));
                                return;
                            }
                            else if (amount == 1 && td.isTheLastCell() && !td.parentNode.parentNode.nextSibling()) {
                                p = td.documentElement.createElement('p');
                                td.parentNode.parentNode.parentNode.appendChild(p);
                                td.documentElement.relayout(true);
                                this.viewport.selection.anchorTo(new TRange_Target(p, p.FRAGMENT_START));
                                return;
                            }
                        }
                        lineIndex = focus.getLineIndex();
                        if (lineIndex !== null) {
                            lines = this.viewport.document.lines;
                            line = lines.at(lineIndex);
                            if (this.caretX === null) {
                                this.caretX = focus.details().paintAbsolute.x;
                            }
                            try {
                                line = lines.at(lineIndex + amount);
                            }
                            catch (jumpException) {
                                altMovement = true;
                            }
                            if (!altMovement) {
                                saveFragPos = focus.fragPos;
                                focus.fragPos = line.getFragmentPositionByAbsoluteX(this.caretX);
                                focus.target = this.viewport.document.findNodeAtIndex(focus.fragPos);
                                if (!expandSelection) {
                                    range.collapse(true);
                                }
                                if (saveFragPos == focus.fragPos) {
                                    altMovement = true;
                                }
                            }
                            if (altMovement) {
                                if (cell = this.viewport.selection.editorState.state.cell) {
                                    if (amount == -1 && cell.upperNeighbourCell()) {
                                        cell = cell.upperNeighbourCell();
                                        caretTarget = cell.createCaretTarget(true);
                                        if (caretTarget) {
                                            this.viewport.selection.anchorTo(caretTarget);
                                            this.viewport.selection.focusTo(caretTarget);
                                        }
                                        else {
                                            this.viewport.selection.anchorTo(new TRange_Target(cell, cell.isOrphanElement() ? cell.FRAGMENT_START : cell.FRAGMENT_START + 1));
                                        }
                                    }
                                    if (amount == 1 && cell.bottomNeighbourCell()) {
                                        cell = cell.bottomNeighbourCell();
                                        caretTarget = cell.createCaretTarget(false);
                                        if (caretTarget) {
                                            this.viewport.selection.anchorTo(caretTarget);
                                            this.viewport.selection.focusTo(caretTarget);
                                        }
                                        else {
                                            this.viewport.selection.anchorTo(new TRange_Target(cell, cell.isOrphanElement() ? cell.FRAGMENT_START : cell.FRAGMENT_START + 1));
                                        }
                                    }
                                }
                            }
                            this.viewport.scrollToCaret();
                            this.viewport.document.requestRepaint();
                        }
                    }
                    else {
                        this.viewport.selection.editorState.compute();
                        if (cell = this.viewport.selection.editorState.state.cell) {
                            if (amount == -1 && cell.upperNeighbourCell()) {
                                cell = cell.upperNeighbourCell();
                                caretTarget = cell.createCaretTarget(true);
                                if (caretTarget) {
                                    this.viewport.selection.anchorTo(caretTarget);
                                    this.viewport.selection.focusTo(caretTarget);
                                }
                                else {
                                    this.viewport.selection.anchorTo(new TRange_Target(cell, cell.isOrphanElement() ? cell.FRAGMENT_START : cell.FRAGMENT_START + 1));
                                }
                            }
                            if (amount == 1 && cell.bottomNeighbourCell()) {
                                cell = cell.bottomNeighbourCell();
                                caretTarget = cell.createCaretTarget(false);
                                if (caretTarget) {
                                    this.viewport.selection.anchorTo(caretTarget);
                                    this.viewport.selection.focusTo(caretTarget);
                                }
                                else {
                                    this.viewport.selection.anchorTo(new TRange_Target(cell, cell.isOrphanElement() ? cell.FRAGMENT_START : cell.FRAGMENT_START + 1));
                                }
                            }
                        }
                    }
                    break;
            }
        }
        catch (moveError) {
        }
        range.setEventingState(true);
        range.fire('changed');
    };
    // sets the boldness of the text. if state is null, then the boldness is toggled.
    Viewport_CommandRouter.prototype.bold = function (state) {
        if (state === void 0) { state = null; }
        var selection = this.viewport.selection, rng = selection.getRange(), len = rng.length();
        if (!len && !rng.isMultiRange()) {
            return;
        }
        this.viewport.undo.createUndoEntry('Bold');
        if (state === null) {
            state = !(this.viewport.selection.editorState.state.bold);
        }
        if (state) {
            this.viewport.selection.getRange().affectedRanges().unwrapFromElement('!b').unwrapFromElement('b').wrapInElement('b', null, null, function () {
                return this.style.fontWeight() != 'bold';
            }).end();
        }
        else {
            this.viewport.selection.getRange().affectedRanges().unwrapFromElement('!b').unwrapFromElement('b').wrapInElement('!b', null, null, function () {
                return this.style.fontWeight() == 'bold';
            }).end();
        }
        this.viewport.selection.editorState.compute();
    };
    // sets the strikeness of the text. if state is null, then the strikeness is toggled.
    Viewport_CommandRouter.prototype.strike = function (state) {
        if (state === void 0) { state = null; }
        var selection = this.viewport.selection, rng = selection.getRange(), len = rng.length();
        if (!len && !rng.isMultiRange()) {
            return;
        }
        this.viewport.undo.createUndoEntry('Strike');
        if (state === null) {
            state = !(this.viewport.selection.editorState.state.strike);
        }
        if (state) {
            this.viewport.selection.getRange().affectedRanges().unwrapFromElement('!u').unwrapFromElement('u').unwrapFromElement('!strike').unwrapFromElement('strike').wrapInElement('strike', null, null, function () {
                return this.style.textDecoration() != 'line-through';
            }).end();
        }
        else {
            this.viewport.selection.getRange().affectedRanges().unwrapFromElement('!u').unwrapFromElement('u').unwrapFromElement('!strike').unwrapFromElement('strike').wrapInElement('!strike', null, null, function () {
                return this.style.textDecoration() == 'line-through';
            }).end();
        }
        this.viewport.selection.editorState.compute();
    };
    // makes text italic or not. if state is null, the state is toggled.
    Viewport_CommandRouter.prototype.italic = function (state) {
        if (state === void 0) { state = null; }
        var selection = this.viewport.selection, rng = selection.getRange(), len = rng.length();
        if (!len && !rng.isMultiRange()) {
            return;
        }
        this.viewport.undo.createUndoEntry('Italic');
        if (state === null) {
            state = !(this.viewport.selection.editorState.state.italic);
        }
        if (state) {
            this.viewport.selection.getRange().affectedRanges().unwrapFromElement('!i').unwrapFromElement('i').wrapInElement('i', null, null, function () {
                return this.style.fontStyle() != 'italic';
            }).end();
        }
        else {
            this.viewport.selection.getRange().affectedRanges().unwrapFromElement('!i').unwrapFromElement('i').wrapInElement('!i', null, null, function () {
                return this.style.fontStyle() == 'italic';
            }).end();
        }
        this.viewport.selection.editorState.compute();
    };
    // underlines or not the text. if state is null, the state is toggled.
    Viewport_CommandRouter.prototype.underline = function (state) {
        if (state === void 0) { state = null; }
        var selection = this.viewport.selection, rng = selection.getRange(), len = rng.length();
        if (!len && !rng.isMultiRange()) {
            return;
        }
        this.viewport.undo.createUndoEntry('Underline');
        if (state === null) {
            state = !(this.viewport.selection.editorState.state.underline);
        }
        if (state) {
            this.viewport.selection.getRange().affectedRanges().unwrapFromElement('!u').unwrapFromElement('u').unwrapFromElement('strike').unwrapFromElement('!strike').wrapInElement('u', null, null, function () {
                return this.style.textDecoration() != 'underline';
            }).end();
        }
        else {
            this.viewport.selection.getRange().affectedRanges().unwrapFromElement('!u').unwrapFromElement('u').unwrapFromElement('strike').unwrapFromElement('!strike').wrapInElement('!u', null, null, function () {
                return this.style.textDecoration() == 'underline';
            }).end();
        }
        this.viewport.selection.editorState.compute();
    };
    // sets the text alignment.
    // @param alignment: string = enum( 'left', 'right', 'center', 'justified' ).
    // any other values will be considered "left".
    Viewport_CommandRouter.prototype.align = function (alignment) {
        if (alignment === void 0) { alignment = 'left'; }
        if (this.viewport.selection.getRange().anchorNode().target.is() == 'body' && (!this.viewport.selection.getRange().focusNode() && !this.viewport.selection.getRange().isOrphan())) {
            return;
        }
        this.viewport.undo.createUndoEntry('Align');
        if (['img', 'table'].indexOf(this.viewport.selection.getRange().anchorNode().target.is()) >= 0 && !this.viewport.selection.getRange().focusNode()) {
            if (alignment == 'left' || alignment == 'right' || alignment == 'center') {
                this.viewport.selection.getRange().anchorNode().target.style.float(alignment);
            }
        }
        else {
            var nodes = this.viewport.selection.getRange().affectedBlockNodes(), i, len;
            for (i = 0, len = nodes.length; i < len; i++) {
                nodes[i].style.textAlign(alignment);
            }
            if (nodes.length)
                this.viewport.selection.editorState.compute();
        }
        this.viewport.document.changeThrottler.run();
    };
    // copies the selection into the clipboard.
    Viewport_CommandRouter.prototype.copy = function (setClipboard) {
        if (setClipboard === void 0) { setClipboard = true; }
        if (setClipboard === null) {
            setClipboard = true;
        }
        var sel = this.viewport.selection, contents = sel.toString();
        if (!contents) {
            return; //cannot copy something empty
        }
        if (setClipboard) {
            Clipboard.singleton().setContents(contents, 'text/html', 0 /* COPY */);
        }
    };
    // cuts the selection into the clipboard.
    Viewport_CommandRouter.prototype.cut = function (setClipboard) {
        if (setClipboard === void 0) { setClipboard = true; }
        if (setClipboard === null) {
            setClipboard = true;
        }
        var sel = this.viewport.selection, contents = sel.toString();
        if (!contents) {
            return;
        }
        this.viewport.undo.createUndoEntry('Cut');
        if (setClipboard) {
            Clipboard.singleton().setContents(contents, 'text/html', 1 /* CUT */);
        }
        sel.removeContents();
    };
    // pastes a text of format contentType.
    // @content: string. if null, the content from the clipboard will be 
    // used instead.
    // @contentType: the type of the content. allowed values can be "text" or "html".
    Viewport_CommandRouter.prototype.paste = function (content, contentType) {
        if (content === void 0) { content = null; }
        if (contentType === void 0) { contentType = null; }
        var data, selection = this.viewport.selection, rng = selection.getRange();
        if (!rng.focusNode() && rng.anchorNode().target.is() == 'body') {
            return; // Cannot paste if selection don't have a focus.
        }
        if (rng.isMultiRange()) {
            console.warn("TO IMPLEMENT PASTE IN MULTIRANGE!");
            return;
        }
        if (content === null) {
            data = Clipboard.singleton().getContents();
            if (data === null) {
                return;
            }
            else {
                content = data.data;
                contentType = data.type;
            }
        }
        if (!content) {
            return;
        }
        this.viewport.undo.createUndoEntry('Paste');
        if (['text/plain', 'text/html'].indexOf(contentType) == -1) {
            throw "ERR_BAD_CONTENT_TYPE!";
        }
        if (contentType == 'text/plain') {
            this.insertText(content);
        }
        else {
            this.viewport.selection.insertHTML(content);
        }
    };
    // indents text with a number of tabs on the left. A tab width is 20px.
    Viewport_CommandRouter.prototype.indent = function (tabs) {
        if (tabs === void 0) { tabs = null; }
        var nodes = this.viewport.selection.getRange().affectedBlockNodes(), i, len;
        if (nodes.length) {
            this.viewport.undo.createUndoEntry('Indent');
        }
        for (i = 0, len = nodes.length; i < len; i++) {
            nodes[i].tabStop(nodes[i].tabStop() + 1);
        }
    };
    // unindents text with a number of tabs on the left. A tab width is 20px.
    Viewport_CommandRouter.prototype.unindent = function (tabs) {
        if (tabs === void 0) { tabs = null; }
        var nodes = this.viewport.selection.getRange().affectedBlockNodes(), i, len;
        if (nodes.length) {
            this.viewport.undo.createUndoEntry('Unindent');
        }
        for (i = 0, len = nodes.length; i < len; i++) {
            nodes[i].tabStop(nodes[i].tabStop() - 1);
        }
    };
    // sets the text alignment as "sup", "sub", or "normal".
    // "sup" stands for superscript
    // "sub" stands for subscript
    Viewport_CommandRouter.prototype.valign = function (verticalAlignmentType) {
        if (verticalAlignmentType === void 0) { verticalAlignmentType = 'normal'; }
        if (['sup', 'sub', 'normal'].indexOf(verticalAlignmentType) == -1) {
            throw "ERR_UNKNOWN_VALIGN_TYPE";
        }
        var selection = this.viewport.selection, rng = selection.getRange(), len = rng.length();
        if (!len && !rng.isMultiRange()) {
            return;
        }
        this.viewport.undo.createUndoEntry('Subscript / Superscript');
        rng.affectedRanges().unwrapFromElement('sub').unwrapFromElement('sup').wrapInElement(verticalAlignmentType, null, null, function () {
            return verticalAlignmentType == 'sup' || verticalAlignmentType == 'sub';
        }).end();
        this.viewport.selection.editorState.compute();
    };
    // sets the font of the text.
    Viewport_CommandRouter.prototype.font = function (fontFamily) {
        if (fontFamily === void 0) { fontFamily = "Arial"; }
        var selection = this.viewport.selection, rng = selection.getRange(), len = rng.length();
        if (!len && !rng.isMultiRange()) {
            return;
        }
        this.viewport.undo.createUndoEntry('Font');
        this.viewport.selection.getRange().affectedRanges().unwrapFromElement('font').wrapInElement('font', 'name', fontFamily, function () {
            return fontFamily ? this.style.fontFamily() != fontFamily : false;
        }).end();
        this.viewport.selection.editorState.compute();
    };
    // sets the color of the selected text. if empty value
    // is used, color is removed.
    Viewport_CommandRouter.prototype.color = function (colorName) {
        if (colorName === void 0) { colorName = ""; }
        var selection = this.viewport.selection, rng = selection.getRange(), len = rng.length();
        if (!len && !rng.isMultiRange()) {
            return;
        }
        this.viewport.undo.createUndoEntry('Color');
        this.viewport.selection.getRange().affectedRanges().unwrapFromElement('color').wrapInElement('color', 'name', colorName, function () {
            return colorName ? this.style.color() != colorName : false;
        }).end();
        this.viewport.selection.editorState.compute();
    };
    // sets the backgroundColor of the selected text. if empty value
    // is used, color is removed.
    //
    // BETA NOTE: background will be set to root elements, not inline.
    Viewport_CommandRouter.prototype.bgColor = function (colorName) {
        if (colorName === void 0) { colorName = ""; }
        var selection = this.viewport.selection, rng = selection.getRange(), nodes = rng.affectedBlockNodes(), i = 0, len = nodes.length;
        if (nodes.length) {
            this.viewport.undo.createUndoEntry('Background Color');
            for (i = 0; i < len; i++) {
                nodes[i].setAttribute('bgcolor', colorName);
            }
            this.viewport.selection.editorState.compute();
        }
    };
    // sets the font size. value can be also relative
    // using + or -. Eg: fontSize( "+1" ) will increase the text size
    // with 1 value.
    Viewport_CommandRouter.prototype.size = function (fontSize) {
        if (fontSize === void 0) { fontSize = ''; }
        var selection = this.viewport.selection, rng = selection.getRange(), len = rng.length();
        if (!len && !rng.isMultiRange()) {
            return;
        }
        this.viewport.undo.createUndoEntry('Font Size');
        this.viewport.selection.getRange().affectedRanges().unwrapFromElement('size').wrapInElement('size', 'value', fontSize, function () {
            return fontSize ? String(this.style.fontSize()) != fontSize : false;
        }).end();
        this.viewport.selection.editorState.compute();
    };
    // wraps into ul or ol the blocks.
    Viewport_CommandRouter.prototype.list = function (listType, on) {
        if (on === void 0) { on = null; }
        var become = '', selection = this.viewport.selection, rng = selection.getRange(), nodes = rng.affectedBlockNodes(), i = 0, len = nodes.length;
        if (rng.isMultiRange()) {
            return;
        }
        this.viewport.undo.createUndoEntry('List');
        if (on !== null) {
            become = on ? listType : 'p';
        }
        else {
            become = this.viewport.selection.editorState.state.listType == listType ? 'p' : listType;
        }
        rng.save();
        for (i = 0; i < len; i++) {
            nodes[i].becomeElement(become);
        }
        rng.restore();
        this.viewport.selection.editorState.compute();
    };
    // sets the affected block nodes to be "normal", or "h1".."h6"
    Viewport_CommandRouter.prototype.blockLevel = function (blockType) {
        if (["normal", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6"].indexOf(blockType) == -1) {
            throw "Invalid block type!";
        }
        var selection = this.viewport.selection, rng = selection.getRange(), nodes = rng.affectedBlockNodes(), i = 0, len = nodes.length;
        if (rng.isMultiRange()) {
            return;
        }
        this.viewport.undo.createUndoEntry('Set Block Name');
        rng.save();
        for (i = 0; i < len; i++) {
            switch (blockType) {
                case 'normal':
                    if (['p', 'td', 'table', 'tr', 'body'].indexOf(nodes[i].nodeName) == -1) {
                        nodes[i].becomeElement('p');
                    }
                    break;
                case 'blockquote':
                case 'h1':
                case 'h2':
                case 'h3':
                case 'h4':
                case 'h5':
                case 'h6':
                    if (nodes[i].nodeName != blockType) {
                        nodes[i].becomeElement(blockType);
                    }
                    break;
            }
        }
        rng.restore();
    };
    Viewport_CommandRouter.prototype.clearFormatting = function () {
        var selection = this.viewport.selection, rng = selection.getRange(), len = rng.length();
        if (!len && !rng.isMultiRange()) {
            return;
        }
        this.viewport.undo.createUndoEntry('Clear Formatting');
        this.viewport.selection.getRange().affectedRanges().unwrapFromElement('size').unwrapFromElement('font').unwrapFromElement('b').unwrapFromElement('!b').unwrapFromElement('i').unwrapFromElement('!i').unwrapFromElement('u').unwrapFromElement('!u').unwrapFromElement('strike').unwrapFromElement('!strike').unwrapFromElement('color').end();
        this.viewport.selection.editorState.compute();
    };
    Viewport_CommandRouter.prototype.link = function (href, text, target) {
        if (text === void 0) { text = null; }
        if (target === void 0) { target = null; }
        this.viewport.undo.createUndoEntry('Link');
        /* If text is NULL, we create a batch, unwrap it from A, and wrap it in a[href=href][target=target]
           Otherwise we insert HTML string @cursor position */
        if (text === null) {
            this.viewport.selection.getRange().affectedRanges().unwrapFromElement('a').unwrapFromElement('u').unwrapFromElement('!u').unwrapFromElement('strike').unwrapFromElement('!strike').wrapInElement('a', ['href', 'target'], [href || '', target || '']).end();
        }
        else {
            if (this.viewport.selection.getRange().isMultiRange()) {
                return;
            }
            var a = this.viewport.document.createElement('a');
            a.setAttribute('href', href);
            a.setAttribute('target', target);
            a.appendChild(this.viewport.document.createTextNode(text || ' '));
            this.viewport.selection.insertHTML(a.outerHTML());
        }
        this.viewport.selection.editorState.compute();
    };
    Viewport_CommandRouter.prototype.unlink = function () {
        var selection = this.viewport.selection, rng = selection.getRange(), nodes, aNodes = [], i = 0, len = 0, node, block;
        this.viewport.undo.createUndoEntry('Unlink');
        rng.save();
        if (rng.length() || rng.isMultiRange()) {
            nodes = rng.createContextualFragment().affectedInlineElements();
            for (i = 0, len = nodes.length; i < len; i++) {
                if (nodes[i].is() == 'a') {
                    aNodes.push(nodes[i]);
                }
            }
        }
        else {
            // check if the element under cursor is an "A".
            if (rng.focusNode()) {
                node = rng.focusNode().target;
                block = node.ownerBlockElement();
                while (node != block) {
                    if (node.is() == 'a') {
                        aNodes.push(node);
                        break;
                    }
                    node = node.parentNode;
                }
            }
        }
        for (i = 0, len = aNodes.length; i < len; i++) {
            aNodes[i].unwrap();
        }
        selection.viewport.document.removeOrphanNodes();
        selection.viewport.document.defragment();
        this.viewport.selection.editorState.compute();
        rng.restore();
    };
    Viewport_CommandRouter.prototype.undo = function () {
        if (this.viewport.undo.canUndo()) {
            this.viewport.undo.undo();
        }
    };
    Viewport_CommandRouter.prototype.redo = function () {
        if (this.viewport.undo.canRedo()) {
            this.viewport.undo.redo();
        }
    };
    return Viewport_CommandRouter;
})(Events);
var Clipboard = (function (_super) {
    __extends(Clipboard, _super);
    /* Should not be used by the programmer, but instead use the static "singleton" method,
       in order to access it as a singleton
     */
    function Clipboard() {
        _super.call(this);
        this.effect = 0 /* COPY */;
        //protected data          : TClipboardItem   = null;
        this.trap = document.createElement('textarea');
        this.activeElement = null; // will point to an instance of a viewport.canvas
        this.docScrollTop = null;
        this.docScrollLeft = null;
        (function (me) {
            me.on('cut', function (evt) {
                if (!me.trap.parentNode || me.trap != document['activeElement']) {
                }
                else {
                    if (!me.trap.value) {
                        return;
                    }
                    me.setContents(me.trap.value, 'text/html', 1 /* CUT */);
                    setTimeout(function () {
                        // the command is inside the trap
                        me.activeElement.execCommand(11 /* CUT */, false);
                    }, 5);
                }
            });
            me.on('copy', function (evt) {
                if (!me.trap.parentNode || me.trap != document['activeElement']) {
                }
                else {
                    if (!me.trap.value) {
                        return;
                    }
                    // the copy occured in the trap.
                    me.setContents(me.trap.value, 'text/html', 0 /* COPY */);
                }
            });
            me.on('paste', function (evt) {
                if (!me.trap.parentNode || me.trap != document['activeElement']) {
                    // paste outside the trap...
                    return;
                }
                if (evt.clipboardData) {
                    var asText = evt.clipboardData.getData('text/plain'), asHTML = evt.clipboardData.getData('text/html');
                    if (asHTML) {
                        me.setContents(asHTML, 'text/html');
                    }
                    else {
                        me.setContents(asText, /<[a-z\][\s\S]*>/i.test(asText) ? 'text/html' : 'text/plain');
                    }
                    me.activeElement.execCommand(12 /* PASTE */);
                }
                else {
                    setTimeout(function () {
                        me.fire('after-paste');
                    }, 5);
                }
            });
            me.on('after-paste', function () {
                var asText = me.trap.value;
                me.trap.value = this.activeElement.onclipboardtrap();
                me.setContents(asText, /<[a-z\][\s\S]*>/i.test(asText) ? 'text/html' : 'text/plain');
                me.activeElement.execCommand(12 /* PASTE */);
            });
            me.trap.addEventListener('keyup', function (evt) {
                if (evt.keyCode == 17) {
                    me.uninstallTrap();
                }
                else {
                    me.activeElement.forwardKeyboardEvent('keyup', evt);
                }
            }, true);
            me.trap.addEventListener('keypress', function (evt) {
                me.activeElement.forwardKeyboardEvent('keypress', evt);
            }, true);
            me.trap.addEventListener('keydown', function (evt) {
                me.activeElement.forwardKeyboardEvent('keydown', evt);
            });
        })(this);
        //this.trap.readOnly = true;
        this.trap.style.cssText = 'position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; width: 50px; height: 50px; display: block; background-color: red; opacity: 0 !important; z-index: 1000; overflow: hidden;';
    }
    Object.defineProperty(Clipboard.prototype, "data", {
        get: function () {
            var v = window.localStorage.getItem('_clipboard_data_');
            if (v) {
                return JSON.parse(v);
            }
            else {
                return null;
            }
        },
        set: function (v) {
            window.localStorage.setItem("_clipboard_data_", JSON.stringify(v));
        },
        enumerable: true,
        configurable: true
    });
    Clipboard.singleton = function () {
        return Clipboard.$instance || (Clipboard.$instance = new Clipboard());
    };
    Clipboard.prototype.isEmpty = function () {
        return this.data == null;
    };
    Clipboard.prototype.setContents = function (content, contentType, effect) {
        if (contentType === void 0) { contentType = 'text/plain'; }
        if (effect === void 0) { effect = 0 /* COPY */; }
        this.effect = effect;
        this.data = {
            "data": content || '',
            "type": contentType || ''
        };
    };
    Clipboard.prototype.getContents = function (autoClear) {
        if (autoClear === void 0) { autoClear = true; }
        var returnValue = this.data || null;
        if (autoClear && this.effect == 1 /* CUT */) {
            this.data = null;
        }
        return returnValue;
    };
    Clipboard.prototype.installTrap = function () {
        if (typeof document.activeElement['onclipboardtrap'] == 'undefined') {
            return;
        }
        this.docScrollTop = document.body.scrollTop;
        this.docScrollLeft = document.body.scrollLeft;
        this.activeElement = document.activeElement;
        this.trap.style.top = document.body.scrollTop + "px";
        this.trap.style.left = document.body.scrollLeft + "px";
        document.body.appendChild(this.trap);
        this.trap.value = this.activeElement.onclipboardtrap();
        this.trap.focus();
        this.trap.select();
        //console.log( 'trap installed' );
    };
    Clipboard.prototype.uninstallTrap = function () {
        if (this.trap.parentNode)
            document.body.removeChild(this.trap);
        if (this.activeElement) {
            this.activeElement.focus();
        }
        document.body.scrollTop = this.docScrollTop;
        document.body.scrollLeft = this.docScrollLeft;
        //console.log( 'trap uninstalled' );
    };
    Clipboard.$instance = null;
    return Clipboard;
})(Events);
window.addEventListener('load', function (e) {
    document.body.addEventListener('keydown', function (evt) {
        if (evt.keyCode == 17) {
            Clipboard.singleton().installTrap();
        }
    }, true);
    document.body.addEventListener('keyup', function (evt) {
        if (evt.keyCode == 17 && Clipboard.singleton().trap.parentNode) {
            Clipboard.singleton().uninstallTrap();
        }
    });
    document.body.addEventListener('cut', function (evt) {
        Clipboard.singleton().fire('cut', evt);
    }, true);
    document.body.addEventListener('copy', function (evt) {
        Clipboard.singleton().fire('copy', evt);
    }, true);
    document.body.addEventListener('paste', function (evt) {
        Clipboard.singleton().fire('paste', evt);
    }, true);
});
var UndoManager = (function (_super) {
    __extends(UndoManager, _super);
    function UndoManager(viewport) {
        _super.call(this);
        this.entries = [];
        this.index = 0;
        this.maxUndoLevels = 100;
        this.locked = false;
        this.prevOp = null;
        this.viewport = viewport;
    }
    UndoManager.prototype.reset = function () {
        if (this.locked) {
            return;
        }
        this.entries = [];
        this.index = 0;
        this.prevOp = null;
        this.createUndoEntry('Document Load');
        // console.info( 'The undo manager has been reseted!' );
    };
    UndoManager.prototype.createUndoEntry = function (description) {
        if (description === void 0) { description = 'modification'; }
        this.prevOp = null;
        var selection = this.viewport.selection, rng = selection.getRange(), numEntries = this.entries.length, entry = {
            "description": description || "modification",
            "document": this.viewport.document.innerHTML(),
            "multiRange": rng.isMultiRange() ? rng.anchorNode().target.serialize() : null,
            "focus": rng.focusNode() ? rng.focusNode().fragPos : null,
            "anchor": rng.anchorNode() ? rng.anchorNode().fragPos : null,
            "time": Date.now()
        };
        if (numEntries && this.index == numEntries && this.entries[numEntries - 1].description == entry.description && (entry.time - this.entries[numEntries - 1].time) < 1000) {
            switch (this.entries[numEntries - 1].description) {
                case 'Delete Text':
                case 'Write':
                case 'New Line':
                    //console.info( 'Replace undo', numEntries, this.index );
                    this.entries[numEntries - 1] = entry; //replace entry
                    return;
                    break;
            }
        }
        //console.warn('Add undo' );
        this.truncate();
        if (this.entries.length >= this.maxUndoLevels) {
            this.entries.shift();
            this.index--;
        }
        this.entries.push(entry);
        this.index = this.entries.length;
        this.fire('changed');
    };
    UndoManager.prototype.truncate = function () {
        //console.warn( 'truncate...' );
        this.entries = this.entries.slice(0, this.index);
    };
    UndoManager.prototype.canUndo = function () {
        return this.index > 0;
    };
    UndoManager.prototype.canRedo = function () {
        return this.entries[this.index] ? true : false;
    };
    UndoManager.prototype.restore = function (entry) {
        this.locked = true;
        this.viewport.document.lockOrphan();
        this.viewport.value(entry.document);
        this.viewport.document.unlockOrphan();
        var selection = this.viewport.selection, rng = selection.getRange();
        if (!entry.multiRange) {
            selection.anchorTo(new TRange_Target(this.viewport.document.findNodeAtIndex(entry.anchor), entry.anchor));
            if (entry.focus !== null) {
                selection.focusTo(new TRange_Target(this.viewport.document.findNodeAtIndex(entry.focus), entry.focus));
            }
        }
        else {
            var multiRange = HTML_MultiRange.unserialize(this.viewport.document, entry.multiRange);
            selection.anchorTo(new TRange_Target(multiRange, multiRange.FRAGMENT_START));
        }
        this.locked = false;
        return true;
    };
    UndoManager.prototype.undo = function () {
        if (this.prevOp != 'undo') {
            if (this.prevOp != 'redo') {
                this.createUndoEntry('Last document state');
                this.index--;
            }
            this.prevOp = 'undo';
        }
        if (this.index > 0) {
            this.index--;
            this.restore(this.entries[this.index]);
            this.fire('changed');
            return true;
        }
        else {
            return false;
        }
    };
    UndoManager.prototype.redo = function () {
        if (this.prevOp != 'redo') {
            if (this.prevOp == 'undo') {
                this.index++;
            }
            this.prevOp = 'redo';
        }
        if (this.canRedo()) {
            this.index++;
            this.restore(this.entries[this.index - 1]);
            this.fire('changed');
            if (!this.canRedo()) {
                this.index--;
                this.prevOp = null;
                this.entries.pop();
            }
            return true;
        }
        else {
            return false;
        }
    };
    UndoManager.prototype.undoSummary = function () {
        var out = [], i = 0;
        for (i = 0; i < this.index; i++) {
            out.push({
                "index": i,
                "description": this.entries[i].description
            });
        }
        return out;
    };
    UndoManager.prototype.redoSummary = function () {
        var out = [], i = 0;
        for (i = this.index; i < this.entries.length; i++) {
            out.push({
                "index": i,
                "description": this.entries[i].description
            });
        }
        return out;
    };
    return UndoManager;
})(Events);
var Fragment = (function () {
    function Fragment(document) {
        this._at = [];
        this._length = 0;
        this._doc = null;
        if (!document) {
            throw "ERR_BAD_DOCUMENT";
        }
        else {
            this._doc = document;
        }
    }
    Fragment.prototype.document = function () {
        return this._doc;
    };
    Fragment.prototype.reset = function () {
        this._length = 0;
    };
    // returns a part of the fragment, for debugging purposes
    Fragment.prototype.slice = function (index, length) {
        var out = [], i = 0;
        for (i = 0; i < length; i++) {
            out.push(this._at[index + i]);
        }
        return out;
    };
    Fragment.prototype.sliceDebug = function (index, length, cursorPos) {
        if (cursorPos === void 0) { cursorPos = null; }
        if (index < 0) {
            index = 0;
        }
        var s = '';
        s = this.slice(index, length).join('').replace(new RegExp(String(0 /* NODE_START */), 'g'), '<').replace(new RegExp(String(1 /* NODE_END */), 'g'), '>').replace(new RegExp(String(3 /* CHARACTER */), 'g'), '*').replace(new RegExp(String(4 /* WHITE_SPACE */), 'g'), ' ').replace(new RegExp(String(2 /* EOL */), 'g'), '|');
        if (cursorPos) {
            s = s.substr(0, cursorPos - index) + '_' + s.substr(cursorPos - index);
        }
        return s;
    };
    Fragment.prototype.add = function (what, index) {
        if (index === void 0) { index = null; }
        if (index == null) {
            this._at[this._length++] = what;
        }
        else {
            if (index < this._length) {
                this._at[index] = what;
            }
            else {
                this._length = index + 1;
                this._at[index] = what;
            }
        }
    };
    Fragment.prototype.at = function (index, value) {
        if (value === void 0) { value = null; }
        if (index < 0 || index >= this._length) {
            throw "OFFSET_OUT_BOUNDS ( requested: " + index + ", allowedMin: 0, allowedMax: " + (this._length - 1) + ")";
        }
        else {
            if (value === null) {
                return this._at[index] == void 0 ? null : this._at[index];
            }
            else {
                this.add(value, index);
            }
        }
    };
    Fragment.prototype.length = function (value) {
        if (value === void 0) { value = null; }
        if (value == null) {
            return this._length;
        }
        else {
            if (value < 0) {
                throw "OFFSET_OUT_BOUNDS";
            }
            else {
                this._length = value;
            }
        }
    };
    Fragment.prototype.getNodeAtIndex = function (index) {
        return this._doc.findNodeAtIndex(index);
    };
    Fragment.prototype.createTargetAt = function (pos) {
        var i = 0, element;
        switch (pos) {
            case 0 /* DOC_BEGIN */:
                for (i = 0; i < this._length; i++) {
                    if (this._at[i] == 2 /* EOL */ || this._at[i] == 3 /* CHARACTER */ || this._at[i] == 4 /* WHITE_SPACE */) {
                        element = this.getNodeAtIndex(i);
                        return new TRange_Target(element, i);
                    }
                }
                return new TRange_Target(this._doc, this._doc.FRAGMENT_START);
                break;
            case 1 /* DOC_END */:
                for (i = this._length - 1; i >= 0; i--) {
                    if (this._at[i] == 2 /* EOL */ || this._at[i] == 3 /* CHARACTER */ || this._at[i] == 4 /* WHITE_SPACE */) {
                        element = this.getNodeAtIndex(i);
                        return new TRange_Target(element, i);
                    }
                }
                return new TRange_Target(this._doc, this._doc.FRAGMENT_END);
                break;
            default:
                throw "ERR_ILLEGAL_POS_DESCRIPTOR";
                break;
        }
        return null;
    };
    Fragment.prototype.getIndexAt = function (pos) {
        var i = 0;
        switch (pos) {
            case 0 /* DOC_BEGIN */:
                for (i = 0; i < this._length; i++) {
                    if (this._at[i] == 2 /* EOL */ || this._at[i] == 3 /* CHARACTER */ || this._at[i] == 4 /* WHITE_SPACE */) {
                        return i;
                    }
                }
                break;
            case 1 /* DOC_END */:
                for (i = this._length - 1; i >= 0; i--) {
                    if (this._at[i] == 2 /* EOL */ || this._at[i] == 3 /* CHARACTER */ || this._at[i] == 4 /* WHITE_SPACE */) {
                        return i;
                    }
                }
                break;
            default:
                throw "ERR_ILLEGAL_POS_DESCRIPTOR";
                break;
        }
        return null;
    };
    Fragment.prototype.createLockTarget = function (at, direction, lockName) {
        if (lockName === void 0) { lockName = null; }
        return new Fragment_CaretLock(this, at, direction, lockName);
    };
    return Fragment;
})();
var Fragment_Contextual = (function () {
    function Fragment_Contextual(fragment, indexStart, indexEnd, isEmpty) {
        if (indexStart === void 0) { indexStart = 0; }
        if (indexEnd === void 0) { indexEnd = 0; }
        if (isEmpty === void 0) { isEmpty = false; }
        this.fragment = fragment;
        this.isEmpty = isEmpty;
        this.start = 0;
        this.end = 0;
        this.parts = [];
        var tmp = 0;
        if (indexStart > indexEnd) {
            tmp = indexStart;
            indexStart = indexEnd;
            indexEnd = tmp;
        }
        this.start = indexStart;
        this.end = indexEnd;
    }
    // compute the parts of the contextual fragment.
    Fragment_Contextual.prototype.compute = function () {
        var i = 0, currentNode = null, element = null, at, iStart = 0, iStop = 0, start = this.start, end = this.end;
        if (this.isEmpty) {
            return this;
        }
        this.parts = [];
        if (start < 0) {
            start = 0;
        }
        if (end >= this.fragment.length()) {
            end = this.fragment.length() - 1;
        }
        for (i = start; i <= end; i++) {
            at = this.fragment.at(i);
            switch (at) {
                case 0 /* NODE_START */:
                    if (currentNode !== null) {
                        this.parts.push(new Fragment_Contextual_TextNode(currentNode, iStart, iStop));
                        currentNode = null;
                    }
                    this.parts.push(new Fragment_Contextual_NodeStart(element = this.fragment.getNodeAtIndex(i)));
                    break;
                case 1 /* NODE_END */:
                    if (currentNode !== null) {
                        this.parts.push(new Fragment_Contextual_TextNode(currentNode, iStart, iStop));
                        currentNode = null;
                    }
                    this.parts.push(new Fragment_Contextual_NodeEnd(element = this.fragment.getNodeAtIndex(i)));
                    currentNode = null;
                    break;
                case 2 /* EOL */:
                case 3 /* CHARACTER */:
                case 4 /* WHITE_SPACE */:
                    //console.log( i, at == FragmentItem.EOL ? 'eol' : ( at == FragmentItem.CHARACTER ? 'chr' : 'ws' ) );
                    if (currentNode === null) {
                        currentNode = this.fragment.getNodeAtIndex(i);
                        iStart = i;
                        iStop = i;
                    }
                    else {
                        iStop = i;
                    }
                    break;
            }
        }
        if (currentNode !== null) {
            if (!currentNode.isBR) {
                this.parts.push(new Fragment_Contextual_TextNode(currentNode, iStart, iStop));
            }
            currentNode = null;
        }
        return this;
    };
    Fragment_Contextual.prototype.affectedTextNodes = function () {
        var out = [], i, len;
        this.compute();
        for (i = 0, len = this.parts.length; i < len; i++) {
            if (this.parts[i].type == 2 /* TEXT */) {
                out.push(this.parts[i].node);
            }
        }
        return out;
    };
    Fragment_Contextual.prototype.affectedInlineElements = function () {
        var out = [], i, len, node;
        this.compute();
        for (i = 0, len = this.parts.length; i < len; i++) {
            switch (this.parts[i].type) {
                case 1 /* NODE_END */:
                    node = this.parts[i].node;
                    break;
                case 0 /* NODE_START */:
                    node = this.parts[i].node;
                    break;
                case 2 /* TEXT */:
                    node = this.parts[i].node.parentNode;
                    break;
            }
            if (out.indexOf(node) == -1 && node.style.display() == 'inline') {
                out.push(node);
            }
        }
        out.sort(function (a, b) {
            return a.FRAGMENT_START - b.FRAGMENT_START;
        });
        return out;
    };
    Fragment_Contextual.prototype.affectedBlockNodes = function () {
        var out = [], i, len, node;
        this.compute();
        for (i = 0, len = this.parts.length; i < len; i++) {
            switch (this.parts[i].type) {
                case 1 /* NODE_END */:
                    node = this.parts[i].node;
                    if (['tr', 'table'].indexOf(node.nodeName) >= 0) {
                        continue;
                    }
                    else {
                        node = node.ownerBlockElement();
                    }
                    break;
                case 0 /* NODE_START */:
                    node = this.parts[i].node;
                    if (['tr', 'table'].indexOf(node.nodeName) >= 0) {
                        continue;
                    }
                    else {
                        node = node.ownerBlockElement();
                    }
                    break;
                case 2 /* TEXT */:
                    node = this.parts[i].node.ownerBlockElement();
                    break;
            }
            if (out.indexOf(node) == -1) {
                out.push(node);
            }
        }
        out.sort(function (a, b) {
            return a.FRAGMENT_START - b.FRAGMENT_START;
        });
        return out;
    };
    Fragment_Contextual.prototype.createDettachedCollection = function (items, ownerBlockElement) {
        var allChildNodesSnapshot = [], i = 0, len = ownerBlockElement.childNodes.length, surgeryStart = 0, surgeryEnd = 0;
        for (i = 0; i < len; i++) {
            allChildNodesSnapshot.push(ownerBlockElement.childNodes[i]);
        }
        // reduce the list with the items with the first and last nodes only
        if (items.length > 2) {
            items = [items[0], items[items.length - 1]];
        }
        if (items.length == 1) {
            /* If we have only a single item in the dettached collection and this one is not a text node, we return
               an empty collection */
            if (items[0].type != 2 /* TEXT */) {
                return null;
            }
            surgeryStart = items[0].start;
            surgeryEnd = items[0].end;
        }
        else {
            switch (items[0].type) {
                case 2 /* TEXT */:
                    surgeryStart = items[0].start;
                    break;
                case 0 /* NODE_START */:
                    surgeryStart = items[0].node.FRAGMENT_START;
                    break;
                case 1 /* NODE_END */:
                    surgeryStart = items[0].node.FRAGMENT_END;
                    break;
            }
            switch (items[1].type) {
                case 2 /* TEXT */:
                    surgeryEnd = items[1].end;
                    break;
                case 0 /* NODE_START */:
                    surgeryEnd = items[1].node.FRAGMENT_START;
                    break;
                case 1 /* NODE_END */:
                    surgeryEnd = items[1].node.FRAGMENT_END;
                    break;
            }
        }
        return new TNode_Collection_Dettached(ownerBlockElement, surgeryStart, surgeryEnd);
    };
    /* The affected ranges returns an array of collections with the child nodes
       of the block elements from the selection. This is usefull when we want to
       enclose the text in <b><i><u><sup><sub><font><color> tags
     */
    Fragment_Contextual.prototype.affectedRanges = function () {
        var collection = null, previousBlockNode = null, currentBlockNode, tempBlockNode, node, i = 0, len = 0, j = 0, n = 0, k = 0, returnValue = [], currentSet = [], ranges = [], subLength = 0;
        this.compute();
        for (i = 0, len = this.parts.length; i < len; i++) {
            switch (this.parts[i].type) {
                case 2 /* TEXT */:
                    node = this.parts[i].node;
                    currentBlockNode = node.ownerBlockElement();
                    break;
                case 0 /* NODE_START */:
                    node = this.parts[i].node;
                    currentBlockNode = node.ownerBlockElement();
                    break;
                case 1 /* NODE_END */:
                    node = this.parts[i].node;
                    currentBlockNode = node.ownerBlockElement();
                    break;
            }
            if (currentBlockNode != previousBlockNode) {
                currentSet = [];
                // node changed, find if the whole node is in our parts
                subLength = 1;
                for (j = i + 1; j < len; j++) {
                    switch (this.parts[j].type) {
                        case 2 /* TEXT */:
                            tempBlockNode = this.parts[j].node.ownerBlockElement();
                            break;
                        case 0 /* NODE_START */:
                            tempBlockNode = this.parts[j].node.ownerBlockElement();
                            break;
                        case 1 /* NODE_END */:
                            tempBlockNode = this.parts[j].node.ownerBlockElement();
                            break;
                    }
                    if (tempBlockNode == currentBlockNode) {
                        subLength++;
                    }
                    else {
                        break;
                    }
                }
                for (k = i; k < i + subLength; k++) {
                    currentSet.push(this.parts[k]);
                }
                // This IF FUCKING ATE MY SOUL BECAUSE THE TR ELEMENTS SHOULD BE TREATED SPECIAL!!!
                if (!(currentSet.length == 2 && currentSet[0].node.is() == 'tr')) {
                    ranges.push({
                        "parent": currentBlockNode,
                        "set": currentSet
                    });
                }
                i += subLength - 1;
                previousBlockNode = currentBlockNode;
            }
        }
        for (i = 0, len = ranges.length; i < len; i++) {
            returnValue.push(this.createDettachedCollection(ranges[i].set, ranges[i].parent));
        }
        returnValue = Helper.filter(returnValue, function (item) {
            return item != null;
        });
        this.fragment.document().canRelayout = false;
        for (i = 0, len = returnValue.length; i < len; i++) {
            returnValue[i].createSlices();
        }
        this.fragment.document().canRelayout = true;
        this.fragment.document().relayout(true);
        for (i = 0, len = returnValue.length; i < len; i++) {
            returnValue[i].createRanges();
        }
        return returnValue;
    };
    Fragment_Contextual.prototype.toString = function (format, closeTags) {
        if (format === void 0) { format = 'text/html'; }
        if (closeTags === void 0) { closeTags = false; }
        this.compute();
        var out = [''], stack = 0, i = 0, len = 0, flush = [];
        if (format == 'text/html' || format == null || format == 'html' || format == '') {
            if (!closeTags) {
                for (i = 0, len = this.parts.length; i < len; i++) {
                    out.push(this.parts[i].toString());
                }
            }
            else {
                for (i = 0, len = this.parts.length; i < len; i++) {
                    out.push(this.parts[i].toString());
                    switch (this.parts[i].type) {
                        case 2 /* TEXT */:
                            break;
                        case 0 /* NODE_START */:
                            stack++;
                            flush.push(this.parts[i].node);
                            break;
                        case 1 /* NODE_END */:
                            if (stack == 0) {
                                out.unshift(this.parts[i].node.xmlBeginning());
                            }
                            else {
                                stack--;
                                flush.pop();
                            }
                            break;
                    }
                }
                while (flush.length > 0) {
                    out.push(flush.pop().xmlEnding());
                }
            }
        }
        else if (format == 'text/plain' || format == 'text') {
            var blockNodeNames = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'tr', 'p', 'ul', 'li', 'table'];
            for (i = 0, len = this.parts.length; i < len; i++) {
                switch (this.parts[i].type) {
                    case 2 /* TEXT */:
                        out.push(this.parts[i].toString());
                        break;
                    case 1 /* NODE_END */:
                        if (blockNodeNames.indexOf(this.parts[i].node.nodeName) >= 0) {
                            out.push("\n\n");
                        }
                        else if (this.parts[i].node.nodeName == 'td') {
                            out.push('\t|\t');
                        }
                        break;
                }
            }
        }
        else
            throw "Invalid format. Allowed 'text/html' and 'text/plain' as first argument.";
        return out.join('');
    };
    // this should erase the contents of the fragment from the document, and mark the fragment as unusable...
    Fragment_Contextual.prototype.remove = function () {
        this.compute();
        /* Find all the "whole" and the "partial" nodes from the fragment. */
        var wholeNodes = [], partialNodes = [], i = 0, j = 0, len = this.parts.length, found = null, sp = [], el1, el2;
        for (var spi = 0, spl = this.parts.length; spi < spl; spi++) {
            switch (this.parts[spi].type) {
                case 0 /* NODE_START */:
                    sp.push(this.parts[spi]);
                    break;
                case 1 /* NODE_END */:
                    sp.push(this.parts[spi]);
                    break;
                case 2 /* TEXT */:
                    if (!/^([\s]+)?$/.test(this.parts[spi].toString())) {
                        sp.push(this.parts[spi]);
                    }
                    break;
            }
            if (sp.length > 2) {
                break;
            }
        }
        if (sp.length == 2 && sp[0].type == 1 /* NODE_END */ && sp[1].type == 0 /* NODE_START */) {
            el1 = sp[0].node;
            el2 = sp[1].node;
            if (el1.isMergeable && el2.isMergeable) {
                for (i = 0, len = this.parts.length; i < len; i++) {
                    if (this.parts[i].type == 2 /* TEXT */) {
                        this.parts[i].removeSelectedText();
                    }
                }
                el1.mergeWith(el2);
                return;
            }
        }
        while (i < len) {
            switch (this.parts[i].type) {
                case 2 /* TEXT */:
                    if (this.parts[i].isWholeNode()) {
                        wholeNodes.push(this.parts[i]);
                    }
                    else {
                        partialNodes.push(this.parts[i]);
                    }
                    i++;
                    break;
                case 1 /* NODE_END */:
                    partialNodes.push(this.parts[i]);
                    i++;
                    break;
                case 0 /* NODE_START */:
                    found = null;
                    for (j = i + 1; j < len; j++) {
                        if (this.parts[j].type == 1 /* NODE_END */ && this.parts[i].node == this.parts[j].node) {
                            found = j;
                            break;
                        }
                    }
                    if (found) {
                        wholeNodes.push(this.parts[i]);
                        i = found + 1;
                    }
                    else {
                        partialNodes.push(this.parts[i]);
                        i++;
                    }
                    break;
            }
        }
        for (i = 0, len = wholeNodes.length; i < len; i++) {
            wholeNodes[i].removeFromDocument();
        }
        for (i = 0, len = partialNodes.length; i < len; i++) {
            if (partialNodes[i].type == 2 /* TEXT */) {
                partialNodes[i].removeSelectedText();
            }
        }
    };
    return Fragment_Contextual;
})();
var Fragment_Contextual_MultiRange = (function (_super) {
    __extends(Fragment_Contextual_MultiRange, _super);
    function Fragment_Contextual_MultiRange(fragment, rangeNode, isEmpty) {
        if (isEmpty === void 0) { isEmpty = false; }
        _super.call(this, fragment, 0, 0, isEmpty);
        this.fragment = fragment;
        this.rangeNode = rangeNode;
        this.isEmpty = isEmpty;
    }
    Fragment_Contextual_MultiRange.prototype.compute = function () {
        var i = 0, len = 0, node;
        if (this.isEmpty) {
            return this;
        }
        this.parts = [];
        for (var i = 0, len = this.rangeNode.childNodes.length; i < len; i++) {
            node = this.rangeNode.childNodes[i];
            switch (true) {
                case node.nodeType == 1 /* TEXT */:
                    this.parts.push(new Fragment_Contextual_TextNode(node, node.FRAGMENT_START, node.FRAGMENT_END));
                    break;
                case node.nodeType == 2 /* ELEMENT */:
                    this.parts.push(new Fragment_Contextual_NodeStart(node));
                    this.parts.push(new Fragment_Contextual_NodeEnd(node));
                    break;
            }
        }
        return this;
    };
    Fragment_Contextual_MultiRange.prototype.affectedTextNodes = function () {
        var out = [], subNodes = [], i, len, j, k;
        this.compute();
        for (i = 0, len = this.parts.length; i < len; i++) {
            if (this.parts[i].type == 2 /* TEXT */) {
                out.push(this.parts[i].node);
            }
            else {
                if (this.parts[i].type == 0 /* NODE_START */) {
                    subNodes = this.parts[i].node.allTextNodes();
                    for (j = 0, k = subNodes.length; j < k; j++) {
                        out.push(subNodes[j]);
                    }
                }
            }
        }
        return out;
    };
    Fragment_Contextual_MultiRange.prototype.affectedInlineElements = function () {
        var out = [], sub, i, len, j = 0, k = 0, node;
        this.compute();
        for (i = 0, len = this.parts.length; i < len; i++) {
            switch (this.parts[i].type) {
                case 0 /* NODE_START */:
                    node = this.parts[i].node;
                    if (node.style.display() == 'inline') {
                        out.push(node);
                    }
                    sub = node.allSubElements();
                    if (k = sub.length) {
                        for (j = 0; j < k; j++) {
                            if (sub[i].style.display() == 'inline') {
                                out.push(sub[i]);
                            }
                        }
                    }
                    break;
            }
        }
        out.sort(function (a, b) {
            return a.FRAGMENT_START - b.FRAGMENT_START;
        });
        return out;
    };
    Fragment_Contextual_MultiRange.prototype.affectedBlockNodes = function () {
        var out = [], i, len, node;
        this.compute();
        for (i = 0, len = this.parts.length; i < len; i++) {
            switch (this.parts[i].type) {
                case 0 /* NODE_START */:
                    node = this.parts[i].node;
                    if (['tr', 'table'].indexOf(node.nodeName) >= 0) {
                        continue;
                    }
                    else {
                        node = node.ownerBlockElement();
                    }
                    break;
                case 2 /* TEXT */:
                    node = this.parts[i].node.ownerBlockElement();
                    break;
            }
            if (out.indexOf(node) == -1) {
                out.push(node);
            }
        }
        out.sort(function (a, b) {
            return a.FRAGMENT_START - b.FRAGMENT_START;
        });
        return out;
    };
    Fragment_Contextual_MultiRange.prototype.affectedRanges = function () {
        this.compute();
        var blockNodes = this.affectedBlockNodes(), i = 0, len = 0, returnValue = [];
        for (i = 0, len = blockNodes.length; i < len; i++) {
            if (blockNodes[i].childNodes && blockNodes[i].childNodes.length && blockNodes[i].is() != 'tr') {
                returnValue.push(new TNode_Collection_Dettached(blockNodes[i], blockNodes[i].FRAGMENT_START + 1, blockNodes[i].FRAGMENT_END - 1));
            }
        }
        this.fragment.document().canRelayout = false;
        for (i = 0, len = returnValue.length; i < len; i++) {
            returnValue[i].createSlices();
        }
        this.fragment.document().canRelayout = true;
        this.fragment.document().relayout(true);
        for (i = 0, len = returnValue.length; i < len; i++) {
            returnValue[i].createRanges();
        }
        return returnValue;
    };
    Fragment_Contextual_MultiRange.prototype.remove = function () {
        this.compute();
        var blocks = this.affectedBlockNodes(), i = 0, len = 0;
        for (i = 0, len = blocks.length; i < len; i++) {
            blocks[i].removeAllChildNodes();
        }
    };
    Fragment_Contextual_MultiRange.prototype.toString = function (format, closeTags) {
        if (format === void 0) { format = 'text/html'; }
        if (closeTags === void 0) { closeTags = false; }
        if (['html', 'text/html', 'text', 'text/plain'].indexOf(format) == -1) {
            throw "Bad format type!";
        }
        this.compute();
        var out = [], i = 0, len = this.parts.length, node, txt;
        for (i = 0, len = this.parts.length; i < len; i++) {
            switch (this.parts[i].type) {
                case 0 /* NODE_START */:
                    node = this.parts[i].node;
                    break;
                case 2 /* TEXT */:
                    txt = this.parts[i].node;
                    break;
                default:
                    node = null;
                    txt = null;
            }
            if (node != null) {
                out.push((format == 'text/html' || format == 'html') ? node.outerHTML() : node.textContents());
            }
            else if (txt != null) {
                out.push((format == 'text/html' || format == 'html') ? txt.escape() : txt.textContents());
            }
        }
        return out.join('');
    };
    return Fragment_Contextual_MultiRange;
})(Fragment_Contextual);
var Fragment_Contextual_Item = (function () {
    function Fragment_Contextual_Item() {
        this.type = null;
    }
    Fragment_Contextual_Item.prototype.toString = function () {
        throw "ABSTRACT_METHOD";
    };
    Fragment_Contextual_Item.prototype.removeFromDocument = function () {
        throw "ABSTRACT_METHOD";
    };
    return Fragment_Contextual_Item;
})();
var Fragment_Contextual_NodeStart = (function (_super) {
    __extends(Fragment_Contextual_NodeStart, _super);
    function Fragment_Contextual_NodeStart(node) {
        _super.call(this);
        this.node = node;
        this.type = 0 /* NODE_START */;
    }
    Fragment_Contextual_NodeStart.prototype.toString = function () {
        return this.node.xmlBeginning();
    };
    Fragment_Contextual_NodeStart.prototype.removeFromDocument = function () {
        if (this.node.is() != 'td') {
            this.node.remove();
        }
        else {
            if (this.node.is() == 'td') {
                this.node.removeAllChildNodes();
            }
        }
    };
    return Fragment_Contextual_NodeStart;
})(Fragment_Contextual_Item);
var Fragment_Contextual_NodeEnd = (function (_super) {
    __extends(Fragment_Contextual_NodeEnd, _super);
    function Fragment_Contextual_NodeEnd(node) {
        _super.call(this);
        this.node = node;
        this.type = 1 /* NODE_END */;
    }
    Fragment_Contextual_NodeEnd.prototype.toString = function () {
        return this.node.xmlEnding();
    };
    Fragment_Contextual_NodeEnd.prototype.removeFromDocument = function () {
        this.node.remove();
    };
    return Fragment_Contextual_NodeEnd;
})(Fragment_Contextual_Item);
var Fragment_Contextual_TextNode = (function (_super) {
    __extends(Fragment_Contextual_TextNode, _super);
    function Fragment_Contextual_TextNode(node, start, end) {
        if (start === void 0) { start = null; }
        if (end === void 0) { end = null; }
        _super.call(this);
        this.node = node;
        this.start = start;
        this.end = end;
        this.type = 2 /* TEXT */;
    }
    Fragment_Contextual_TextNode.prototype.isWholeNode = function () {
        return this.node.textContents() == this.node.textContentsFragment(this.start, this.end);
    };
    Fragment_Contextual_TextNode.prototype.toString = function () {
        return this.node.textContentsFragment(this.start, this.end);
    };
    Fragment_Contextual_TextNode.prototype.removeFromDocument = function () {
        this.node.remove();
    };
    Fragment_Contextual_TextNode.prototype.removeSelectedText = function () {
        this.node.deleteTextContentsBetweenFragmentPositions(this.start, this.end);
    };
    return Fragment_Contextual_TextNode;
})(Fragment_Contextual_Item);
var Fragment_CaretLock = (function () {
    function Fragment_CaretLock(fragment, lockIndex, direction, lockName) {
        if (direction === void 0) { direction = 0 /* FROM_BEGINNING_OF_DOCUMENT */; }
        if (lockName === void 0) { lockName = 'Lock'; }
        this.lockName = lockName;
        this.chars = 0;
        this.lockIndex = 0;
        this.startedEOL = false;
        var at, i = 0, len = 0, n = 0;
        this.fragment = fragment;
        this.lockIndex = lockIndex;
        this.chars = 0;
        this.direction = direction;
        this.startedEOL = this.fragment.at(lockIndex) == 2 /* EOL */;
        if (direction == 0 /* FROM_BEGINNING_OF_DOCUMENT */) {
            for (i = 0; i <= lockIndex; i++) {
                at = this.fragment.at(i);
                if (at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */) {
                    this.chars++;
                }
            }
        }
        else {
            for (i = this.fragment.length() - 1; i >= lockIndex; i--) {
                at = this.fragment.at(i);
                if (at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */) {
                    this.chars++;
                }
            }
        }
    }
    Fragment_CaretLock.prototype.getTarget = function () {
        var i = 0, len = 0, chars = 0, at, foundIndex = this.direction == 0 /* FROM_BEGINNING_OF_DOCUMENT */ ? 0 : this.fragment.length() - 1;
        if (this.direction == 0 /* FROM_BEGINNING_OF_DOCUMENT */) {
            if (this.chars != 0) {
                for (i = 0, len = this.fragment.length(); i < len; i++) {
                    at = this.fragment.at(i);
                    if (at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */) {
                        chars++;
                        foundIndex = i;
                        if (chars == this.chars) {
                            break;
                        }
                    }
                }
            }
            if (this.startedEOL || chars < this.chars) {
                foundIndex++;
                len = this.fragment.length();
                while (foundIndex < len) {
                    at = this.fragment.at(foundIndex);
                    if (at == 4 /* WHITE_SPACE */ || at == 3 /* CHARACTER */ || at == 2 /* EOL */) {
                        break;
                    }
                    foundIndex++;
                }
            }
            return new TRange_Target(this.fragment.getNodeAtIndex(foundIndex), foundIndex);
        }
        else {
            if (this.chars != 0) {
                for (i = foundIndex; i >= 0; i--) {
                    at = this.fragment.at(i);
                    if (at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */) {
                        chars++;
                        if (chars == this.chars) {
                            foundIndex = i;
                            break;
                        }
                    }
                }
            }
            if (this.startedEOL) {
                foundIndex--;
                while (foundIndex >= 0) {
                    at = this.fragment.at(foundIndex);
                    if (at == 4 /* WHITE_SPACE */ || at == 3 /* CHARACTER */ || at == 2 /* EOL */) {
                        break;
                    }
                    foundIndex--;
                }
            }
            if (foundIndex >= 0) {
                return new TRange_Target(this.fragment.getNodeAtIndex(foundIndex), foundIndex);
            }
            else {
                return this.fragment.createTargetAt(0 /* DOC_BEGIN */);
            }
        }
    };
    return Fragment_CaretLock;
})();
var Fragment_Batch = (function () {
    function Fragment_Batch(range, items) {
        this.ended = false;
        this.range = range;
        this.items = items;
    }
    /* @param elAttributeName can be string[] or string
       @param elAttributeValue can be string[] or string
     */
    Fragment_Batch.prototype.wrapInElement = function (elementName, elAttributeName, elAttributeValue, ifFunc) {
        if (elAttributeName === void 0) { elAttributeName = null; }
        if (elAttributeValue === void 0) { elAttributeValue = null; }
        if (ifFunc === void 0) { ifFunc = null; }
        if (this.ended) {
            throw "ERR_BATCH_ENDED";
        }
        for (var i = 0, len = this.items.length; i < len; i++) {
            this.items[i].wrapInElement(elementName, elAttributeName, elAttributeValue, ifFunc);
        }
        return this;
    };
    Fragment_Batch.prototype.unwrapFromElement = function (elementName, ifFunc) {
        if (ifFunc === void 0) { ifFunc = null; }
        if (this.ended) {
            throw "ERR_BATCH_ENDED";
        }
        for (var i = 0, len = this.items.length; i < len; i++) {
            this.items[i].unwrapFromElement(elementName, ifFunc);
        }
        return this;
    };
    Fragment_Batch.prototype.end = function () {
        if (this.ended) {
            throw "ERR_BATCH_ENDED";
        }
        this.ended = true;
        for (var i = 0, len = this.items.length; i < len; i++) {
            this.items[i].reInsert();
            this.items[i].parentNode.defragment();
        }
        this.range.anchorNode().target.documentElement.unlockTables();
        this.range.restore();
        return this;
    };
    Fragment_Batch.prototype.debug = function () {
        console.info('Batch: ' + this.items.length + ' ranges');
        for (var i = 0, len = this.items.length; i < len; i++) {
            console.info('Range #' + i + ': parent[' + this.items[i].parentNode.FRAGMENT_START + ',' + this.items[i].parentNode.FRAGMENT_END + ']: ' + this.items[i].parentNode.xmlBeginning() + ', nodes: ' + this.items[i].length + ':');
            console.log('    "' + this.items[i].toString('"\n     "') + '"');
        }
    };
    return Fragment_Batch;
})();
var TRange = (function (_super) {
    __extends(TRange, _super);
    function TRange(target) {
        _super.call(this);
        this._anchorNode = null;
        this._focusNode = null;
        this._anchorLock = null;
        this._focusLock = null;
        if (!target) {
            throw "ERR_BAD_CONSTRUCTOR_ARG";
        }
        this._anchorNode = target;
        this._focusNode = (this._anchorNode.target.nodeType == 1 /* TEXT */) ? this._anchorNode.clone() : null;
        (function (me) {
            if (me._anchorNode) {
                me._anchorNode.on('changed', function () {
                    me.fire('changed');
                });
            }
            if (me._focusNode) {
                me._focusNode.on('changed', function () {
                    me.fire('changed');
                });
            }
        })(this);
    }
    TRange.prototype.anchorNode = function () {
        return this._anchorNode;
    };
    TRange.prototype.focusNode = function () {
        return this._focusNode;
    };
    TRange.prototype.isCollapsed = function () {
        return this._focusNode === null || (this._anchorNode.fragPos == this._focusNode.fragPos);
    };
    TRange.prototype.type = function () {
        if (this._anchorNode.target.nodeType == 1 /* TEXT */ && this._focusNode !== null) {
            return 0 /* TEXT */;
        }
        else {
            return 1 /* ELEMENT */;
        }
    };
    // a null value represents that the length is not available for this range
    TRange.prototype.length = function () {
        if (this._focusNode === null) {
            return null;
        }
        else {
            return this._focusNode.fragPos - this._anchorNode.fragPos;
        }
    };
    // set selection to focusNode (atEnd = true) or anchorNode (atEnd = false).
    TRange.prototype.collapse = function (atEnd) {
        if (atEnd === void 0) { atEnd = false; }
        if (atEnd) {
            if (this._focusNode) {
                this._anchorNode = this.cloneTarget(this._focusNode);
            }
        }
        else {
            if (this._focusNode) {
                this._focusNode = this.cloneTarget(this._anchorNode);
            }
        }
        this.fire('changed');
        return this;
    };
    TRange.prototype.cloneTarget = function (fromTarget) {
        var target = fromTarget.clone();
        (function (me) {
            target.on('changed', function () {
                me.fire('changed');
            });
        })(this);
        return target;
    };
    TRange.prototype.equalsNode = function (node) {
        if (!this.isMultiRange()) {
            return this._focusNode === null && this._anchorNode.target === node;
        }
        else {
            return this._anchorNode.target.childNodes.indexOf(node) >= 0;
        }
    };
    TRange.prototype.contains = function (fragmentIndex) {
        if (this._focusNode && this._anchorNode && !this.isCollapsed()) {
            var minIndex = Math.min(this._focusNode.fragPos, this._anchorNode.fragPos), maxIndex = Math.max(this._focusNode.fragPos, this._anchorNode.fragPos);
            if (this._focusNode.fragPos > this._anchorNode.fragPos) {
                maxIndex--;
            }
            return fragmentIndex >= minIndex && fragmentIndex <= maxIndex + (this._focusNode.fragPos < this._anchorNode.fragPos ? -1 : 0);
        }
        else
            return false;
    };
    // if the range has anchor and focus, return the common parent of the nodes of the
    // range. otherwise return the parent node of the range.
    TRange.prototype.getCommonParent = function () {
        if (this._focusNode === null) {
            return this._anchorNode.target.parentNode;
        }
        else {
            if (this._anchorNode.target == this._focusNode.target) {
                return this._anchorNode.target.parentNode;
            }
            else {
                var parentsA = [], parentsB = [], i = 0, cursor, found = null;
                cursor = this._anchorNode.target.parentNode;
                while (cursor) {
                    parentsA.unshift(cursor);
                    cursor = cursor.parentNode;
                }
                cursor = this._focusNode.target.parentNode;
                while (cursor) {
                    parentsB.unshift(cursor);
                    cursor = cursor.parentNode;
                }
                i = 0;
                while (parentsA[i] && parentsB[i] && parentsA[i] === parentsB[i]) {
                    found = parentsA[i];
                    i++;
                }
                return found;
            }
        }
    };
    TRange.prototype.createContextualFragment = function () {
        if (this.isMultiRange()) {
            return new Fragment_Contextual_MultiRange(this._anchorNode.target.documentElement.fragment, (this._anchorNode.target), (this._anchorNode.target).childNodes.length == 0);
        }
        else {
            if (this._focusNode === null) {
                return new Fragment_Contextual(this._anchorNode.target.documentElement.fragment, this._anchorNode.target.FRAGMENT_START, this._anchorNode.target.FRAGMENT_END, false);
            }
            else {
                var minIndex = Math.min(this._focusNode.fragPos, this._anchorNode.fragPos), maxIndex = Math.max(this._focusNode.fragPos, this._anchorNode.fragPos), isEmpty = minIndex == maxIndex;
                if (this._focusNode.fragPos > this._anchorNode.fragPos) {
                    maxIndex--;
                }
                maxIndex += (this._focusNode.fragPos < this._anchorNode.fragPos ? -1 : 0);
                return new Fragment_Contextual(this._anchorNode.target.documentElement.fragment, minIndex, maxIndex, isEmpty);
            }
        }
    };
    /* Note: DO NOT USE THIS METHOD DIRECTLY.
       
       Instead, use Selection.removeContents, as that method should
       invalidate this range after deletion and create another valid
       range.
     */
    TRange.prototype.removeContents = function () {
        if (this.isMultiRange()) {
            var fragment = this.createContextualFragment();
            fragment.remove();
            return true;
        }
        else {
            if (this._focusNode === null) {
                this._anchorNode.target.remove();
                return true;
            }
            else {
                if (this.length() !== null) {
                    var fragment = this.createContextualFragment();
                    fragment.remove();
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    };
    TRange.prototype.affectedBlockNodes = function () {
        if (this.isMultiRange()) {
            return this.createContextualFragment().affectedBlockNodes();
        }
        else {
            if (!this._focusNode || !this.length()) {
                return [this._anchorNode.target.ownerBlockElement()];
            }
            return this.createContextualFragment().affectedBlockNodes();
        }
    };
    TRange.prototype.save = function () {
        if (this.isMultiRange()) {
            return this;
        }
        var fragment = this._anchorNode.target.documentElement.fragment;
        if (this._focusNode) {
            this._focusLock = new Fragment_CaretLock(fragment, this._focusNode.fragPos, this._focusNode.fragPos <= this._anchorNode.fragPos ? 0 /* FROM_BEGINNING_OF_DOCUMENT */ : 1 /* FROM_ENDING_OF_DOCUMENT */, 'Focus');
            this._anchorLock = new Fragment_CaretLock(fragment, this._anchorNode.fragPos, !this.length() ? this._focusLock.direction : (this._focusLock.direction == 0 /* FROM_BEGINNING_OF_DOCUMENT */ ? 1 /* FROM_ENDING_OF_DOCUMENT */ : 0 /* FROM_BEGINNING_OF_DOCUMENT */), 'Anchor');
        }
        else {
            this._anchorLock = new Fragment_CaretLock(fragment, this._anchorNode.fragPos, 0 /* FROM_BEGINNING_OF_DOCUMENT */, 'Anchor');
            this._focusLock = null;
        }
        return this;
    };
    TRange.prototype.restore = function () {
        if (this.isMultiRange()) {
            return this;
        }
        this._anchorNode.target.documentElement.relayout(true);
        if (this._focusNode) {
            if (!this._focusLock) {
                throw "ERR_TRANGE: nothing to restore";
            }
            else {
                this._focusNode.set(this._focusLock.getTarget());
            }
        }
        if (this._anchorNode) {
            if (!this._anchorLock) {
                throw "ERR_TRANGE: nothing to restore!";
            }
            else {
                this._anchorNode.set(this._anchorLock.getTarget());
            }
        }
        return this;
    };
    TRange.prototype.debug = function () {
        if (this._focusNode) {
            console.info('Focus @' + this._focusNode.fragPos + ', Anchor @ ' + this._anchorNode.fragPos);
        }
        else {
            console.info('Anchor @ ' + this._anchorNode.fragPos);
        }
        return this;
    };
    TRange.prototype.affectedRanges = function () {
        if (this.isMultiRange()) {
            this._anchorNode.target.documentElement.lockTables();
            return new Fragment_Batch(this, this.createContextualFragment().affectedRanges());
        }
        else {
            this.save();
            this._anchorNode.target.documentElement.lockTables();
            if (!this._focusNode || !this.length()) {
                return new Fragment_Batch(this, []);
            }
            else {
                return new Fragment_Batch(this, this.createContextualFragment().affectedRanges());
            }
        }
    };
    /* These methods MIGHT be removed in the future, if better ways will be found
     */
    TRange.prototype.setAnchorAsFocus = function () {
        if (!this.isMultiRange()) {
            if (this._focusNode) {
                this._anchorNode.target = this._focusNode.target;
                this._anchorNode.fragPos = this._anchorNode.fragPos;
                this.fire('changed');
            }
        }
    };
    TRange.prototype.setFocusAsAnchor = function () {
        if (!this.isMultiRange()) {
            if (this._focusNode) {
                this._focusNode.target = this._anchorNode.target;
                this._focusNode.fragPos = this._anchorNode.fragPos;
                this.fire('changed');
            }
        }
    };
    TRange.prototype.setFocusAndAnchorTo = function (target) {
        this._anchorNode = this.cloneTarget(target);
        if (!this.isMultiRange()) {
            this._focusNode = this.cloneTarget(target);
        }
        else {
            this._focusNode = null;
        }
        this.fire('changed');
    };
    TRange.prototype.moveRightUntilCharacterIfNotLandedOnText = function () {
        if (this._focusNode && !this.isMultiRange()) {
            this._focusNode.moveRightUntilCharacterIfNotLandedOnText();
            this._anchorNode.fragPos = this._focusNode.fragPos;
            this._anchorNode.target = this._focusNode.target;
        }
    };
    TRange.prototype.moveLeftUntilCharacterIfNotLandedOnText = function () {
        if (this._focusNode && !this.isMultiRange()) {
            this._focusNode.moveLeftUntilCharacterIfNotLandedOnText();
            this._anchorNode.fragPos = this._focusNode.fragPos;
            this._anchorNode.target = this._focusNode.target;
        }
    };
    TRange.prototype.isMultiRange = function () {
        return this._anchorNode && this._anchorNode.target.is() == 'multirange';
    };
    TRange.prototype.isOrphan = function () {
        return this._anchorNode && this._anchorNode.target.isOrphanElement();
    };
    TRange.prototype.becomeTableRectRange = function () {
        if (this.isMultiRange()) {
            var newTarget;
            switch (this._anchorNode.target.role) {
                case 'table-selection':
                    return true;
                    break;
                case 'table-row':
                    newTarget = this._anchorNode.target.becomeTableRectRange();
                    if (newTarget) {
                        this._anchorNode.target = newTarget;
                        return true;
                    }
                    else {
                        return false;
                    }
                    break;
                case 'table-column':
                    newTarget = this._anchorNode.target.becomeTableRectRange();
                    if (newTarget) {
                        this._anchorNode.target = newTarget;
                        return true;
                    }
                    else {
                        return false;
                    }
                    break;
                default:
                    return false;
            }
        }
        else {
            return false;
        }
    };
    return TRange;
})(Events);
var TRange_Target = (function (_super) {
    __extends(TRange_Target, _super);
    /* Public Methods:
    
        // walk in document in the right direction until condition is met
        public moveRightUntil( condition: ( item: FragmentItem, index?: number ) => boolean, triggerChangeEvent: boolean = true ): boolean

        // walk in document in the left direction until condition is met
        public moveLeftUntil( condition: ( item: FragmentItem, index?: number ) => boolean, triggerChangeEvent: boolean = true ): boolean

        // walk in document chars characters. chars can be negative.
        public moveByCharacters( chars: number ): boolean

        // walk in the document words words. words can be negative.
        public moveByWords( words: number ): boolean

        // creates another target with exactly this one's values.
        public clone(): TRange_Target

        // imports values from another target to this one.
        public set( target: TRange_Target )

     */
    function TRange_Target(target, pos) {
        if (pos === void 0) { pos = 0; }
        _super.call(this);
        this.target = null;
        this.fragPos = 0;
        if (!target) {
            throw "ERR_BAD_TARGET";
        }
        else {
            this.target = target;
            this.fragPos = ~~pos;
        }
    }
    TRange_Target.prototype.moveRightUntil = function (condition, triggerChangeEvent) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        var fragment = this.target.documentElement.fragment, i = this.fragPos, len = fragment.length(), at, target;
        while (i < len) {
            i++;
            if (condition(fragment.at(i), i)) {
                target = this.target.documentElement.findNodeAtIndex(i);
                if (!target) {
                    throw "ERR_BAD_LANDING";
                }
                else {
                    this.target = target;
                    this.fragPos = i;
                    if (triggerChangeEvent)
                        this.fire('changed');
                    return true;
                }
            }
        }
        return false;
    };
    /* These should be removed in the future or optimized better */
    TRange_Target.prototype.moveRightOnceIfInsideBR = function () {
        if (this.target.nodeType == 1 /* TEXT */ && this.target.isBR) {
            this.moveRightUntil(function (at) {
                return at == 2 /* EOL */ || at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */;
            }, false);
        }
    };
    TRange_Target.prototype.moveLeftOnceIfInsideBR = function () {
        if (this.target.nodeType == 1 /* TEXT */ && this.target.isBR) {
            this.moveLeftUntil(function (at) {
                return at == 2 /* EOL */ || at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */;
            }, false);
        }
    };
    TRange_Target.prototype.moveLeftUntilCharacterIfNotLandedOnText = function () {
        var at = this.target.documentElement.fragment.at(this.fragPos);
        if (at == 0 /* NODE_START */ || at == 1 /* NODE_END */) {
            this.moveLeftUntil(function (at) {
                return at == 2 /* EOL */ || at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */;
            });
        }
    };
    TRange_Target.prototype.moveRightUntilCharacterIfNotLandedOnText = function () {
        var at = this.target.documentElement.fragment.at(this.fragPos);
        if (at == 0 /* NODE_START */ || at == 1 /* NODE_END */) {
            this.moveRightUntil(function (at) {
                return at == 2 /* EOL */ || at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */;
            });
        }
    };
    TRange_Target.prototype._moveRight = function (times, ignoreEOL) {
        if (times === void 0) { times = 1; }
        if (ignoreEOL === void 0) { ignoreEOL = false; }
        times = ~~times;
        if (times < 1) {
            return false;
        }
        var i = 0, len = 0, thisNode = this.target, thisFrag = this.fragPos;
        for (i = 0; i < times - 1; i++) {
            if (!this.moveRightUntil(function (at) {
                return at == 2 /* EOL */ || at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */;
            }, false)) {
                this.target = thisNode;
                this.fragPos = thisFrag;
                return false;
            }
        }
        if (this.moveRightUntil(function (at) {
            return (!ignoreEOL && at == 2 /* EOL */) || at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */;
        })) {
            this.moveRightOnceIfInsideBR();
            return true;
        }
        else {
            return false;
        }
    };
    TRange_Target.prototype._moveRightWord = function (times) {
        if (times === void 0) { times = 1; }
        times = ~~times;
        if (times < 1) {
            return false;
        }
        var thisNode = this.target, thisFrag = this.fragPos, fragment = this.target.documentElement.fragment, at = fragment.at(thisFrag), lastCharIndex = fragment.getIndexAt(1 /* DOC_END */);
        while (times > 0) {
            // at a space or @end of a line.
            // move right until next letter. critical.
            if (at != 3 /* CHARACTER */) {
                if (!this.moveRightUntil(function (at) {
                    return at == 3 /* CHARACTER */;
                }, false)) {
                    this.target = thisNode;
                    this.fragPos = thisFrag;
                    return false;
                }
            }
            // move right while characters
            if (!this.moveRightUntil(function (at, i) {
                return at == 2 /* EOL */ || at == 4 /* WHITE_SPACE */ || i == lastCharIndex;
            }, false)) {
                this.target = thisNode;
                this.fragPos = thisFrag;
                return false;
            }
            times--;
        }
        this.fire('changed');
        return true;
    };
    TRange_Target.prototype.moveLeftUntil = function (condition, triggerChangeEvent) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        var fragment = this.target.documentElement.fragment, i = this.fragPos, len = fragment.length(), at, target;
        while (i > 0) {
            i--;
            if (condition(fragment.at(i), i)) {
                target = this.target.documentElement.findNodeAtIndex(i);
                if (!target) {
                    throw "ERR_BAD_LANDING";
                }
                else {
                    this.target = target;
                    this.fragPos = i;
                    if (triggerChangeEvent)
                        this.fire('changed');
                    return true;
                }
            }
        }
        return false;
    };
    TRange_Target.prototype._moveLeft = function (times, ignoreEOL) {
        if (times === void 0) { times = 1; }
        if (ignoreEOL === void 0) { ignoreEOL = false; }
        times = ~~times;
        if (times < 1) {
            return false;
        }
        var i = 0, len = 0, thisNode = this.target, thisFrag = this.fragPos;
        for (i = 0; i < times - 1; i++) {
            if (!this.moveLeftUntil(function (at) {
                return at == 2 /* EOL */ || at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */;
            }, false)) {
                this.target = thisNode;
                this.fragPos = thisFrag;
                return false;
            }
        }
        if (this.moveLeftUntil(function (at) {
            return (!ignoreEOL && at == 2 /* EOL */) || at == 3 /* CHARACTER */ || at == 4 /* WHITE_SPACE */;
        })) {
            this.moveLeftOnceIfInsideBR();
            return true;
        }
        else {
            return false;
        }
    };
    TRange_Target.prototype._moveLeftWord = function (times) {
        if (times === void 0) { times = 1; }
        times = ~~times;
        if (times < 1) {
            return false;
        }
        var thisNode = this.target, thisFrag = this.fragPos, fragment = this.target.documentElement.fragment, at = fragment.at(thisFrag), firstCharIndex = fragment.getIndexAt(0 /* DOC_BEGIN */);
        while (times > 0) {
            // at a space or @end of a line.
            // move left until prev letter. critical.
            if (at != 3 /* CHARACTER */) {
                if (!this.moveLeftUntil(function (at) {
                    return at == 3 /* CHARACTER */;
                }, false)) {
                    this.target = thisNode;
                    this.fragPos = thisFrag;
                    return false;
                }
            }
            // move left while characters
            if (!this.moveLeftUntil(function (at, index) {
                return at == 2 /* EOL */ || at == 4 /* WHITE_SPACE */ || index == firstCharIndex;
            }, false)) {
                this.target = thisNode;
                this.fragPos = thisFrag;
                return false;
            }
            times--;
        }
        this.fire('changed');
        return true;
    };
    TRange_Target.prototype.moveByCharacters = function (chars, ignoreEOL) {
        if (ignoreEOL === void 0) { ignoreEOL = false; }
        chars = ~~chars;
        if (chars == 0) {
            return false;
        }
        if (chars > 0) {
            return this._moveRight(chars, ignoreEOL);
        }
        else {
            return this._moveLeft(-chars, ignoreEOL);
        }
    };
    TRange_Target.prototype.moveByWords = function (words) {
        words = ~~words;
        if (words == 0) {
            return false;
        }
        if (words > 0) {
            return this._moveRightWord(words);
        }
        else {
            return this._moveLeftWord(-words);
        }
    };
    TRange_Target.prototype.clone = function () {
        return new TRange_Target(this.target, this.fragPos);
    };
    TRange_Target.prototype.set = function (target) {
        if (!target) {
            throw "ERR_INVALID_TARGET";
        }
        else {
            if (target.target != this.target || this.fragPos != target.fragPos) {
                this.target = target.target;
                this.fragPos = target.fragPos;
                this.fire('changed');
            }
        }
    };
    // return the line index of the target in the master document
    TRange_Target.prototype.getLineIndex = function () {
        var lines, i = 0, len = 0, line;
        if (this.target.nodeType == 1 /* TEXT */) {
            lines = this.target.documentElement.lines;
            len = lines.length();
            for (i = 0; i < len; i++) {
                line = lines.at(i);
                if (line.fragmentIndexStart <= this.fragPos && line.fragmentIndexEnd >= this.fragPos) {
                    return i;
                }
            }
        }
        return null;
    };
    // returns the details of the target
    TRange_Target.prototype.details = function () {
        if (this.target.nodeType !== 1 /* TEXT */) {
            return null;
        }
        var lines = this.target.documentElement.lines, lineIndex = this.getLineIndex(), line = lines.at(lineIndex), layout = line.owner, ownerNode = layout.ownerNode(), align = ownerNode.style.textAlign() || 'left', lineHeight = ownerNode.style.lineHeight() || 0, paintX = 0, paintY = 0, useWordGap = false, i = 0, len = 0, j = 0, n = 0, size = [0, 0], charIndex = 0, c, charIndex = 0, firstFragPos = 0, currentFragPos = null, startPaintX = 0;
        switch (align) {
            case 'justified':
                useWordGap = true;
            case 'left':
                paintX = 0;
                break;
            case 'right':
                paintX = line.maxWidth - line.size[0];
                break;
            case 'center':
                paintX = (line.maxWidth / 2) - (line.size[0] / 2);
                break;
        }
        startPaintX = paintX;
        for (i = 0, len = line.index - layout.lineIndexStart; i < len; i++) {
            paintY += (lines.at(layout.lineIndexStart + i).size[1] * lineHeight);
        }
        for (i = 0, len = line.words.length; i < len; i++) {
            for (j = 0, n = line.words[i].characters.length; j < n; j++) {
                c = line.words[i].characters[j];
                if ((currentFragPos = c.fragmentPosition()) == this.fragPos) {
                    /* Finally, found the character */
                    return {
                        "paintAbsolute": {
                            "x": layout.offsetLeft + paintX,
                            "y": layout.offsetTop + paintY
                        },
                        "paintRelative": {
                            "x": paintX,
                            "y": paintY
                        },
                        "lineIndex": lineIndex,
                        "charIndex": charIndex
                    };
                }
                else {
                    if (firstFragPos === null) {
                        firstFragPos = currentFragPos;
                    }
                }
                size = c.computeSize();
                paintX += size[0];
                charIndex++;
            }
            if (useWordGap) {
                paintX += line.wordGap;
            }
        }
        if (this.fragPos < firstFragPos) {
            paintX = startPaintX;
            charIndex = 0;
        }
        return {
            "paintAbsolute": {
                "x": layout.offsetLeft + paintX,
                "y": layout.offsetTop + paintY
            },
            "paintRelative": {
                "x": paintX,
                "y": paintY
            },
            "lineIndex": lineIndex,
            "charIndex": charIndex
        };
    };
    return TRange_Target;
})(Events);
var DocSelection = (function (_super) {
    __extends(DocSelection, _super);
    function DocSelection(viewport) {
        _super.call(this);
        this.range = null; // the selection range. user can obtain the range via the getRange() method
        this.viewport = null; // viewport for which this selection is applied
        this.stateComputer = null; // a throttler that computes the editor state when the selection is changed
        this.changeThrottler = null;
        this.editorState = null;
        this.viewport = viewport;
        this.editorState = new Selection_EditorState(this);
        (function (me) {
            me.stateComputer = new Throttler(function () {
                me.editorState.compute();
            }, 100);
            me.changeThrottler = new Throttler(function () {
                me.fire('changed');
            }, 30);
            me.on('changed', function () {
                me.onchanged();
            });
        })(this);
    }
    // obtains an instance of the range of the selection.
    DocSelection.prototype.getRange = function () {
        if (!this.range)
            this.range = this.createRange(this.viewport.document.fragment.createTargetAt(0 /* DOC_BEGIN */));
        return this.range;
    };
    /* You should create ranges only with this method, do not use
       the constructor of the range manually.

       This is because events must be added on ranges and this is
       the optimal point for doing that.
     */
    DocSelection.prototype.createRange = function (target) {
        var rng = new TRange(target);
        (function (me) {
            rng.on('changed', function () {
                me.viewport.document.requestRepaint();
                me.stateComputer.run();
                me.changeThrottler.run();
            });
        })(this);
        return rng;
    };
    /* anchors the selection to the target.
    // if the target is a text node, a text selection will be made.
    // if the target is a element, an element selection will be made
    */
    DocSelection.prototype.anchorTo = function (target) {
        this.range = this.createRange(target);
        this.viewport.document.requestRepaint();
        this.range.fire('changed');
    };
    /* selection can be focused to a target if it's anchored
       and if the selection type is text.
     */
    DocSelection.prototype.focusTo = function (target) {
        var rng = this.getRange(), focus = rng.focusNode();
        if (target.target.nodeType == 1 /* TEXT */ && focus) {
            focus.set(target);
        }
    };
    // returns the length of the selection.
    // note that this value has nothing to do with the number of selected characters.
    // a null value means that is not applicable.
    // value can also be negative, depending on selection direction.
    DocSelection.prototype.length = function () {
        return this.getRange().length();
    };
    // removes the contents of selection.
    DocSelection.prototype.removeContents = function () {
        var range = this.getRange(), atEnd = false, len = range.length(), target;
        range.save();
        if (range.removeContents()) {
            this.viewport.document.relayout(true);
            this.viewport.document.removeOrphanNodes();
            range.restore();
            if (!range.focusNode() && range.anchorNode() && range.anchorNode().target.nodeType == 1 /* TEXT */) {
                range.setFocusAndAnchorTo(range.anchorNode());
            }
            range.collapse(true);
            /* Verify validity of the range */
            if (target = range.focusNode()) {
                if (target.fragPos < 0 || target.fragPos >= this.viewport.document.fragment.length()) {
                    this.range = null;
                    this.fire('changed');
                    return;
                }
            }
            if (target = range.anchorNode()) {
                if (target.fragPos < 0 || target.fragPos >= this.viewport.document.fragment.length()) {
                    this.range = null;
                    this.fire('changed');
                    return;
                }
            }
        }
    };
    /* This function is used by the default StatusBar, and *might* not treat
       all the test cases.
     */
    DocSelection.prototype.selectByFragmentIndexes = function (start, stop) {
        var nStart = this.viewport.document.findNodeAtIndex(start), nStop = this.viewport.document.findNodeAtIndex(stop), fragment = this.viewport.document.fragment, fragLen = fragment.length(), at;
        switch (true) {
            case nStart == nStop && nStart.nodeType == 1 /* TEXT */:
                this.anchorTo(new TRange_Target(nStart, start));
                this.focusTo(new TRange_Target(nStart, stop));
                break;
            case (nStart.nodeType == 2 /* ELEMENT */ && nStart.isBlockTextNode) || (nStop.nodeType == 2 /* ELEMENT */ && nStop.isBlockTextNode):
            case (nStart.nodeType == 2 /* ELEMENT */ && !nStart.isSelectable) && (nStop.nodeType == 2 /* ELEMENT */ && !nStop.isSelectable):
                while (start < fragLen && start <= stop && [4 /* WHITE_SPACE */, 3 /* CHARACTER */, 2 /* EOL */].indexOf(fragment.at(start)) == -1) {
                    start++;
                }
                while (stop > 0 && stop >= start && [4 /* WHITE_SPACE */, 3 /* CHARACTER */, 2 /* EOL */].indexOf(fragment.at(stop)) == -1) {
                    stop--;
                }
                this.anchorTo(new TRange_Target(this.viewport.document.findNodeAtIndex(start), start));
                this.focusTo(new TRange_Target(this.viewport.document.findNodeAtIndex(stop), stop + 1));
                break;
            default:
                console.warn('a');
                this.anchorTo(new TRange_Target(nStart, start));
                break;
        }
    };
    DocSelection.prototype.insertHTML = function (html) {
        if (this.getRange().length()) {
            this.removeContents();
        }
        if (!html) {
            return;
        }
        var rng = this.getRange(), fragPos = rng.focusNode() ? rng.focusNode().fragPos : rng.anchorNode().fragPos, targetElement = this.viewport.document.findNodeAtIndex(fragPos), s, s1, afterNode, normalized, hostElement = targetElement.hostElement(), insertionPoint, cursor, leftSibling, rightSibling, i, len, j, unwrapAtNormalization = [];
        if (targetElement.nodeType == 1 /* TEXT */ && targetElement.isBR) {
            targetElement = targetElement.parentNode;
        }
        if (targetElement.nodeType == 1 /* TEXT */) {
            s = targetElement.textContentsFragment(targetElement.FRAGMENT_START, fragPos - 1);
            s1 = targetElement.textContentsFragment(fragPos, targetElement.FRAGMENT_END);
            switch (true) {
                case s == '':
                    if (targetElement.previousSibling()) {
                        afterNode = targetElement.previousSibling();
                    }
                    else {
                        afterNode = this.viewport.document.createTextNode('');
                        targetElement.parentNode.appendChild(afterNode, targetElement.siblingIndex);
                    }
                    break;
                case s1 == '':
                    afterNode = targetElement;
                    break;
                default:
                    targetElement.textContents(s);
                    targetElement.parentNode.appendChild(this.viewport.document.createTextNode(s1), targetElement.siblingIndex + 1);
                    afterNode = targetElement;
                    break;
            }
            hostElement = afterNode.hostElement();
        }
        else {
            afterNode = targetElement;
            hostElement = afterNode.hostElement();
        }
        cursor = afterNode.parentNode;
        while (cursor != hostElement) {
            if (cursor.style.display() == 'inline')
                unwrapAtNormalization.push(cursor.is());
            cursor = cursor.parentNode;
        }
        normalized = this.viewport.document.createCollectionFromHTMLText(html).normalizeForHost(hostElement.nodeName, unwrapAtNormalization);
        // no html or failed to parse HTML
        if (!normalized.length) {
            return;
        }
        if (normalized.normalizedInlineStartNodes + normalized.normalizedInlineEndNodes < normalized.length) {
            if (afterNode.parentNode != hostElement) {
                // make a surgery upto the host.
                insertionPoint = afterNode.cutDown([(afterNode.hostElement().parentNode || afterNode.documentElement).is()]);
            }
            else {
                insertionPoint = {
                    "element": hostElement,
                    "index": afterNode.siblingIndex + 1
                };
            }
        }
        else {
            // make a surgery inside the host
            // insert all nodes in a raw after the afterNode.
            insertionPoint = {
                "element": afterNode.parentNode,
                "index": afterNode.siblingIndex + 1
            };
        }
        leftSibling = insertionPoint.element.childNodes[insertionPoint.index - 1] || null;
        rightSibling = insertionPoint.element.childNodes[insertionPoint.index] || null;
        for (i = 0; i < normalized.normalizedInlineStartNodes; i++) {
            if (leftSibling) {
                if (leftSibling.nodeType == 1 /* TEXT */) {
                    insertionPoint.element.appendChild(normalized.at(i), insertionPoint.index);
                    insertionPoint.index++;
                }
                else {
                    leftSibling.appendChild(normalized.at(i));
                }
            }
            else {
                insertionPoint.element.appendChild(normalized.at(i));
                insertionPoint.index++;
            }
        }
        // insert normalizedmiddlenodes
        len = normalized.length - normalized.normalizedInlineStartNodes - normalized.normalizedInlineEndNodes;
        for (i = normalized.normalizedInlineStartNodes; i < normalized.normalizedInlineStartNodes + len; i++) {
            //console.warn( 'append: ', normalized.at( i ) );
            insertionPoint.element.appendChild(normalized.at(i), insertionPoint.index);
            insertionPoint.index++;
        }
        j = 0;
        for (i = normalized.length - normalized.normalizedInlineEndNodes; i < normalized.length; i++) {
            if (!rightSibling || rightSibling.nodeType == 1 /* TEXT */) {
                insertionPoint.element.appendChild(normalized.at(i));
            }
            else {
                rightSibling.appendChild(normalized.at(i), j);
                j++;
            }
        }
        if (hostElement.parentNode) {
            hostElement.parentNode.removeOrphanNodes();
        }
        else {
            hostElement.removeOrphanNodes();
        }
        this.viewport.document.relayout(true);
        if (rng.focusNode()) {
            rng.focusNode().fragPos = (normalized.at(normalized.length - 1)).FRAGMENT_END + 1;
            rng.focusNode().target = this.viewport.document.findNodeAtIndex(rng.focusNode().fragPos);
            rng.focusNode().moveLeftUntilCharacterIfNotLandedOnText();
            if (rng.focusNode().fragPos > this.viewport.document.fragment.length() - 1) {
                console.warn("Aici!");
            }
        }
        rng.collapse(true);
        rng.save();
        // defragment the document
        this.viewport.document.defragment();
        rng.restore();
        rng.fire('changed');
    };
    DocSelection.prototype.toString = function () {
        var range = this.getRange();
        if (range.focusNode() && range.anchorNode()) {
            return range.createContextualFragment().toString('text/html', true);
        }
        else {
            return range.anchorNode().target.nodeType == 2 /* ELEMENT */ ? range.anchorNode().target.outerHTML() : '';
        }
    };
    DocSelection.prototype.onchanged = function () {
        var clipboard = Clipboard.singleton(), element = clipboard.activeElement;
        if (element == this.viewport.canvas && clipboard.trap.parentNode) {
            clipboard['trap'].value = this['toString']();
            clipboard['trap']['select']();
        }
    };
    // selection is painted with two colors, depending on
    // the focus state of the viewport
    DocSelection.$Colors = {
        "focus": "#3399ff",
        "blur": "#ddddd"
    };
    return DocSelection;
})(Events);
// in order to build rich interfaces around the editor,
// we need the editorstate class, for knowing what states
// to display on the inputs of the toolbars of the editor
// The editorState fires a "changed" event ( propertyNames: string[] ) with the name of the
// properties that were changed.
var Selection_EditorState = (function (_super) {
    __extends(Selection_EditorState, _super);
    function Selection_EditorState(selection) {
        _super.call(this);
        this.selection = null;
        // the computed state.
        this.state = null;
        this.selection = selection;
        this.state = this.createEditorState();
    }
    Selection_EditorState.prototype.createEditorState = function () {
        return {
            bold: undefined,
            italic: undefined,
            underline: undefined,
            strike: undefined,
            textAlign: undefined,
            fontFamily: undefined,
            fontSize: undefined,
            fontColor: undefined,
            verticalAlign: undefined,
            blockLevel: undefined,
            listType: undefined,
            table: undefined,
            cell: undefined,
            picture: undefined,
            video: undefined,
            link: undefined,
            object: undefined
        };
    };
    Selection_EditorState.prototype.compute = function () {
        var nodes = [], rng = this.selection.getRange(), frag = null, i = 0, len = 0, state = this.createEditorState(), focus = rng.focusNode(), anchor = rng.anchorNode(), element = null, fBold = false, fItalic = false, fUnderline = false, fStrike = false, fTextAlign = null, fFontFamily = null, fFontSize = null, fFontColor = null, fVerticalAlign = null, fBlockLevel = null, fListType = null, textDecoration = null, nulls = 0, changed = [], k = '', blockElement, listType, fCursor, nodeMultiRng;
        if ((focus && rng.length()) || rng.isMultiRange()) {
            frag = rng.createContextualFragment();
            nodes = frag.affectedTextNodes();
        }
        else {
            if (anchor.target.nodeType == 1 /* TEXT */) {
                nodes.push(anchor.target);
            }
        }
        for (i = 0, len = nodes.length; i < len; i++) {
            if (nodes[i].parentNode != element) {
                element = nodes[i].parentNode;
                if (element) {
                    blockElement = element.ownerBlockElement();
                    switch (blockElement.nodeName) {
                        case 'p':
                        case 'li':
                        case 'td':
                        case 'body':
                            fBlockLevel = 'normal';
                            break;
                        case 'h1':
                        case 'h2':
                        case 'h3':
                        case 'h4':
                        case 'h5':
                        case 'h6':
                        case 'h7':
                            fBlockLevel = blockElement.nodeName;
                            break;
                    }
                    if (blockElement.nodeName == 'li' && blockElement.parentNode) {
                        switch (blockElement.parentNode.nodeName) {
                            case 'ul':
                            case 'ol':
                                fListType = blockElement.parentNode.nodeName;
                                break;
                            default:
                                fListType = null;
                                break;
                        }
                    }
                    else {
                        fListType = null;
                    }
                    fBold = element.style.fontWeight() == 'bold';
                    fItalic = element.style.fontStyle() == 'italic';
                    textDecoration = element.style.textDecoration();
                    fUnderline = (textDecoration == 'underline');
                    fStrike = (textDecoration == 'line-through');
                    fTextAlign = element.style.textAlign() || 'left';
                    fFontFamily = element.style.fontFamily() || 'Arial';
                    fFontSize = ~~element.style.fontSize() || 0;
                    fFontColor = element.style.color() || '#000000';
                    fVerticalAlign = element.style.verticalAlign() || 'normal';
                    if (state.blockLevel === undefined) {
                        state.blockLevel = fBlockLevel;
                    }
                    else {
                        if (state.blockLevel !== null && state.blockLevel !== fBlockLevel) {
                            state.blockLevel = null;
                            nulls++;
                        }
                    }
                    if (state.listType === undefined) {
                        state.listType = fListType;
                        if (fListType === null) {
                            nulls++;
                        }
                    }
                    else {
                        if (state.listType !== null && state.listType !== fListType) {
                            state.listType = null;
                            nulls++;
                        }
                    }
                    if (state.bold === undefined) {
                        state.bold = fBold;
                    }
                    else {
                        if (state.bold !== null && state.bold !== fBold) {
                            state.bold = null;
                            nulls++;
                        }
                    }
                    if (state.italic === undefined) {
                        state.italic = fItalic;
                    }
                    else {
                        if (state.italic !== null && state.italic !== fItalic) {
                            state.italic = null;
                            nulls++;
                        }
                    }
                    if (state.underline === undefined) {
                        state.underline = fUnderline;
                    }
                    else {
                        if (state.underline !== null && state.underline !== fUnderline) {
                            state.underline = null;
                            nulls++;
                        }
                    }
                    if (state.strike === undefined) {
                        state.strike = fStrike;
                    }
                    else {
                        if (state.strike !== null && state.strike !== fStrike) {
                            state.strike = null;
                            nulls++;
                        }
                    }
                    if (state.textAlign === undefined) {
                        state.textAlign = fTextAlign;
                    }
                    else {
                        if (state.textAlign !== null && state.textAlign !== fTextAlign) {
                            state.textAlign = null;
                            nulls++;
                        }
                    }
                    if (state.fontFamily === undefined) {
                        state.fontFamily = fFontFamily;
                    }
                    else {
                        if (state.fontFamily !== null && state.fontFamily !== fFontFamily) {
                            state.fontFamily = null;
                            nulls++;
                        }
                    }
                    if (state.fontSize === undefined) {
                        state.fontSize = fFontSize;
                    }
                    else {
                        if (state.fontSize !== null && state.fontSize !== fFontSize) {
                            state.fontSize = null;
                            nulls++;
                        }
                    }
                    if (state.fontColor === undefined) {
                        state.fontColor = fFontColor;
                    }
                    else {
                        if (state.fontColor !== null && state.fontColor !== fFontColor) {
                            state.fontColor = null;
                            nulls++;
                        }
                    }
                    if (state.verticalAlign === undefined) {
                        state.verticalAlign = fVerticalAlign;
                    }
                    else {
                        if (state.verticalAlign !== null && state.verticalAlign !== fVerticalAlign) {
                            state.verticalAlign = null;
                            nulls++;
                        }
                    }
                }
            }
            if (nulls == 11) {
                break;
            }
        }
        switch (true) {
            case rng.isMultiRange():
                nodeMultiRng = rng.anchorNode().target;
                switch (nodeMultiRng.role) {
                    case 'table-row':
                    case 'table-column':
                        state.table = false;
                        state.cell = (nodeMultiRng.childNodes[0]);
                        break;
                    case 'table-selection':
                        state.table = false;
                        state.cell = (nodeMultiRng.focus);
                        break;
                    default:
                        state.table = false;
                        state.cell = null;
                        break;
                }
                break;
            case !!!rng.focusNode():
                switch (rng.anchorNode().target.is()) {
                    case 'td':
                        state.cell = (rng.anchorNode().target);
                        state.table = false;
                        break;
                    default:
                        state.table = rng.anchorNode().target.isOrphanElement();
                        state.cell = null;
                        break;
                }
                break;
            case !!rng.focusNode():
                switch (rng.focusNode().target.ownerBlockElement().is()) {
                    case 'td':
                        state.cell = (rng.focusNode().target.ownerBlockElement());
                        state.table = false;
                        break;
                    default:
                        state.cell = null;
                        state.table = !!!rng.length() && !!!(rng.focusNode().target.firstParentOfType('td'));
                        fCursor = rng.focusNode().target.ownerBlockElement().parentNode;
                        while (fCursor) {
                            if (fCursor.is() == 'td') {
                                state.cell = fCursor;
                                break;
                            }
                            fCursor = fCursor.parentNode;
                        }
                        break;
                }
                break;
            default:
                state.cell = null;
                state.table = false;
        }
        /* Compute the picture, link, video, object states */
        state.link = !!focus;
        state.picture = true;
        state.video = true;
        state.object = true;
        if (!focus && !rng.isOrphan()) {
            if (anchor.target.is() != 'img') {
                state.picture = false;
            }
            if (anchor.target.is() != 'video') {
                state.video = false;
            }
            if (anchor.target.is() != 'object') {
                state.object = false;
            }
        }
        for (k in state) {
            if (state[k] !== this.state[k]) {
                changed.push(k);
                this.state[k] = state[k];
            }
        }
        if (changed.length) {
            this.fire('changed', changed);
        }
    };
    return Selection_EditorState;
})(Events);
/* We prefere to create a function instead of a class, because we want to parasitate
   a HTMLDivElement.
*/
function HTMLEditor(value, config) {
    if (config === void 0) { config = null; }
    config = config || {};
    /* Custom eventing system */
    var $EVENTS_QUEUE, $EVENTS_ENABLED = true, settings = {
        width: config.width == void 0 ? 128 : ~~config.width,
        height: config.height == void 0 ? 128 : ~~config.height,
        toolbars: config.toolbars == void 0 ? !!config.toolbars : true,
        statusbar: config.statusbar == void 0 ? !!config.statusbar : true,
        resizable: config.resizable == void 0 ? !!config.resizable : true,
        readOnly: config.readOnly == void 0 ? !!config.readOnly : true,
        disabled: config.disabled == void 0 ? !!config.disabled : true
    }, element = document.createElement('div'), toolbar = element.appendChild(document.createElement('div')), body = element.appendChild(document.createElement('div')), statusbar = element.appendChild(document.createElement('div')), resizediv = element.appendChild(document.createElement('div')), ui_toolbar, resizer = new Throttler(function () {
        resize(settings.width, settings.height);
    }, 10), viewport = new Viewport();
    if (settings.width < 128) {
        settings.width = 128;
    }
    if (settings.height < 128) {
        settings.height = 128;
    }
    DOM.addClass(element, 'html-editor');
    DOM.addClass(toolbar, 'toolbar');
    DOM.addClass(statusbar, 'statusbar');
    DOM.addClass(body, 'body');
    DOM.addClass(resizediv, 'resizer');
    /* Event handlers. */
    element['on'] = function (eventName, callback) {
        $EVENTS_QUEUE = $EVENTS_QUEUE || {};
        if (!$EVENTS_QUEUE[eventName])
            $EVENTS_QUEUE[eventName] = [];
        $EVENTS_QUEUE[eventName].push(callback);
    };
    element['off'] = function (eventName, callback) {
        if ($EVENTS_QUEUE && $EVENTS_QUEUE[eventName]) {
            for (var i = 0, len = $EVENTS_QUEUE[eventName].length; i < len; i++) {
                if ($EVENTS_QUEUE[eventName][i] == callback) {
                    $EVENTS_QUEUE[eventName].splice(i, 1);
                    return;
                }
            }
        }
    };
    element['fire'] = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ($EVENTS_QUEUE && $EVENTS_QUEUE[eventName]) {
            for (var i = 0, len = $EVENTS_QUEUE[eventName].length; i < len; i++) {
                $EVENTS_QUEUE[eventName][i].apply(element, args);
            }
        }
    };
    /* Viewport initialization */
    viewport.document.on('change', function () {
        element.fire('change');
    });
    ui_toolbar = new UI_Toolbar(toolbar, viewport.router, viewport.selection.editorState);
    // append the canvas in the body element of the editor
    body.appendChild(viewport.canvas);
    if (settings.toolbars) {
        DOM.addClass(element, 'has-toolbar');
    }
    if (settings.statusbar) {
        DOM.addClass(element, 'has-statusbar');
    }
    Object.defineProperty(element, "width", {
        "get": function () {
            return settings.width;
        },
        "set": function (value) {
            value = ~~value;
            if (value < 128) {
                value = 128;
            }
            settings.width = value;
            resizer.run();
        }
    });
    Object.defineProperty(element, "height", {
        "get": function () {
            return settings.height;
        },
        "set": function (value) {
            value = ~~value;
            if (value < 128) {
                value = 128;
            }
            settings.height = value;
            resizer.run();
        }
    });
    Object.defineProperty(element, "toolbars", {
        "get": function () {
            return settings.toolbars;
        },
        "set": function (value) {
            settings.toolbars = !!value;
            if (settings.toolbars) {
                DOM.addClass(element, 'has-toolbar');
            }
            else {
                DOM.removeClass(element, 'has-toolbar');
            }
            resizer.run();
        }
    });
    Object.defineProperty(element, "statusbar", {
        "get": function () {
            return settings.statusbar;
        },
        "set": function (value) {
            settings.statusbar = !!value;
            if (settings.statusbar) {
                DOM.addClass(element, 'has-statusbar');
                viewport.selection.fire('changed');
            }
            else {
                DOM.removeClass(element, 'has-statusbar');
            }
            resizer.run();
        }
    });
    Object.defineProperty(element, "resizable", {
        "get": function () {
            return settings.resizable;
        },
        "set": function (bool) {
            settings.resizable = !!bool;
            if (settings.resizable) {
                DOM.addClass(element, 'is-resizable');
            }
            else {
                DOM.removeClass(element, 'is-resizable');
            }
        }
    });
    Object.defineProperty(element, "value", {
        "get": function () {
            return viewport.document.innerHTML();
        },
        "set": function (html) {
            if (html === void 0) { html = ''; }
            viewport.value(html || '<p></p>');
        }
    });
    Object.defineProperty(element, "document", {
        "get": function () {
            return viewport.document;
        }
    });
    Object.defineProperty(element, "viewport", {
        "get": function () {
            return viewport;
        }
    });
    Object.defineProperty(element, "router", {
        "get": function () {
            return viewport.router;
        }
    });
    Object.defineProperty(element, "state", {
        "get": function () {
            return viewport.selection.editorState;
        }
    });
    Object.defineProperty(element, "selection", {
        "get": function () {
            return viewport.selection;
        }
    });
    Object.defineProperty(element, "fragment", {
        "get": function () {
            return viewport.document.fragment;
        }
    });
    function resize(newWidth, newHeight) {
        element.style.width = newWidth + "px";
        element.style.height = newHeight + "px";
        var left = settings.height;
        if (settings.toolbars) {
            left -= 46;
        }
        if (settings.statusbar) {
            left -= 22;
        }
        body['style'].height = left + "px";
        viewport.height(left);
        viewport.width(settings.width);
        ui_toolbar.resize(settings.width);
        element.style.width = settings.width + "px";
    }
    viewport.selection.editorState.on('changed', function (properties) {
        ui_toolbar.updateDocumentState(properties);
    });
    (function (me) {
        var links = [], i = 0, len = 0, anchor = null;
        for (i = 0; i < 40; i++) {
            anchor = document.createElement('a');
            anchor.appendChild(document.createTextNode(' '));
            (function (link) {
                link.addEventListener('click', function () {
                    if (link.getAttribute('data-ignore-click')) {
                        return;
                    }
                    var start = ~~link.getAttribute('data-start'), stop = ~~link.getAttribute('data-stop');
                    viewport.selection.selectByFragmentIndexes(start, stop);
                    viewport.canvas.focus();
                });
                link.href = 'javascript:;';
            })(anchor);
            links.push(anchor);
        }
        viewport.selection.on('changed', function () {
            if (!settings.statusbar) {
                return;
            }
            var rng = viewport.selection.getRange(), focus = rng.focusNode(), anchor = rng.anchorNode(), debug = focus || anchor, node = debug.target, stack = [], i = 0, j = 0;
            while (statusbar.childNodes.length) {
                statusbar.removeChild(statusbar.childNodes[0]);
            }
            i = -1;
            while (node) {
                i++;
                if (node.nodeType == 1 /* TEXT */) {
                    i--;
                    node = node.parentNode;
                    if (node.is() == 'br') {
                        node = node.parentNode;
                    }
                    continue;
                }
                else {
                    links[i].firstChild.textContent = node.is() == 'multirange' ? node.role : (node.is().toUpperCase());
                    if (node.is() == 'multirange') {
                        links[i].setAttribute('data-ignore-click', '1');
                    }
                    else {
                        links[i].removeAttribute('data-ignore-click');
                    }
                }
                links[i].setAttribute('data-start', String(node.FRAGMENT_START));
                links[i].setAttribute('data-stop', String(node.FRAGMENT_END));
                node = node.parentNode;
            }
            for (j = i; j >= 0; j--) {
                statusbar.appendChild(links[j]);
            }
        });
    })(this);
    (function () {
        var delta = {
            "x": 0,
            "y": 0
        }, previousPoint = {
            "x": 0,
            "y": 0
        };
        function onresize_run(evt) {
            delta.x = evt.clientX - previousPoint.x;
            delta.y = evt.clientY - previousPoint.y;
            if (delta.x || delta.y) {
                element['width'] += delta.x;
                element['height'] += delta.y;
            }
            previousPoint.x = evt.clientX;
            previousPoint.y = evt.clientY;
            evt.preventDefault();
            evt.stopPropagation();
        }
        function onresize_end(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            viewport.document.canRelayout = true;
            viewport.document.relayout(true);
            viewport.paintScrollbars();
            document.body.removeEventListener('mousemove', onresize_run, true);
            document.body.removeEventListener('mouseup', onresize_end, true);
        }
        resizediv.addEventListener('mousedown', function (evt) {
            previousPoint.x = evt.clientX;
            previousPoint.y = evt.clientY;
            evt.preventDefault();
            evt.stopPropagation();
            viewport.document.canRelayout = false;
            document.body.addEventListener('mousemove', onresize_run, true);
            document.body.addEventListener('mouseup', onresize_end, true);
        }, true);
    })();
    element['value'] = value;
    element['resizable'] = settings.resizable;
    resize(settings.width, settings.height);
    return element;
}
var UI_Resources = (function () {
    function UI_Resources() {
    }
    UI_Resources._init_ = function () {
        var props = ["html_alert", "png_alertIcon", "html_clipboardToolbar", "gif_cursorCellSelect", "gif_cursorColSelect", "gif_cursorRowSelect", "html_demo", "html_editLink", "html_fileBrowser", "html_formattingToolbar", "html_insertLink", "html_insertPicture", "img_insertPicture", "html_insertVideo", "html_multimediaToolbar", "html_tableToolbar", "html_undoManagerToolbar"];
        for (var i = 0, len = props.length; i < len; i++) {
            if (/^html_/.test(props[i])) {
                UI_Resources._patch_(props[i]);
            }
        }
    };
    UI_Resources._patch_ = function (propertyName) {
        var s = UI_Resources[propertyName], matches;
        while (matches = /(\{([a-zA-Z\d\_]+)\})/.exec(s)) {
            s = s.replace(matches[1], UI_Resources[matches[2]] || "");
        }
        //console.log( "patched: ", propertyName, ", value: ", s );
        UI_Resources[propertyName] = s;
    };
    UI_Resources.html_alert = "<div class=\"dialog-body\">\r\n\r\n\t<img src=\"{png_alertIcon}\" style=\"float: left; border: 0;\" />\r\n\r\n\t<p class=\"alert-text\" style=\"margin-left: 50px; margin-top: 7px; margin-right: 10px;\"></p>\r\n\r\n</div>";
    UI_Resources.png_alertIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABFBJREFUeNrsl11Mk1cYx3/n7VsKRYWBJB22fAhY+drcQlQ6wDjnGDKMWbaQjCzZssgyL9gWYsi2sISLXRgy48W8mJk3JmQajRGvNPGu7a5MYAskmABOFBVQqq6l0vfj7KK1gLZQicrNTvLPm77nnP/zP8/zvM/TI6SUrOVQWOOx5gJUrn+x6s3e3j4XQP3htpur5RBy/PPVGF4H/GzLVL8CmA/pvwE/1h9uCz6/B1Y3uguqNx4qqKtVUazc9P956Mbg3RDww0vPAW9vnye3rOS7wo86VZHjRmQVUbC/Q80u3NTp7e3zvIokbN/8br1K5BZE7oA2BdpdSt5rsALtzy/ANEkV3t6+L4t31bWl57kEkftgGlFEZrDnu4VrZ02bt7ev9Xk4FaRJKvD+8odFUZRfnbuaVR7fAFNfBA3C/+Cs9ahAe6qcSBMlfoqVAN3lB5rTiExD5NFTAnSIBFDTbWxtadzlPXqmK1XelELgPXauKnNjzvc5VTsUQtfjRrfvO8v2fWfB0KOEoTHytjVY7Lmv9XiPnXOlFAJp6KwE4OCWpj1WGZpA6nNIQ0PqGlKKKAwtCi2InLvBlsY9VqAjFe4VQ+A7frHJUV319bqCckFwPHZaDUwdEwUTZSEPDB2C46wvrlAc1VXf+I5fbFo5BIbBsoCDhfUeVQaGQZsHI2bI0DClwJRiyTu0eWRgmMJ6jwocXIlfiW5MDN+JSx1le3fvT8u0C0KTC6c0NDA0DKlgSCX+O+6d0CRp6zeIkt11Lb4TlzqWs6E8k80x+E5eyVIzMo44du61yJmBuNujIpIIWLRGzgyQX9+sKhbLEd/JK1nJ7CT3AHSVf7AnTc4Ow3xgycmTe2CRJ8IzyMA1Kj58Pw3oSu6BRK4/5duR7crvzCp1K8z8ndR9prRgSkvSeaYHyHZXK1n5jk7fKZ8noYAkn117ce3bKtN/IY15pGkgzWfXPfHAMxymHt2jh2F6kM2et1SgPfFn+JQi/+mrrY5K92eZuTmKDIyzXAIthCD5Gjk7SmZenvJ61dZP/aevtj49r8bivaTbOd/YoppTA09KMAiRsJNd768EwLw/lbjVSQkmyKkBNlWXqXeGRtox9DNLu+Hi058f6iqqqWywiaAgPAty+SLibBnB2TKyfL2XBoRnsYmgKKqpbPCfH+pKmIT+/hGXzZ7R4yh1WuS90YVioRug67HnUsQrYYK5+J4Yj7w3iqPUabHZM3r8/SOuRXUg3u06CitcqvJwQqCFF4wbBuhmQiO3L5Ry+0JpEgHmUg4tjPJwQhRWuFSg44ldYVwowX95osS+Pn14W53bJh/dAkUiFAHiBf33liBNCaZAbHAy6Ls2P/fv48p3GgvGVMuBMevvH6tvllkjIqI+gLxsXpzlBEqMBzwMRsTwpCxoODA2IYBMIO9oi/pTrp1PEFhf9mUkMMfZby/q3cCMAKwxEdZXfCnSgJD4/3K61gL+GwAUP0sadjombQAAAABJRU5ErkJggg==";
    UI_Resources.html_clipboardToolbar = "<div class=\"item index-1\">\r\n\t<div class=\"ui-button cut\" title=\"Cut (Ctrl + X)\"></div><div \r\n\t\tclass=\"ui-button copy\" title=\"Copy (Ctrl + C)\"></div><div \r\n\t\tclass=\"ui-button paste\" title=\"Paste (Ctrl + V)\"></div>\r\n</div>";
    UI_Resources.gif_cursorCellSelect = "data:image/gif;base64,R0lGODlhFAAUAKECAAAAAP7+/v///////yH5BAEKAAIALAAAAAAUABQAAAJElI8AyG0QlpswTlftTaHrLWSdtIkjaJ5XqmLe2zLKDH/r6JF3VOmuBpkJFYfegxhKPFoLic7JHA5DsafSWFRmQz7psAAAOw==";
    UI_Resources.gif_cursorColSelect = "data:image/gif;base64,R0lGODlhDAASAKEAAP///wAAAP///////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAIALAAAAAAMABIAAAImlBUZxwiwmgkvSgrlrNpljVlN2JEgd34XOimh6z2yis1irDImeBcAOw==";
    UI_Resources.gif_cursorRowSelect = "data:image/gif;base64,R0lGODlhEgAMAKEAAP///wAAAP///////yH5BAEKAAIALAAAAAASAAwAAAIllI8WyRzbYgAwpknV23yDv2DfSJZPiZrdeoIWglWvMMnzM19JAQA7";
    UI_Resources.html_demo = "<p>asd</p>\r\n<video width=\"200\" poster=\"./_assets/pic1.jpg\" controls >\r\n\t<source src=\"movie.mp4\" type=\"video/mp4\">\r\n\tYour browser does not support the HTML VIDEO ELEMENT.\r\n</video>\r\n<p>123</p>";
    UI_Resources.html_editLink = "<div class=\"dialog-body\">\r\n\r\n\t<fieldset>\r\n\t\t<legend>Hyperlink</legend>\r\n\r\n\t\t<label>\r\n\t\t\t<span>Link:</span>\r\n\t\t\t<input type=\"text\" class=\"i-link focus-first\" />\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\t<span>Open In:</span>\r\n\t\t\t<select class=\"s-target\">\r\n\t\t\t\t<option value=\"\">Current Window</option>\r\n\t\t\t\t<option value=\"_blank\">New Window</option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</fieldset>\r\n\r\n</div>";
    UI_Resources.html_fileBrowser = "<div class=\"htmleditor-fs\">\r\n\r\n\t<div class=\"toolbar\">\r\n\t\t<div class=\"location\">\r\n\t\t\t<label>\r\n\t\t\t\t<span class=\"label\">Location:</span>\r\n\t\t\t\t<input type=\"text\" class=\"fs-location focus-first\" />\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t\t<div class=\"buttons\">\r\n\t\t\t<div class=\"button up\" title=\"Up\"></div><div\r\n\t\t\t\t class=\"button refresh\" title=\"Refresh\"></div><div \r\n\t\t\t\t class=\"button asc\" title=\"Sort Ascending\"></div><div \r\n\t\t\t\t class=\"button desc\" title=\"Sort Descending\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"files\">\r\n\t</div>\r\n\r\n</div>";
    UI_Resources.html_formattingToolbar = "<div class=\"item index-1\">\r\n\t<div class=\"ui-button remove-formatting\" title=\"Clear Formatting\"></div>\r\n</div><div class=\"item index-2\">\r\n\t<div class=\"text-dropdown\">\r\n\t\t<input class=\"nodeName\" type=\"text\" data-suggestions=\"normal:Normal,blockquote:Quotation,h1:Heading 1,h2:Heading 2,h3:Heading 3,h4:Heading 4,h5:Heading 5,h6:Heading 6\" placeholder=\"Style\" value=\"\" >\r\n\t\t<div class=\"expander\"></div>\r\n\t</div>\r\n\t<div class=\"text-dropdown\">\r\n\t\t<input class=\"fontFamily\" type=\"text\" data-suggestions value=\"\" placeholder=\"Font\" />\r\n\t\t<div class=\"expander\"></div>\r\n\t</div>\r\n\t<div class=\"text-dropdown\">\r\n\t\t<input class=\"fontSize\" type=\"text\" data-suggestions=\"8,9,10,12,14,16,18,20,22,24,26,28,30,32\" value=\"\" placeholder=\"Size\" />\r\n\t\t<div class=\"expander\"></div>\r\n\t</div>\r\n</div><div class=\"item index-5\">\r\n\t<div class=\"ui-button bold state\" title=\"Bold (Ctrl+B)\"></div><div\r\n\t\t class=\"ui-button italic\" title=\"Italic (Ctrl+I)\"></div><div\r\n\t\t class=\"ui-button underline\" title=\"Underline (Ctrl+U)\"></div><div\r\n\t\t class=\"ui-button strike\" title=\"Strike\"></div>\r\n</div><div class=\"item index-6\">\r\n\t<div class=\"ui-button subscript\"   title=\"Subscript\"></div><div\r\n\t\t class=\"ui-button superscript\" title=\"Superscript\"></div>\r\n</div><div class=\"item index-7\">\r\n\t<div class=\"ui-button left\" title=\"Left (Ctrl+L)\"></div><div\r\n\t\t class=\"ui-button center\" title=\"Center (Ctrl+E)\"></div><div\r\n\t\t class=\"ui-button right\" title=\"Right (Ctrl+R)\"></div><div\r\n\t\t class=\"ui-button justified\" title=\"Justified (Ctrl+J)\"></div>\r\n</div><div class=\"item index-8\">\r\n\t<div class=\"ui-button ol\" title=\"Ordered List\"></div><div\r\n\t\t class=\"ui-button ul\" title=\"Bulleted List\"></div><div\r\n\t\t class=\"ui-button increase\" title=\"Increase Indent (Tab)\"></div><div\r\n\t\t class=\"ui-button decrease\" title=\"Decrease Indent (Shift + Tab)\"></div>\r\n</div><div class=\"item index-9\">\r\n\t<div\r\n\t\t class=\"ui-button ui-color-button color\" title=\"Color\"></div>\r\n</div>\r\n";
    UI_Resources.html_insertLink = "<div class=\"dialog-body\">\r\n\r\n\t<fieldset>\r\n\t\t<legend>Hyperlink</legend>\r\n\r\n\t\t<label>\r\n\t\t\t<span>Text:</span>\r\n\t\t\t<input type=\"text\" class=\"i-text\" />\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\t<span>Link:</span>\r\n\t\t\t<input type=\"text\" class=\"i-link focus-first\" />\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\t<span>Open In:</span>\r\n\t\t\t<select class=\"s-target\">\r\n\t\t\t\t<option value=\"\">Current Window</option>\r\n\t\t\t\t<option value=\"_blank\">New Window</option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</fieldset>\r\n\r\n</div>";
    UI_Resources.html_insertPicture = "<div class=\"dialog-body\">\r\n\r\n\t<fieldset>\r\n\r\n\t\t<legend>Source</legend>\r\n\r\n\t\t<label class=\"two-lines\">Specify a picture source, or browse for a picture:</label>\r\n\r\n\t\t<div class=\"horizontal-flex one-kid\">\r\n\t\t\t<div class=\"cell\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<span>Source:</span> \r\n\t\t\t\t\t<input type=\"text\" class=\"txt-src focus-first\" />\r\n\t\t\t\t\t<button class=\"browse\">...</button>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</fieldset>\r\n\t<fieldset>\r\n\t\t\r\n\t\t<legend>Settings</legend>\r\n\r\n\r\n\t\t<div class=\"horizontal-flex two-kids\">\r\n\r\n\t\t\t<div class=\"cell\">\r\n\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<span>Width:</span>\r\n\t\t\t\t\t<input type=\"number\" class=\"int-width\" disabled style=\"max-width: 50px\" />\r\n\t\t\t\t</label>\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<span>Height:</span>\r\n\t\t\t\t\t<input type=\"number\" class=\"int-height\" disabled style=\"max-width: 50px\" />\r\n\t\t\t\t</label>\r\n\t\t\t\t<label class=\"checkbox\">\r\n\t\t\t\t\t<span>Maintain propoportions:</span>\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"bool-proportions\" disabled />\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"cell\" style=\"text-align: right\">\r\n\t\t\t\r\n\t\t\t\t<img class=\"img-preview\" style=\"display: inline-block; margin: 10px 0px 10px 10px; max-width: 150px; max-height: 150px\" src=\"{img_insertPicture}\" />\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"horizontal-flex one-kid\">\r\n\r\n\t\t\t<div class=\"cell\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<span>Alternate text:</span>\r\n\t\t\t\t\t<input type=\"text\" class=\"txt-alt\" />\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\r\n\t</fieldset>\r\n\r\n</div>";
    UI_Resources.img_insertPicture = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAAErCAIAAAAJxjLjAAAK22lDQ1BJQ0MgUHJvZmlsZQAASA2tlndUU0kXwO97aaTRAqFICb0jvUqvARSkCjZCEkgoIQSCiF1ZVHAtqIiAuqIrIgquBZC1IKLYFsHeF2RRUdbFgg2V7wUku+c73/73zTkz83t37ty5d96dcy4A7SFHLM5ElQGyRHmS6BB/1qzEJBbpMRBAA5SAAaYcbq7YLyoqAv61vb8NiGzxho3M1r+q/e8FFR4/lwuARGHLKbxcbhbGx7DezhVL8gBwBZjcaEGeWMbVGKtJMAcxPizjtAnukHHKBN8d14mNDsB0hgAUaByOJA2A+hGTs/K5aZgdmibGdiKeUIRxKMbeXAGHh/EajK2zsrJljPkA5in/sJP2D+ZwUuQ2OZw0OU/Egu3EDg4U5oozOQvHP/6fQ1amFLuv8WaAjTSBJDQam02xO6vOyA6XsyhlRuSkXIhFNMkCaWjcJHNzA7C7nNjL4wSGT7I0I85vkjkSjL7rCPPYsZMsyY6W2xdlzpDlx7gPAj5bzvzcoJhJeaowmD3JhYLYhEnOF8bPmOTcjBi5D4WCALlcIo2W+5wqCZbHmJWL7fx+Lpfz91l5gljZfx33h8cPDJpkvihO7o84z19uR5w5nt/j+vzMELk8Nz9GvjdPEiuXp3PCZPk6ri/Oi5LfCcSCAKQgAh7wQQIpkA2ZkAcsCAQh5IIY++IAlhJ5/AIsDwECssULJcI0QR7LD3s5fBZbxLW1ZjnY2TsByN6hTAfgLXP8fSHMy3/LctoA3Euwfy57AiyZFgDHCODEUwDG+79lRm+wFNkIcKqbK5XkT+jhZRMBKNj7VgMt0AMjMAcbcAAX8ARfCIIwiMQiSYR5wMXiycIiWQCLYQUUQylshK1QCbtgD+yHQ3AEmuEknIULcAW64RY8gF4YgJcwDO9hFEEQEkJHGIgWoo+YIFaIA+KGeCNBSAQSjSQiyUgaIkKkyGJkFVKKlCGVyG6kDvkFOYGcRS4hPcg9pA8ZRN4gn1EcSkPVUF3UFJ2KuqF+aDgai85F09ActBAtQtejFWgNehBtQs+iV9BbaC/6Eh3BAY6KY+IMcDY4N1wALhKXhEvFSXBLcSW4clwNrgHXiuvE3cD14oZwn/BEPAPPwtvgPfGh+Dg8F5+DX4pfh6/E78c34TvwN/B9+GH8NwKdoEOwIngQ2IRZhDTCAkIxoZywj3CccJ5wizBAeE8kEplEM6IrMZSYSEwnLiKuI+4gNhLbiD3EfuIIiUTSIlmRvEiRJA4pj1RM2k46SDpDuk4aIH1UoCroKzgoBCskKYgUViqUKxxQOK1wXeGZwihZmWxC9iBHknnkheQN5L3kVvI18gB5lKJCMaN4UWIp6ZQVlApKA+U85SHlLZVKNaS6U2dShdTl1ArqYepFah/1E02VZkkLoM2hSWnrabW0Nto92ls6nW5K96Un0fPo6+l19HP0x/SPigxFW0W2Ik9xmWKVYpPidcVXSmQlEyU/pXlKhUrlSkeVrikNKZOVTZUDlDnKS5WrlE8o31EeUWGo2KtEqmSprFM5oHJJ5bkqSdVUNUiVp1qkukf1nGo/A8cwYgQwuIxVjL2M84wBNaKamRpbLV2tVO2QWpfasLqqupN6vHqBepX6KfVeJo5pymQzM5kbmEeYt5mfNXQ1/DT4Gms1GjSua3zQnKLpq8nXLNFs1Lyl+VmLpRWklaG1SatZ65E2XttSe6b2Au2d2ue1h6aoTfGcwp1SMuXIlPs6qI6lTrTOIp09Old1RnT1dEN0xbrbdc/pDukx9Xz10vW26J3WG9Rn6HvrC/W36J/Rf8FSZ/mxMlkVrA7WsIGOQaiB1GC3QZfBqKGZYZzhSsNGw0dGFCM3o1SjLUbtRsPG+sbTjRcb1xvfNyGbuJkITLaZdJp8MDUzTTBdbdps+txM04xtVmhWb/bQnG7uY55jXmN+04Jo4WaRYbHDotsStXS2FFhWWV6zQq1crIRWO6x6rAnW7tYi6xrrOzY0Gz+bfJt6mz5bpm2E7UrbZttXU42nJk3dNLVz6jc7Z7tMu712D+xV7cPsV9q32r9xsHTgOlQ53HSkOwY7LnNscXztZOXEd9rpdNeZ4TzdebVzu/NXF1cXiUuDy6CrsWuya7XrHTc1tyi3dW4X3Qnu/u7L3E+6f/Jw8cjzOOLxl6eNZ4bnAc/n08ym8aftndbvZejF8drt1evN8k72/sm718fAh+NT4/PE18iX57vP95mfhV+630G/V/52/hL/4/4fAjwClgS0BeICQwJLAruCVIPigiqDHgcbBqcF1wcPhziHLAppCyWEhoduCr3D1mVz2XXs4TDXsCVhHeG08JjwyvAnEZYRkojW6ej0sOmbpz+cYTJDNKM5EiLZkZsjH0WZReVE/TqTODNqZtXMp9H20YujO2MYMfNjDsS8j/WP3RD7IM48ThrXHq8UPye+Lv5DQmBCWULvrKmzlsy6kqidKExsSSIlxSftSxqZHTR76+yBOc5ziufcnms2t2DupXna8zLnnZqvNJ8z/2gyITkh+UDyF04kp4YzksJOqU4Z5gZwt3Ff8nx5W3iDfC9+Gf9ZqldqWerzNK+0zWmDAh9BuWBIGCCsFL5OD03flf4hIzKjNmMsMyGzMUshKznrhEhVlCHqyNbLLsjuEVuJi8W9OR45W3OGJeGSfblI7tzcljw1rOC5KjWX/iDty/fOr8r/uCB+wdEClQJRwdWFlgvXLnxWGFz48yL8Iu6i9sUGi1cs7lvit2T3UmRpytL2ZUbLipYNLA9Zvn8FZUXGit9W2q0sW/luVcKq1iLdouVF/T+E/FBfrFgsKb6z2nP1rjX4NcI1XWsd125f+62EV3K51K60vPTLOu66yz/a/1jx49j61PVdG1w27NxI3CjaeHuTz6b9ZSplhWX9m6dvbtrC2lKy5d3W+VsvlTuV79pG2Sbd1lsRUdGy3Xj7xu1fKgWVt6r8qxqrdarXVn/YwdtxfafvzoZdurtKd33+SfjT3d0hu5tqTGvK9xD35O95ujd+b+fPbj/X7dPeV7rva62otnd/9P6OOte6ugM6BzbUo/XS+sGDcw52Hwo81NJg07C7kdlYehgOSw+/+CX5l9tHwo+0H3U72nDM5Fj1ccbxkiakaWHTcLOgubclsaXnRNiJ9lbP1uO/2v5ae9LgZNUp9VMbTlNOF50eO1N4ZqRN3DZ0Nu1sf/v89gfnZp272TGzo+t8+PmLF4IvnOv06zxz0eviyUsel05cdrvcfMXlStNV56vHf3P+7XiXS1fTNddrLd3u3a0903pOX/e5fvZG4I0LN9k3r9yacavndtztu3fm3Om9y7v7/F7mvdf38++PPlj+kPCw5JHyo/LHOo9rfrf4vbHXpfdUX2Df1ScxTx70c/tf/pH7x5eBoqf0p+XP9J/VPXd4fnIweLD7xewXAy/FL0eHiv9U+bP6lfmrY3/5/nV1eNbwwGvJ67E3695qva195/SufSRq5PH7rPejH0o+an3c/8ntU+fnhM/PRhd8IX2p+GrxtfVb+LeHY1ljY2KOhDNeC+CwEU1NBXhTC0BPxGqHbgCK4kSdPK6BTNT2GCPfu0z8XzxRS8sWsBoCan0B4pYDRLQB7MS6CcY0bJaVTLG+gDo6yjsmkbXcVEeHcUBoEqw0+Tg29lYXgNQK8FUyNja6Y2zs616snr8H0JYzUZ/LtInKAGVmTBW89ZWWz8vH9/9j+A99VwmaRs6nBgAAAZ1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+Mjk5PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI5OTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgq4Jt/NAAATSklEQVR4Ae2dXYxcZRnHKbTS1LS2lJZtm36RNDFcmWA08eNSasBoEBPxI0owwXiDJpJggtEYNEHCBRdeGL0wXGjCRUuhUBAUpLERtEAwpUG27W67dLvd7Xa32+6y3+vDDjsM87XnnJlz3vf/zG8utmfOvOd9n+f/f389Z545886Ko0ePXsUDBVAgkAJXBxqXYVEABd5XAAKZBygQUgEIDKk+Y6MABDIHUCCkAhAYUn3GRgEIZA6gQEgFIDCk+oyNAhDIHECBkApAYEj1GRsFIJA5gAIhFYDAkOozNgpAIHMABUIqAIEh1WdsFIBA5gAKhFQAAkOqz9goAIHMARQIqQAEhlSfsVEAApkDKBBSAQgMqT5jowAEMgdQIKQCEBhSfcZGAQhkDqBASAUgMKT6jI0CEMgcQIGQCkBgSPUZGwUgkDmAAiEVgMCQ6jM2CkAgcwAFQioAgSHVZ2wUWJmfBDfffHN+ndMzChSswGuvvZbHiJwD81CVPlEgqQIQmFQp2qFAHgpAYB6q0icKJFUAApMqRTsUyEMBCMxDVfpEgaQKQGBSpWiHAnkoAIF5qEqfKJBUAQhMqhTtUCAPBSAwD1XpEwWSKgCBSZWiHQrkoQAE5qEqfaJAUgUgMKlStEOBPBSAwDxUpU8USKoABCZVinYokIcCOX47KY9w6TOgApOTkxMTE/Z3avExOzs7Pz8/Nzdnf6+++uprrrnG/q5cufLaxcfq1avXrFljfwMGLDE0BErYFCzImZmZ0dHRy4sPQ65RHAahPexVY3N8fLzczIBcu/hYv379qlWryvvZKCsAgWUp2PhQAcPJwBseHh4bG/twb/otg3Zk8XHmzJl169Zt3LjRULRTZfqe3B4BgW6tzZaYMTM0NDQ4ONjkjJetZ4PZHnZW3Lx586ZNm2wjWz/OjkIFZ4ZmT8fe0Q0MDBh7pevJ7B01PdLA7u/vt4GMw66uLnv32LS5/xch0L/HSTK0S8W+vj5715ekcettDHKD0K5yt2/fvmHDhtY71O0BAnW9a0/kRl1vb69dH7anuzS92NCnTp2y94e7du3q2DoN74nTTBl3bQ2848ePB8GvrGUMMZSDKX4DAovXPJYRz507193d3faKS4b0LAaLxOLJcKz6IVyFqjuYJf6FhQX7eODChQtZDs7tGKvQTE9P79ixY8WKFbkNEl3HEBidJXkHZFWQnp4e+7gv74Ey9G//Kdj5cPfu3Z3zmSFXoRnmifAhdvaLFr+SrPZfg0VocQqrnCZ0CEyjln5bu/iM8+xXKa1FaHFW7nG8DYGOza1OzUodsb33qw5x6bnF2SGFGQhc8tz7v1b0t1KHUJYWbdiPSYrRCgKL0TnwKPbZt725ChxE+uEt5sJu00kfXXuOgMD26Bh5L3bXSwyf+6VVyWK2yNMepdUeArX8yhKt3fOpezlnkVv8WdIWOQYCRYzKGqZ948Fuuc56dBTHWfyWRRSh5BAEBOYgakxd2lcQ1N9KWfyWRUyitjMWCGynmrH1Ze+j7Pt+sUWVIZ48vjGcIYw8DoHAPFSNpU/7tnuuX7ctLE/LwnIpbLgiB4LAItUudCybtT5OgCXV8v7yfqHeVAwGgRVi+Nq0e7sUP4FoZILlEv/9dI2Cb7IfApuIo/2SrQGhnUBN9P4yshQhsMZnFzusfqj7GWAjBywj9bpubWoQWKuJhz0uL9jMGH95QaAH3mpzsEWua3c62OMvLwh0MC3rpOBvppaS9JcXBNaZvuq77MdVPFVBK+2wvCy7yj3q2xCo7mCd+O0Xjurs9bLLWXYQ6GViVuTh7CxRkdn7m86yg8Aqfz08tZ8Q85BGgxycZQeBDXxW3u3sLFFlBQRWCcLT6BRw/G0609pZkYlzYHT8tB6QbwKdZQeBrU/46Hrw8Y2kRrI6yw4CGxktvN/ZHK1ywll2EFjlr4envn90wVl2EOgBuaocfP80tLPsILBq9np46uwsUWWJs+wgsMpfD09XrvT8o3TOsoNAD8hV5XDttddW7fH01Fl2EOhpcn6Qi7M5WuWQs+wgsMpfD09Xr17tIY0GOTjLDgIb+Ky8e82aNcrhLxO7s+wgcBm/FV+2s4SzckXZBcuLc2BZDTbiVWDt2rXxBtdCZP7y4hzYwnSI+FB/M7Uktr+8IDBijFoIbf369S0cHe+h/vKCwHhnWyuRrVq1at26da30EOGxlpHlFWFgrYQEga2oF/WxGzdujDq+9MH5y8g0gMD0E0HkCLtg81QRtVz8XYJCoAhMmcK0O5g3b96c6dAYD7JcnN2TXVKZc2CMs61dMW3atMnHrLUsLJd2yRJVPxAYlR1tDsau3HycBi0LT1fUlTZDYKUaDre7urrU64cWv2Xh0JvFlCDQq7Mf5GXfKN++fbt0kha/s+/FV9oBgZVqLL/dc2nq2AWxX2XYsGGD7meDFrnFv7wxObcw33MaAQJTCHv0/PgdB0/d8dSph48OTM3NpzgydNNdu3Ypvo+ymC3y0OJdVfI9pzAgMKmwh3oufe/Z3rGpubmFq/7w5oXbDpx4fXA86cGh29lbqd27d4eOIvX4FnPwN7Fl31NHn+wACEyk0x+PXfjxi33TBt/So3d0+psHex58tf+9WY2ToV3Obd26dSl8gX8t2uAXz7W+t104CFxG0vmFhV/+q/+3rw58CN/SEbbnsWMX9z7R/cq5K0v7ov53y5Yt119/fdQhLgVncVq0S88C/NvE9/ZGA4HN9LTz2w//fubPxy82adQ/NvPdQ70PHDk7PiNwMtyxY0f893ZZhBZnE83zfimJ7+2KAQIbKjk8OXvnoZ6XTl9u2KLihcffHrllf/fL7yZqXHFc0ZsrVqywN1cxQ2ixWYQWZ9HSLI2Xyvelg7L/C4H1tbPq8+0HT7419F79l+vtPX9l5gd/PX3f4XfHpufqvR7LPrvD68Ybb4zzctSistgC3kmXwfcWfYXAOgKWqs92eVnnteV2Hege/dK+7hfOjC3XMOTrdobZuXNnbIUZi8eiCnj2a8X3zHZCYLV0rVefhydmf/TCmXtfOnNxcra695ieW6ljz549MXxOaDFYJGFLL637ns1bCPyIbm2sPh86NXbLvu6ney59ZIDInli5/6abbgpb9I8hhjb6ntZhzz8wkEoLqz7/6pVzzcueqTq0xqOTcz95se+pnaO//ty2zWsildo+8rbzz8jISF9f38xMlgvvtLKU29vQds9n2JvO8vC9nGCSjUinRZLQ29jGqs/3/qMvYdkz7bgvnr68d+Cdn392yx17wt/f2Cj40r2jAwMDg4ODBfxEptVa7AtH9o2HsLdc5+p7I6mr9kPgVVZ9vvv506nKnlUiLvv08tT8/YfPPtVz6aHPb9vy8UjXGjIYtm3bdsMNNwwNDRmHs7O5vIm1t3zGnn3dNvj7zwJ8X3ZiWINOJ9Cqz99/vjdb2TOJvpVtjvRd2buv+2ef6fr2J6+r3B/VtoFhFRHjcHR0dHh4eGysbUVde79nSy3Zx30BP2woS12k7+VB6250NIFWfb7HPjeYKu7ju4mZ+V8c6bfyzENf2LZj7cfqWhLDToPkusWHvTM0FC8vPjKcFY1nW2PXHgZe8Husy8IW73t56NqNziXQqs/3vfxu5c3WterktOff/eO37u/+6ae77rrpuoAffyXJzrCxK0Z7WOPJycmJiQn7O7X4MCDn5ubsTaM9jFh72HWsIWe/LmYP+3UH+4mVCH/jIaDvdQXvUAKt+vxwvZut62qUx87J2YXfvHLOToaPfHHr7k9o/NiY4RQhUancCe57bbQd93lgYfe812pdu+fN8xO3PXHy9/8dmpuv/epFbXP2ZFcgKt8r0+gsAou8571S5Sbbdhn8yH/O3/70yf+NpLgHtUmHvFSrQIS+l4PsIAKt+vytZ5N+16EsUDEbx4cmv3bg5KNvnJ/lZNhuxWP23XLtFAJL97wfG4z3PGNftf/d60NfefKE3EpQ7Uamnf3F73tHEBjknvds8+jExanSSlBBirTZYo72KAnf/RMY6p73zPOytBLUrQe6hVaCypxsfgeq+O6cwID3vLc4t+RWgmox3/YeLuS7WwKjrT4nn2qllaC+/MQJlZWgkqeWX0s5330SGHP1Oe3kOzs2LbQSVNrs2tte0XeHBEZefc4251RWgsqWXVuOEvXdG4HxV58zzzaVlaAyJ9jKgbq+uyJQovrcyjyzYyVWgmoxx7SHS/vuh0CV6nPa6VXbXmUlqNrI89ij7rsTAoWqz+2ahRIrQbUr2Ub9OPBdnkC56nOjyZRhf2klqHv+dnpwIpcVJTKEVNghbnzXJlCx+tz2Ofr+SlD739nXPdL2nqPt0JPvwgSKVp/zmNallaBswZtz44UuN5hHLsv26cx3VQJ1q8/LzrDMDUorQf3l7Wa/9JS580gO9Oe7JIHS1edcp3JpJahvP9tz5vJ0rgMF6dyl73oEqlefC5i7pZWg/vTW8MKCn8UvvPouRqCD6nMBBNoQpZWgvvFMT8+lyWJGzHUUx77LEOim+pzrTK3q3MFKUO591yDQU/W5CpK8n0qvBNUJvgsQ6Kz6nDdydftXXAmqQ3yPnUB/1ee6hBSws7wS1FvD8S5XVdahc3yPmkCX1efyJAuyYStBff3Jkw8fHYh5JaiO8j1eAr1Wn4OAVzlo5CtBdZrvkRLouPpcCUPAbVsJ6s6nex58td+qHQHDqBq6A32PjkD31eeqORfwqS3P/dixi7YS1KsDVwKGURq6Y32Pi8BOqD4Hn+tVAdhKUN95pveBI2fHZ4KdDDvZ94gI7JDqcxUAkTy1laD27u8+fPZy8fF0uO+xENg51efip3jCEQeuzNz93On7Dr87Nl3cjwrjexQEdlT1OSEPoZoVuRIUvpvL4QnstOpzKLSSj1vMSlD4XnIkMIEdWH1OTkLYlrmuBIXvZXODEdix1eey9PFv5LESFL5X+R6GwE6uPlcZEP/TxZWgutuyEhS+19odgMAOrz7XehD/nstTc/cfPntXaytB4Xtdo4smkOpzXRskdv6z78refd3ZVoLC90YWF0og1edGNqjsz7YSFL438bc4Aqk+N7FB66VUK0Hhe3NzCyKQ6nNzG+ReTbgSFL4v62zuBFJ9XtYD3QZNVoLC94S25ksg1eeENug2W1oJ6tQ7Ix8ui4jvyQ3NkUCqz8ltUG95fOi9rx448egb52fnF/A9lZsrU7VO1fj2gyf7x/z/kEgqTRw3Lq0E9Vzv2MTsPL4nNzpHArEhuQ1uWtpKUG5yKSaRHK9Ci0mAUVBAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVgEB5C0lAWgEIlLaP4OUVWJlfBo9/aiq/zukZBXwowDnQh49koaoABKo6R9w+FIBAHz6ShaoCEKjqHHH7UAACffhIFqoKQKCqc8TtQwEI9OEjWagqAIGqzhG3DwUg0IePZKGqAASqOkfcPhSAQB8+koWqAhCo6hxx+1AAAn34SBaqCkCgqnPE7UMBCPThI1moKgCBqs4Rtw8FINCHj2ShqgAEqjpH3D4UgEAfPpKFqgIQqOoccftQAAJ9+EgWqgpAoKpzxO1DAQj04SNZqCoAgarOEbcPBSDQh49koaoABKo6R9w+FIBAHz6ShaoCEKjqHHH7UAACffhIFqoKQKCqc8TtQwEI9OEjWagqAIGqzhG3DwUg0IePZKGqAASqOkfcPhSAQB8+koWqAhCo6hxx+1AAAn34SBaqCkCgqnPE7UMBCPThI1moKgCBqs4Rtw8FINCHj2ShqgAEqjpH3D4UgEAfPpKFqgIQqOoccftQAAJ9+EgWqgpAoKpzxO1DAQj04SNZqCoAgarOEbcPBSDQh49koaoABKo6R9w+FIBAHz6ShaoCEKjqHHH7UAACffhIFqoKQKCqc8TtQwEI9OEjWagqAIGqzhG3DwUg0IePZKGqAASqOkfcPhT4P492DCBEDh33AAAAAElFTkSuQmCC";
    UI_Resources.html_insertVideo = "<div class=\"dialog-body\">\r\n\r\n\t<div class=\"ui-tabs\">\r\n\r\n\t\t<div class=\"ui-tabs-header\">\r\n\t\t\t<div class=\"ui-tab\" data-sheet-id=\"player\">Player</div>\r\n\t\t\t<div class=\"ui-tab\" data-sheet-id=\"sources\">Sources</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"ui-sheet player\">\r\n\t\t\t\r\n\t\t\t<fieldset>\r\n\t\t\t\t<legend>Player settings</legend>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"horizontal-flex one-kind\">\r\n\r\n\t\t\t\t\t<div class=\"cell\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input type=\"number\" min=\"10\" value=\"10\" />\r\n\t\t\t\t\t\t\t<span>Width:</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input type=\"number\" min=\"10\" value=\"10\" />\r\n\t\t\t\t\t\t\t<span>Height:</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input type=\"text\" />\r\n\t\t\t\t\t\t\t<span>Poster Image:</span>\r\n\t\t\t\t\t\t\t<button class=\"browse\" style=\"margin-right: -16px; width: 17px\">...</button>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<label class=\"checkbox\">\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" />\r\n\t\t\t\t\t\t\t<span>Auto Start</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<label class=\"checkbox\">\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" />\r\n\t\t\t\t\t\t\t<span>Show Controlbar</span>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</fieldset>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"ui-sheet sources\">\r\n\t\t\tSources content\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t<!--\r\n\t<fieldset>\r\n\r\n\t\t<legend>Source</legend>\r\n\r\n\t\t<label class=\"two-lines\">Specify a picture source, or browse for a picture:</label>\r\n\r\n\t\t<div class=\"horizontal-flex one-kid\">\r\n\t\t\t<div class=\"cell\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<span>Source:</span> \r\n\t\t\t\t\t<input type=\"text\" class=\"txt-src focus-first\" />\r\n\t\t\t\t\t<button class=\"browse\">...</button>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</fieldset>\r\n\t<fieldset>\r\n\t\t\r\n\t\t<legend>Settings</legend>\r\n\r\n\r\n\t\t<div class=\"horizontal-flex two-kids\">\r\n\r\n\t\t\t<div class=\"cell\">\r\n\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<span>Width:</span>\r\n\t\t\t\t\t<input type=\"number\" class=\"int-width\" disabled style=\"max-width: 50px\" />\r\n\t\t\t\t</label>\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<span>Height:</span>\r\n\t\t\t\t\t<input type=\"number\" class=\"int-height\" disabled style=\"max-width: 50px\" />\r\n\t\t\t\t</label>\r\n\t\t\t\t<label class=\"checkbox\">\r\n\t\t\t\t\t<span>Maintain propoportions:</span>\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"bool-proportions\" disabled />\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"cell\" style=\"text-align: right\">\r\n\t\t\t\r\n\t\t\t\t<img class=\"img-preview\" style=\"display: inline-block; margin: 10px 0px 10px 10px; max-width: 150px; max-height: 150px\" src=\"{img_insertPicture}\" />\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"horizontal-flex one-kid\">\r\n\r\n\t\t\t<div class=\"cell\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<span>Alternate text:</span>\r\n\t\t\t\t\t<input type=\"text\" class=\"txt-alt\" />\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\r\n\t</fieldset>\r\n\r\n\t-->\r\n\r\n</div>";
    UI_Resources.html_multimediaToolbar = "<div class=\"item index-1\">\r\n\t<div class=\"ui-button link\" title=\"Link\"></div><div\r\n\tclass=\"ui-button picture\" title=\"Picture\"></div><div\r\n\tclass=\"ui-button video\" title=\"Video\"></div>\r\n</div>";
    UI_Resources.html_tableToolbar = "<div class=\"item index-1\">\r\n\t<div class=\"ui-button table\" title=\"Insert Table\"></div><div \r\n\t\tclass=\"ui-button ui-color-button borderColor\" title=\"Border Color\"></div><div \r\n\t\tclass=\"ui-button ui-color-button backgroundColor\" title=\"Background Color\"></div>\r\n</div>\r\n<div class=\"item index-2\">\r\n\t<div\r\n\t\t class=\"ui-button table-merge-cells\" title=\"Merge Cells\"></div><div\r\n\t\t class=\"ui-button table-split-cells\" title=\"Split Cell\"></div>\r\n</div>\r\n<div class=\"item index-3\">\r\n\t<div class=\"ui-button table-insert-r-before\" title=\"Insert Row Before\"></div><div\r\n\t\t class=\"ui-button table-insert-r-after\" title=\"Insert Row After\"></div><div\r\n\t\t class=\"ui-button table-delete-r\" title=\"Delete Row\"></div><div \r\n\t\t class=\"ui-button table-insert-c-before\" title=\"Insert Column Before\"></div><div \r\n\t\t class=\"ui-button table-insert-c-after\" title=\"Insert Column After\"></div><div \r\n\t\t class=\"ui-button table-delete-c\" title=\"Delete Column\"></div>\r\n</div>";
    UI_Resources.html_undoManagerToolbar = "<div class=\"item index-1\">\r\n\t<div class=\"ui-button undo state-disabled\" title=\"Undo (Ctrl + Z)\"></div><div \r\n\t\tclass=\"ui-button redo state-disabled\" title=\"Redo (Ctrl + Y)\"></div>\r\n</div>";
    return UI_Resources;
})();
UI_Resources._init_();
var UI_Toolbar = (function (_super) {
    __extends(UI_Toolbar, _super);
    function UI_Toolbar(DOMNodeContainer, router, state) {
        _super.call(this);
        this.panels = [];
        this.panelRows = [[], []];
        this.router = null;
        this.state = null;
        this.node = DOMNodeContainer;
        this.router = router;
        this.state = state;
        this.node.innerHTML = '<div class="toolbar-row index-1"></div><div class="toolbar-row index-2"></div>';
        this.rows = [
            this.node.querySelector('.toolbar-row.index-1'),
            this.node.querySelector('.toolbar-row.index-2')
        ];
        this.panels.push(new UI_Toolbar_Panel_UndoManager(this, this.rows[0], 50, 0));
        this.panels.push(new UI_Toolbar_Panel_Clipboard(this, this.rows[0], 70, 0));
        this.panels.push(new UI_Toolbar_Panel_Multimedia(this, this.rows[0], 70, 0));
        this.panels.push(new UI_Toolbar_Panel_Table(this, this.rows[0], 310, 0));
        this.panels.push(new UI_Toolbar_Panel_Formatting(this, this.rows[1], 1, 1));
        for (var i = 0, len = this.rows.length; i < len; i++) {
            (function (row, toolbar) {
                row.addEventListener('click', function (evt) {
                    if (evt.srcElement != row && evt.target != row) {
                        return;
                    }
                    toolbar.closeExpandedSheets();
                }, true);
            })(this.rows[i], this);
        }
    }
    UI_Toolbar.prototype.closeExpandedSheets = function () {
        for (var i = 0, len = this.panels.length; i < len; i++) {
            DOM.removeClass(this.panels[i].showMore, 'opened');
        }
    };
    // forward the document state changes to the panels.
    UI_Toolbar.prototype.updateDocumentState = function (propertiesList) {
        for (var i = 0, len = this.panels.length; i < len; i++) {
            this.panels[i].updateDocumentState(propertiesList);
        }
    };
    UI_Toolbar.prototype.resize = function (width) {
        width = ~~width;
        var panel = 0, panels = 0, row = 0, rows = 0, percentualDefined = 0, fixedWidths, fixedWidthsSum = 0, remainingFixedWidth = 0;
        for (row = 0, rows = this.panelRows.length; row < rows; row++) {
            fixedWidthsSum = 0;
            // compute the percentualWidth of the panels with fixed width;
            percentualDefined = 0;
            fixedWidths = [];
            for (panel = 0, panels = this.panelRows[row].length; panel < panels; panel++) {
                if (this.panelRows[row][panel].fixedWidth === null) {
                    percentualDefined += this.panelRows[row][panel].percentualWidth;
                }
                else {
                    fixedWidths.push(this.panelRows[row][panel]);
                    fixedWidthsSum += this.panelRows[row][panel].fixedWidth;
                }
            }
            remainingFixedWidth = (1 - percentualDefined) * width;
            for (panel = 0, panels = this.panelRows[row].length; panel < panels; panel++) {
                if (this.panelRows[row][panel].fixedWidth === null) {
                    this.panelRows[row][panel].resizeByParentWidth(width - fixedWidthsSum);
                }
                else {
                    this.panelRows[row][panel].resizeByParentWidth(remainingFixedWidth);
                    remainingFixedWidth -= this.panelRows[row][panel].fixedWidth;
                }
            }
        }
    };
    return UI_Toolbar;
})(Events);
var UI_Toolbar_Panel = (function (_super) {
    __extends(UI_Toolbar_Panel, _super);
    function UI_Toolbar_Panel(toolbar, name, appendIn, maxPercentualOrFixedWidth, panelRowIndex) {
        _super.call(this);
        this.toolbar = toolbar;
        this.name = name;
        this.node = document.createElement('div');
        this.percentualWidth = 0; // the percentualWidth of the toolbar. value is a float between 0 and 1.
        this.fixedWidth = null; // the fixed width of the toolbar. value should be greater than 1.
        this.items = null;
        this.itemWidths = null;
        this.showMore = null;
        this.showMorePanel = null;
        DOM.addClass(this.node, 'ui-panel');
        appendIn.appendChild(this.node);
        this.node.title = name || 'Toolbar';
        if (maxPercentualOrFixedWidth <= 1 && maxPercentualOrFixedWidth >= 0) {
            this.percentualWidth = maxPercentualOrFixedWidth;
        }
        else {
            this.fixedWidth = maxPercentualOrFixedWidth;
            this.percentualWidth = 1;
        }
        this.toolbar.panelRows[panelRowIndex].push(this);
    }
    // abstract method, which is triggered when the document state changes.
    UI_Toolbar_Panel.prototype.updateDocumentState = function (propertiesList) {
    };
    UI_Toolbar_Panel.prototype.resizeByParentWidth = function (width) {
        DOM.removeClass(this.showMore, 'opened');
        var i = 0, j = 0, len = 0;
        if (this.items === null && this.node.offsetWidth) {
            this.items = (Array.prototype.slice.call(this.node.querySelectorAll('div.item'), 0));
            this.itemWidths = [];
            for (i = 0, len = this.items.length; i < len; i++) {
                this.itemWidths.push(this.items[i].offsetWidth);
            }
        }
        if (this.items === null) {
            // postponed initialization
            (function (me) {
                setTimeout(function () {
                    me.resizeByParentWidth(width);
                }, 10);
            })(this);
            return;
        }
        var maxPanelWidth = Math.round(width * this.percentualWidth), itemsSumWidths = 0;
        for (i = 0, len = this.itemWidths.length; i < len; i++) {
            itemsSumWidths += this.itemWidths[i];
        }
        if (itemsSumWidths < maxPanelWidth) {
            DOM.removeClass(this.node, 'resized-panel');
            for (i = 0, len = this.items.length; i < len; i++) {
                this.node.insertBefore(this.items[i], this.showMore);
            }
        }
        else {
            DOM.addClass(this.node, 'resized-panel');
            // some panel items will be appended in the showMore part of the toolbar,
            // and some panel items will be appended in the toolbar root.
            var left = maxPanelWidth - 10;
            for (i = 0, len = this.items.length; i < len; i++) {
                if (left - this.itemWidths[i] >= 0) {
                    this.node.insertBefore(this.items[i], this.showMore);
                    left -= this.itemWidths[i];
                }
                else {
                    this.showMorePanel.appendChild(this.items[i]);
                }
            }
        }
    };
    /* After all the content is initialized in the panel DOM node, this function should be
       called, in order to initialize the resizer mechanism.
     */
    UI_Toolbar_Panel.prototype.on_afterload = function () {
        this.showMore = document.createElement('div');
        DOM.addClass(this.showMore, 'more');
        this.node.appendChild(this.showMore);
        this.showMorePanel = document.createElement('div');
        this.showMorePanel.tabIndex = 1;
        DOM.addClass(this.showMorePanel, 'panel');
        this.showMore.appendChild(this.showMorePanel);
        (function (me) {
            me.showMore.addEventListener('click', function (evt) {
                if (evt.srcElement != me.showMore && evt.target != me.showMore) {
                    return;
                }
                if (DOM.hasClass(me.showMore, 'opened')) {
                    DOM.removeClass(me.showMore, 'opened');
                }
                else {
                    DOM.removeClass(me.showMorePanel, 'right-aligned');
                    DOM.addClass(me.showMore, 'opened');
                    var rect = me.showMorePanel.getBoundingClientRect();
                    if (rect.left < 0) {
                        DOM.addClass(me.showMorePanel, 'right-aligned');
                    }
                    me.showMorePanel.focus();
                }
            }, true);
            me.showMorePanel.addEventListener('keyup', function (evt) {
                if (evt.keyCode == 27) {
                    DOM.removeClass(me.showMore, 'opened');
                    evt.preventDefault();
                    evt.stopPropagation();
                }
            }, true);
            me.showMorePanel.addEventListener('blur', function (evt) {
                setTimeout(function () {
                    if (!me.showMorePanel.contains(document.activeElement)) {
                        DOM.removeClass(me.showMore, 'opened');
                    }
                }, 2);
            }, true);
        })(this);
    };
    /* Transforms an item of the toolbar into an input[type=color] dropdown */
    UI_Toolbar_Panel.prototype.makeColorDropdown = function (element, onchange, initialColor) {
        element.tabIndex = 0;
        var icon = document.createElement('div');
        DOM.addClass(icon, 'icon');
        var expander = document.createElement('div');
        DOM.addClass(expander, 'expander');
        var lastColor = document.createElement('div');
        DOM.addClass(lastColor, 'color');
        var overlay = document.createElement('div');
        DOM.addClass(overlay, 'overlay');
        var hdr, c;
        c = document.createElement('div');
        DOM.addClass(c, 'c');
        DOM.addClass(c, 'none');
        c.setAttribute('data-color', '');
        c.title = 'Default Color';
        overlay.appendChild(c);
        for (var k in TStyle_Color.$NamedColors) {
            c = document.createElement('div');
            DOM.addClass(c, 'c');
            c.setAttribute('data-color', TStyle_Color.$NamedColors[k]);
            c.style.backgroundColor = k;
            overlay.appendChild(c);
        }
        expander.tabIndex = 0;
        element.appendChild(icon);
        element.appendChild(lastColor);
        element.appendChild(expander);
        element.appendChild(overlay);
        lastColor.style.backgroundColor = initialColor;
        lastColor.setAttribute('data-color', initialColor);
        if (!initialColor) {
            DOM.addClass(lastColor, 'none');
        }
        function setColor(c) {
            lastColor.style.backgroundColor = c || '';
            lastColor.setAttribute('data-color', c || '');
            if (!c) {
                DOM.addClass(lastColor, 'none');
            }
            else {
                DOM.removeClass(lastColor, 'none');
            }
            onchange(c || '');
        }
        element.addEventListener('mousedown', function (e) {
            if (DOM.hasClass(element, 'state-disabled')) {
                return;
            }
            var target = (e.target || e.toElement);
            if (target && DOM.hasClass(target, 'color')) {
                // clicked on the last color
                e.stopPropagation();
                e.preventDefault();
                setColor(lastColor.getAttribute('data-color'));
                return;
            }
            if (target && DOM.hasClass(target, 'c')) {
                e.stopPropagation();
                e.preventDefault();
                setColor(target.getAttribute('data-color'));
                overlay.style.display = 'none';
                return;
            }
            overlay.style.display = 'block';
        }, true);
        element.addEventListener('blur', function () {
            overlay.style.display = 'none';
        }, true);
        expander.addEventListener('click', function () {
            if (DOM.hasClass(element, 'state-disabled')) {
                return;
            }
            setTimeout(function () {
                overlay.style.display = 'block';
            }, 10);
        }, true);
    };
    /* Transforms an input[type=text] item of the toolbar into a writable select */
    UI_Toolbar_Panel.prototype.dropdownize = function (input, submit, allowSuggestionsOnly) {
        /* indeed.com corby nn18 nn95nb */
        if (allowSuggestionsOnly === void 0) { allowSuggestionsOnly = false; }
        // make the parent of the input focusable
        input.parentNode['tabIndex'] = 0;
        var suggestions = (input.getAttribute('data-suggestions') || '').split(','), len = suggestions.length, i = 0, items = [], value, sp, overlay, option, valueOnFocus = '', expander = input.parentNode.querySelector('div.expander');
        for (i = 0, len = suggestions.length; i < len; i++) {
            suggestions[i] = suggestions[i].replace(/(^[\s]+|[\s]+$)/g, '');
            if (suggestions[i]) {
                sp = suggestions[i].split(':');
                if (sp.length == 1) {
                    items.push({
                        "name": sp[0],
                        "value": sp[0]
                    });
                }
                else {
                    items.push({
                        "value": sp[0],
                        "name": sp.slice(1).join(':')
                    });
                }
            }
        }
        overlay = document.createElement('div');
        DOM.addClass(overlay, 'overlay');
        // create an overlay object, and append it after the input
        if (items.length) {
            for (i = 0, len = items.length; i < len; i++) {
                option = document.createElement('div');
                DOM.addClass(option, 'option');
                option.appendChild(document.createTextNode(items[i].name));
                option.setAttribute('data-value', items[i].value);
                overlay.appendChild(option);
            }
            input.parentNode.appendChild(overlay);
        }
        // webkit minor bugfix
        overlay.addEventListener('mousewheel', function (DOMEvent) {
            overlay.scrollTop -= DOMEvent.wheelDelta > 0 ? 10 : -10;
            DOMEvent.preventDefault();
            DOMEvent.stopPropagation();
        }, true);
        overlay.addEventListener('click', function (DOMEvent) {
            var target = DOMEvent.target || DOMEvent.srcElement, which = DOMEvent.which;
            if (which != 1) {
                return;
            }
            if (!DOM.hasClass(target, 'option')) {
                return;
            }
            input.value = target.textContent;
            // focus the parentNode of the input, in order to avoid focusing something
            // else outside our marvelous editor.
            input.parentNode['focus']();
            submit(target.getAttribute('data-value'));
        }, true);
        overlay.addEventListener('mousedown', function (DOMEvent) {
            DOMEvent.preventDefault();
            DOMEvent.stopPropagation();
        }, true);
        if (expander) {
            expander.addEventListener('click', function () {
                input.focus();
            }, true);
        }
        input.addEventListener('focus', function () {
            valueOnFocus = input.value;
            input.select();
            DOM.addClass(input.parentNode, 'focused');
            for (var i = 0, items = Array.prototype.slice.call(overlay.childNodes, 0) || [], len = items.length; i < len; i++) {
                DOM.removeClass(items[i], 'hidden');
                /* "select" the option if the option textContents equals with the input value */
                if (items[i].textContent == input.value) {
                    try {
                        items[i].scrollIntoViewIfNeeded();
                    }
                    catch (e) {
                    }
                    DOM.addClass(items[i], 'on');
                }
                else {
                    DOM.removeClass(items[i], 'on');
                }
            }
        }, true);
        input.addEventListener('blur', function () {
            DOM.removeClass(input.parentNode, 'focused');
        }, true);
        var preventFiltering = false, onTextInput = new Throttler(function () {
            if (preventFiltering) {
                preventFiltering = false;
                return;
            }
            var value = input.value.toLowerCase(), i = 0, len = items.length, nodes = Array.prototype.slice.call(overlay.childNodes, 0);
            for (i = 0; i < len; i++) {
                DOM.removeClass(nodes[i], 'on');
                if (value == '' || items[i].name.toLowerCase().indexOf(value) >= 0) {
                    DOM.removeClass(nodes[i], 'hidden');
                }
                else {
                    DOM.addClass(nodes[i], 'hidden');
                }
            }
        }, 10);
        function onUpArrow() {
            var opts = [], i = 0, len = 0, childNodes = Array.prototype.slice.call(overlay.childNodes, 0), onIndex = -1, onOption;
            for (i = 0, len = childNodes.length; i < len; i++) {
                if (!DOM.hasClass(childNodes[i], 'hidden')) {
                    opts.push(childNodes[i]);
                    if (DOM.hasClass(childNodes[i], 'on')) {
                        onIndex = opts.length - 1;
                    }
                }
            }
            if (opts.length) {
                if (onIndex == -1 || onIndex == 0) {
                    if (onIndex == 0)
                        DOM.removeClass(opts[0], 'on');
                    DOM.addClass(onOption = opts[opts.length - 1], 'on');
                }
                else {
                    DOM.removeClass(opts[onIndex], 'on');
                    DOM.addClass(onOption = opts[onIndex - 1], 'on');
                }
                onOption['scrollIntoViewIfNeeded']();
                // set the value of the control to onOption.textContents
                input.value = onOption.textContent;
                input.select();
                preventFiltering = true;
            }
        }
        function onDownArrow() {
            var opts = [], i = 0, len = 0, childNodes = Array.prototype.slice.call(overlay.childNodes, 0), onIndex = -1, onOption;
            for (i = 0, len = childNodes.length; i < len; i++) {
                if (!DOM.hasClass(childNodes[i], 'hidden')) {
                    opts.push(childNodes[i]);
                    if (DOM.hasClass(childNodes[i], 'on')) {
                        onIndex = opts.length - 1;
                    }
                }
            }
            if (opts.length) {
                if (onIndex == -1 || onIndex == opts.length - 1) {
                    if (onIndex == opts.length - 1)
                        DOM.removeClass(opts[opts.length - 1], 'on');
                    DOM.addClass(onOption = opts[0], 'on');
                }
                else {
                    DOM.removeClass(opts[onIndex], 'on');
                    DOM.addClass(onOption = opts[onIndex + 1], 'on');
                }
                onOption['scrollIntoViewIfNeeded']();
                // set the value of the control to onOption.textContents
                input.value = onOption.textContent;
                input.select();
                preventFiltering = true;
            }
        }
        function onEnterKey() {
            preventFiltering = true;
            var v = input.value, i = 0, len = 0, valid = false, val = input.value;
            if (!v) {
                return;
            }
            if (allowSuggestionsOnly) {
                for (i = 0, len = items.length; i < len; i++) {
                    if (items[i].name == v) {
                        valid = true;
                        val = items[i].value;
                        break;
                    }
                }
            }
            else {
                valid = true;
            }
            if (!valid) {
                return;
            }
            input.parentNode['focus']();
            submit(val);
        }
        function changed(event) {
            var keyCode = event.keyCode;
            switch (keyCode) {
                case 38:
                    onUpArrow();
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                case 40:
                    onDownArrow();
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                case 13:
                    onEnterKey();
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                case 27:
                    input.parentNode['focus']();
                    input.value = valueOnFocus;
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                default:
                    onTextInput.run();
                    break;
            }
            onTextInput.run();
        }
        input.addEventListener('keydown', changed, true);
    };
    UI_Toolbar_Panel.prototype.focus = function (element) {
        var saveLeft = document.body.scrollLeft, saveTop = document.body.scrollTop;
        element.focus();
        document.body.scrollLeft = saveLeft;
        document.body.scrollTop = saveTop;
    };
    UI_Toolbar_Panel.prototype.focusCanvas = function () {
        this.focus(this.toolbar.router.viewport.canvas);
    };
    return UI_Toolbar_Panel;
})(Events);
var UI_Toolbar_Panel_UndoManager = (function (_super) {
    __extends(UI_Toolbar_Panel_UndoManager, _super);
    function UI_Toolbar_Panel_UndoManager(toolbar, appendIn, maxPercentualOrFixedWidth, panelRowIndex) {
        _super.call(this, toolbar, 'Undo Manager', appendIn, maxPercentualOrFixedWidth, panelRowIndex);
        this.buttonUndo = null;
        this.buttonRedo = null;
        DOM.addClass(this.node, 'ui-panel-undomanager');
        this.node.innerHTML = UI_Resources.html_undoManagerToolbar;
        this.buttonUndo = this.node.querySelector('.ui-button.undo');
        this.buttonRedo = this.node.querySelector('.ui-button.redo');
        (function (me) {
            me.buttonUndo.addEventListener('click', function () {
                if (DOM.hasClass(me.buttonUndo, 'state-disabled'))
                    return;
                me.undo();
                me.focusCanvas();
            }, false);
            me.buttonRedo.addEventListener('click', function () {
                if (DOM.hasClass(me.buttonRedo, 'state-disabled'))
                    return;
                me.redo();
                me.focusCanvas();
            }, false);
            me.toolbar.router.viewport.undo.on('changed', function () {
                me.updateUndoState();
            });
        })(this);
        this.on_afterload();
    }
    UI_Toolbar_Panel_UndoManager.prototype.undo = function () {
        this.toolbar.router.viewport.undo.undo();
    };
    UI_Toolbar_Panel_UndoManager.prototype.redo = function () {
        this.toolbar.router.viewport.undo.redo();
    };
    UI_Toolbar_Panel_UndoManager.prototype.updateUndoState = function () {
        var undo = this.toolbar.router.viewport.undo;
        if (undo.canUndo()) {
            DOM.removeClass(this.buttonUndo, 'state-disabled');
        }
        else {
            DOM.addClass(this.buttonUndo, 'state-disabled');
        }
        if (undo.canRedo()) {
            DOM.removeClass(this.buttonRedo, 'state-disabled');
        }
        else {
            DOM.addClass(this.buttonRedo, 'state-disabled');
        }
    };
    return UI_Toolbar_Panel_UndoManager;
})(UI_Toolbar_Panel);
var UI_Toolbar_Panel_Clipboard = (function (_super) {
    __extends(UI_Toolbar_Panel_Clipboard, _super);
    function UI_Toolbar_Panel_Clipboard(toolbar, appendIn, maxPercentualOrFixedWidth, panelRowIndex) {
        _super.call(this, toolbar, 'Clipboard', appendIn, maxPercentualOrFixedWidth, panelRowIndex);
        this.buttonCut = null;
        this.buttonCopy = null;
        this.buttonPaste = null;
        DOM.addClass(this.node, 'ui-panel-clipboard');
        this.node.innerHTML = UI_Resources.html_clipboardToolbar;
        this.buttonCut = this.node.querySelector('.ui-button.cut');
        this.buttonCopy = this.node.querySelector('.ui-button.copy');
        this.buttonPaste = this.node.querySelector('.ui-button.paste');
        (function (me) {
            me.buttonCut.addEventListener('click', function () {
                if (DOM.hasClass(me.buttonCut, 'state-disabled'))
                    return;
                me.cut();
                me.focusCanvas();
            }, false);
            me.buttonCopy.addEventListener('click', function () {
                if (DOM.hasClass(me.buttonCopy, 'state-disabled'))
                    return;
                me.copy();
                me.focusCanvas();
            }, false);
            me.buttonPaste.addEventListener('click', function () {
                if (DOM.hasClass(me.buttonPaste, 'state-disabled'))
                    return;
                me.paste();
                me.focusCanvas();
            }, false);
        })(this);
        this.on_afterload();
        (function (me) {
            me.toolbar.router.viewport.selection.on('changed', function () {
                me.updateState();
            });
        })(this);
    }
    UI_Toolbar_Panel_Clipboard.prototype.cut = function () {
        this.toolbar.router.dispatchCommand(11 /* CUT */, []);
        this.focus(this.toolbar.router.viewport.canvas);
    };
    UI_Toolbar_Panel_Clipboard.prototype.copy = function () {
        this.toolbar.router.dispatchCommand(10 /* COPY */, []);
        this.focus(this.toolbar.router.viewport.canvas);
    };
    UI_Toolbar_Panel_Clipboard.prototype.paste = function () {
        this.toolbar.router.dispatchCommand(12 /* PASTE */, []);
        this.focus(this.toolbar.router.viewport.canvas);
    };
    UI_Toolbar_Panel_Clipboard.prototype.updateState = function () {
        var selection = this.toolbar.router.viewport.selection, rng = selection.getRange(), len = rng.length();
        switch (len) {
            case null:
                if (rng.isMultiRange()) {
                    DOM.removeClass(this.buttonCopy, 'state-disabled');
                    DOM.addClass(this.buttonCut, 'state-disabled');
                    DOM.removeClass(this.buttonPaste, 'state-disabled');
                }
                else {
                    DOM.removeClass(this.buttonCopy, 'state-disabled');
                    DOM.removeClass(this.buttonCut, 'state-disabled');
                    if (rng.isOrphan()) {
                        DOM.removeClass(this.buttonPaste, 'state-disabled');
                    }
                    else {
                        DOM.addClass(this.buttonPaste, 'state-disabled');
                    }
                }
                break;
            case 0:
                DOM.addClass(this.buttonCopy, 'state-disabled');
                DOM.addClass(this.buttonCut, 'state-disabled');
                DOM.removeClass(this.buttonPaste, 'state-disabled');
                break;
            default:
                DOM.removeClass(this.buttonCopy, 'state-disabled');
                DOM.removeClass(this.buttonCut, 'state-disabled');
                DOM.removeClass(this.buttonPaste, 'state-disabled');
                break;
        }
    };
    return UI_Toolbar_Panel_Clipboard;
})(UI_Toolbar_Panel);
var UI_Toolbar_Panel_Formatting = (function (_super) {
    __extends(UI_Toolbar_Panel_Formatting, _super);
    function UI_Toolbar_Panel_Formatting(toolbar, appendIn, maxPercentualOrFixedWidth, panelRowIndex) {
        _super.call(this, toolbar, 'Formatting', appendIn, maxPercentualOrFixedWidth, panelRowIndex);
        this.blockLevel = null;
        this.fontFamily = null;
        this.fontSize = null;
        this.btnClearFormatting = null;
        this.btnBold = null;
        this.btnItalic = null;
        this.btnUnderline = null;
        this.btnStrike = null;
        this.btnSubscript = null;
        this.btnSuperscript = null;
        this.btnLeft = null;
        this.btnRight = null;
        this.btnCenter = null;
        this.btnJustified = null;
        this.btnUL = null;
        this.btnOL = null;
        this.btnIndent = null;
        this.btnUnindent = null;
        this.btnColor = null;
        DOM.addClass(this.node, 'ui-panel-style');
        this.node.innerHTML = UI_Resources.html_formattingToolbar;
        this.blockLevel = this.node.querySelector('input.nodeName');
        this.fontFamily = this.node.querySelector('input.fontFamily');
        this.fontFamily.setAttribute('data-suggestions', TStyle.$FontFamily.join(','));
        this.fontSize = this.node.querySelector('input.fontSize');
        this.btnClearFormatting = this.node.querySelector('div.ui-button.remove-formatting');
        this.btnBold = this.node.querySelector('.ui-button.bold');
        this.btnItalic = this.node.querySelector('.ui-button.italic');
        this.btnUnderline = this.node.querySelector('.ui-button.underline');
        this.btnStrike = this.node.querySelector('.ui-button.strike');
        this.btnSubscript = this.node.querySelector('.ui-button.subscript');
        this.btnSuperscript = this.node.querySelector('.ui-button.superscript');
        this.btnLeft = this.node.querySelector('.ui-button.left');
        this.btnRight = this.node.querySelector('.ui-button.right');
        this.btnCenter = this.node.querySelector('.ui-button.center');
        this.btnJustified = this.node.querySelector('.ui-button.justified');
        this.btnUL = this.node.querySelector('.ui-button.ul');
        this.btnOL = this.node.querySelector('.ui-button.ol');
        this.btnIndent = this.node.querySelector('.ui-button.increase');
        this.btnUnindent = this.node.querySelector('.ui-button.decrease');
        this.btnColor = this.node.querySelector('div.ui-button.color');
        (function (me) {
            me.btnClearFormatting.addEventListener('click', function (DOMEvent) {
                me.toolbar.router.dispatchCommand(9 /* CLEAR_FORMATTING */, []);
                me.focusCanvas();
            }, true);
            me.dropdownize(me.blockLevel, function (v) {
                me.setBlockLevel(v);
                me.focusCanvas();
            }, true);
            me.dropdownize(me.fontFamily, function (v) {
                me.setFontFamily(v);
                me.focusCanvas();
            }, false);
            me.dropdownize(me.fontSize, function (v) {
                me.setFontSize(v);
                me.focusCanvas();
            }, false);
            me.btnBold.addEventListener('click', function () {
                me.toolbar.router.dispatchCommand(4 /* BOLD */, []);
                me.focusCanvas();
            }, true);
            me.btnItalic.addEventListener('click', function () {
                me.toolbar.router.dispatchCommand(5 /* ITALIC */, []);
                me.focusCanvas();
            }, true);
            me.btnUnderline.addEventListener('click', function () {
                me.toolbar.router.dispatchCommand(6 /* UNDERLINE */, []);
                me.focusCanvas();
            }, true);
            me.btnStrike.addEventListener('click', function () {
                me.toolbar.router.dispatchCommand(7 /* STRIKE */, []);
                me.focusCanvas();
            }, true);
            me.btnSubscript.addEventListener('click', function (DOMEvent) {
                if (me.toolbar.state.state.verticalAlign == 'sub') {
                    me.toolbar.router.dispatchCommand(15 /* VALIGN */, ['normal']);
                }
                else {
                    me.toolbar.router.dispatchCommand(15 /* VALIGN */, ['sub']);
                }
                me.focusCanvas();
            }, true);
            me.btnSuperscript.addEventListener('click', function (DOMEvent) {
                if (me.toolbar.state.state.verticalAlign == 'super') {
                    me.toolbar.router.dispatchCommand(15 /* VALIGN */, ['normal']);
                }
                else {
                    me.toolbar.router.dispatchCommand(15 /* VALIGN */, ['sup']);
                }
                me.focusCanvas();
            }, true);
            me.btnLeft.addEventListener('click', function (DOMEvent) {
                me.toolbar.router.dispatchCommand(8 /* ALIGN */, ['left']);
                me.focusCanvas();
            }, true);
            me.btnRight.addEventListener('click', function (DOMEvent) {
                me.toolbar.router.dispatchCommand(8 /* ALIGN */, ['right']);
                me.focusCanvas();
            }, true);
            me.btnCenter.addEventListener('click', function (DOMEvent) {
                me.toolbar.router.dispatchCommand(8 /* ALIGN */, ['center']);
                me.focusCanvas();
            }, true);
            me.btnJustified.addEventListener('click', function (DOMEvent) {
                me.toolbar.router.dispatchCommand(8 /* ALIGN */, ['justified']);
                me.focusCanvas();
            }, true);
            me.btnUL.addEventListener('click', function (DOMEvent) {
                me.toolbar.router.dispatchCommand(21 /* LIST */, ['ul']);
                me.focusCanvas();
            }, true);
            me.btnOL.addEventListener('click', function (DOMEvent) {
                me.toolbar.router.dispatchCommand(21 /* LIST */, ['ol']);
                me.focusCanvas();
            }, true);
            me.btnIndent.addEventListener('click', function (DOMEvent) {
                me.toolbar.router.dispatchCommand(13 /* INDENT */, []);
                me.focusCanvas();
            }, true);
            me.btnUnindent.addEventListener('click', function (DOMEvent) {
                me.toolbar.router.dispatchCommand(14 /* UNINDENT */, []);
                me.focusCanvas();
            }, true);
            me.makeColorDropdown(me.btnColor, function (color) {
                me.setColor(color);
                me.focusCanvas();
            }, '');
        })(this);
        this.on_afterload();
    }
    UI_Toolbar_Panel_Formatting.prototype.setBlockLevel = function (nodeName) {
        this.toolbar.router.dispatchCommand(20 /* BLOCK_LEVEL */, [nodeName]);
    };
    UI_Toolbar_Panel_Formatting.prototype.setFontFamily = function (fontFamily) {
        this.toolbar.router.dispatchCommand(16 /* FONT */, [fontFamily]);
    };
    UI_Toolbar_Panel_Formatting.prototype.setFontSize = function (fontSize) {
        this.toolbar.router.dispatchCommand(19 /* SIZE */, [fontSize]);
    };
    UI_Toolbar_Panel_Formatting.prototype.updateBlockLevel = function () {
        var level = String(this.toolbar.state.state.blockLevel || ''), strs = {
            "normal": "Normal",
            "blockquote": "Quotation",
            "h1": "Heading 1",
            "h2": "Heading 2",
            "h3": "Heading 3",
            "h4": "Heading 4",
            "h5": "Heading 5",
            "h6": "Heading 6"
        };
        this.blockLevel.value = strs[level] || '';
    };
    UI_Toolbar_Panel_Formatting.prototype.updateFontFamily = function () {
        var family = String(this.toolbar.state.state.fontFamily || '');
        this.fontFamily.value = family;
    };
    UI_Toolbar_Panel_Formatting.prototype.updateFontSize = function () {
        var size = String(this.toolbar.state.state.fontSize || '');
        this.fontSize.value = size;
    };
    UI_Toolbar_Panel_Formatting.prototype.updateScriptState = function () {
        var state = this.toolbar.state.state.verticalAlign, btns = [this.btnSuperscript, this.btnSubscript], i;
        for (i = 0; i < 2; i++) {
            DOM.removeClass(btns[i], 'state-pressed');
        }
        switch (state) {
            case 'super':
                DOM.addClass(this.btnSuperscript, 'state-pressed');
                break;
            case 'sub':
                DOM.addClass(this.btnSubscript, 'state-pressed');
                break;
        }
    };
    UI_Toolbar_Panel_Formatting.prototype.updateBoldState = function () {
        var state = this.toolbar.state.state.bold;
        DOM.removeClass(this.btnBold, 'state-pressed');
        DOM.removeClass(this.btnBold, 'state-mixed');
        if (state) {
            DOM.addClass(this.btnBold, 'state-pressed');
        }
        else {
            if (state === null) {
                DOM.addClass(this.btnBold, 'state-mixed');
            }
        }
    };
    UI_Toolbar_Panel_Formatting.prototype.updateItalicState = function () {
        var state = this.toolbar.state.state.italic;
        DOM.removeClass(this.btnItalic, 'state-pressed');
        DOM.removeClass(this.btnItalic, 'state-mixed');
        if (state) {
            DOM.addClass(this.btnItalic, 'state-pressed');
        }
        else {
            if (state === null) {
                DOM.addClass(this.btnItalic, 'state-mixed');
            }
        }
    };
    UI_Toolbar_Panel_Formatting.prototype.updateStrikeState = function () {
        var state = this.toolbar.state.state.strike;
        DOM.removeClass(this.btnStrike, 'state-pressed');
        DOM.removeClass(this.btnStrike, 'state-mixed');
        if (state) {
            DOM.addClass(this.btnStrike, 'state-pressed');
        }
        else {
            if (state === null) {
                DOM.addClass(this.btnStrike, 'state-mixed');
            }
        }
    };
    UI_Toolbar_Panel_Formatting.prototype.updateUnderlineState = function () {
        var state = this.toolbar.state.state.underline;
        DOM.removeClass(this.btnUnderline, 'state-pressed');
        DOM.removeClass(this.btnUnderline, 'state-mixed');
        if (state) {
            DOM.addClass(this.btnUnderline, 'state-pressed');
        }
        else {
            if (state === null) {
                DOM.addClass(this.btnUnderline, 'state-mixed');
            }
        }
    };
    UI_Toolbar_Panel_Formatting.prototype.updateAlignmentState = function () {
        var state = this.toolbar.state.state.textAlign, btns = [
            this.btnLeft,
            this.btnRight,
            this.btnCenter,
            this.btnJustified
        ], i;
        for (i = 0; i < 4; i++) {
            DOM.removeClass(btns[i], 'state-pressed');
        }
        switch (state) {
            case 'left':
                DOM.addClass(this.btnLeft, 'state-pressed');
                break;
            case 'right':
                DOM.addClass(this.btnRight, 'state-pressed');
                break;
            case 'center':
                DOM.addClass(this.btnCenter, 'state-pressed');
                break;
            case 'justified':
                DOM.addClass(this.btnJustified, 'state-pressed');
                break;
        }
    };
    UI_Toolbar_Panel_Formatting.prototype.updateListState = function () {
        var state = this.toolbar.state.state.listType;
        DOM.removeClass(this.btnUL, 'state-pressed');
        DOM.removeClass(this.btnOL, 'state-pressed');
        switch (state) {
            case 'ul':
                DOM.addClass(this.btnUL, 'state-pressed');
                break;
            case 'ol':
                DOM.addClass(this.btnOL, 'state-pressed');
                break;
            default:
                break;
        }
    };
    UI_Toolbar_Panel_Formatting.prototype.setColor = function (color) {
        this.toolbar.router.dispatchCommand(17 /* COLOR */, [color]);
    };
    UI_Toolbar_Panel_Formatting.prototype.updateDocumentState = function (propertiesList) {
        for (var i = 0, len = propertiesList.length; i < len; i++) {
            switch (propertiesList[i]) {
                case 'blockLevel':
                    this.updateBlockLevel();
                    break;
                case 'fontFamily':
                    this.updateFontFamily();
                    break;
                case 'fontSize':
                    this.updateFontSize();
                    break;
                case 'verticalAlign':
                    this.updateScriptState();
                    break;
                case 'bold':
                    this.updateBoldState();
                    break;
                case 'italic':
                    this.updateItalicState();
                    break;
                case 'underline':
                    this.updateUnderlineState();
                    break;
                case 'strike':
                    this.updateStrikeState();
                    break;
                case 'textAlign':
                    this.updateAlignmentState();
                    break;
                case 'listType':
                    this.updateListState();
                    break;
            }
        }
    };
    return UI_Toolbar_Panel_Formatting;
})(UI_Toolbar_Panel);
var UI_Toolbar_Panel_Multimedia = (function (_super) {
    __extends(UI_Toolbar_Panel_Multimedia, _super);
    function UI_Toolbar_Panel_Multimedia(toolbar, appendIn, maxPercentualOrFixedWidth, panelRowIndex) {
        _super.call(this, toolbar, 'Multimedia', appendIn, maxPercentualOrFixedWidth, panelRowIndex);
        this.buttonLink = null;
        this.buttonPicture = null;
        this.buttonVideo = null;
        DOM.addClass(this.node, 'ui-panel-multimedia');
        this.node.innerHTML = UI_Resources.html_multimediaToolbar;
        this.buttonLink = this.node.querySelector('.ui-button.link');
        this.buttonPicture = this.node.querySelector('.ui-button.picture');
        this.buttonVideo = this.node.querySelector('.ui-button.video');
        (function (me) {
            me.buttonLink.addEventListener('click', function (e) {
                if (DOM.hasClass(me.buttonLink, 'state-disabled')) {
                    return;
                }
                me.insertLink();
            }, true);
            me.buttonPicture.addEventListener('click', function (e) {
                if (DOM.hasClass(me.buttonPicture, 'state-disabled')) {
                    return;
                }
                me.insertPicture();
            }, true);
            me.buttonVideo.addEventListener('click', function (e) {
                if (DOM.hasClass(me.buttonVideo, 'state-disabled')) {
                    return;
                }
                me.insertVideo();
            }, true);
        })(this);
        this.on_afterload();
    }
    UI_Toolbar_Panel_Multimedia.prototype.insertLink = function () {
        var selection = this.toolbar.router.viewport.selection, rng = selection.getRange(), dialog = null, fragment, elements, cursor, cursorBlock, aText = null, aTarget = null, aHref = null, i = 0, len;
        /* We dissalow the command if no rng.focusNode() is definde */
        if (rng.focusNode() === null) {
            UI_Dialog_Manager.alert('Please click or select a text first!', function () {
                selection.viewport.canvas.focus();
            }, selection.viewport.canvas);
            return;
        }
        if (!rng.length() && rng.focusNode()) {
            // If nothing is selected, but the caret is inside of an "A" element,
            // we select that element first!.
            cursor = rng.focusNode().target;
            cursorBlock = cursor.ownerBlockElement();
            while (cursor != cursorBlock) {
                if (cursor.is() == 'a') {
                    selection.selectByFragmentIndexes(cursor.FRAGMENT_START, cursor.FRAGMENT_END);
                    rng = selection.getRange();
                    break;
                }
                cursor = cursor.parentNode;
            }
        }
        if (rng.length()) {
            /* Find out if selection contains any links */
            fragment = rng.createContextualFragment();
            aText = fragment.toString('text/plain');
            elements = fragment.affectedInlineElements();
            for (i = 0, len = elements.length; i < len; i++) {
                if (elements[i].is() == 'a') {
                    aTarget = elements[i].target();
                    aHref = elements[i].href();
                    dialog = UI_Dialog_Manager.singleton('EditLink');
                    break;
                }
            }
            if (!dialog) {
                dialog = UI_Dialog_Manager.singleton('InsertLink');
            }
        }
        else {
            dialog = UI_Dialog_Manager.singleton('InsertLink');
        }
        if (dialog) {
            dialog.setup(this.toolbar.router.viewport, aText, aHref, aTarget).centerTo(selection.viewport.canvas).open();
        }
    };
    UI_Toolbar_Panel_Multimedia.prototype.insertPicture = function () {
        var selection = this.toolbar.router.viewport.selection, rng = selection.getRange(), picture = null;
        if (!rng.focusNode() && !rng.isOrphan()) {
            if (rng.anchorNode().target.is() != 'img') {
                UI_Dialog_Manager.alert('The editor is not in a state which allows inserting pictures. Try selecting a picture or some text first.', function () {
                    selection.viewport.canvas.focus();
                }, selection.viewport.canvas);
                return;
            }
            else {
                picture = rng.anchorNode().target;
            }
        }
        else {
            picture = null;
        }
        UI_Dialog_Manager.singleton('InsertPicture').setup(picture, this.toolbar.router.viewport.document).centerTo(selection.viewport.canvas).open();
    };
    UI_Toolbar_Panel_Multimedia.prototype.insertVideo = function () {
        var selection = this.toolbar.router.viewport.selection, rng = selection.getRange(), video = null;
        if (!rng.focusNode() && !rng.isOrphan()) {
            if (rng.anchorNode().target.is() != 'video') {
                UI_Dialog_Manager.alert('The editor is not in a state which allows inserting videos. Try selecting a video or some text first.', function () {
                    selection.viewport.canvas.focus();
                }, selection.viewport.canvas);
                return;
            }
            else {
                video = rng.anchorNode().target;
            }
        }
        else {
            video = null;
        }
        UI_Dialog_Manager.singleton('InsertVideo').setup(video, this.toolbar.router.viewport.document).centerTo(selection.viewport.canvas).open();
    };
    UI_Toolbar_Panel_Multimedia.prototype.updatePictureState = function () {
        if (this.toolbar.state.state.picture) {
            DOM.removeClass(this.buttonPicture, 'state-disabled');
        }
        else {
            DOM.addClass(this.buttonPicture, 'state-disabled');
        }
    };
    UI_Toolbar_Panel_Multimedia.prototype.updateVideoState = function () {
        if (this.toolbar.state.state.video) {
            DOM.removeClass(this.buttonVideo, 'state-disabled');
        }
        else {
            DOM.addClass(this.buttonVideo, 'state-disabled');
        }
    };
    UI_Toolbar_Panel_Multimedia.prototype.updateLinkState = function () {
        if (this.toolbar.state.state.link) {
            DOM.removeClass(this.buttonLink, 'state-disabled');
        }
        else {
            DOM.addClass(this.buttonLink, 'state-disabled');
        }
    };
    UI_Toolbar_Panel_Multimedia.prototype.updateObjectState = function () {
        if (this.toolbar.state.state.object) {
        }
        else {
        }
    };
    UI_Toolbar_Panel_Multimedia.prototype.updateDocumentState = function (propertiesList) {
        var i = 0, len = propertiesList.length;
        for (i = 0; i < len; i++) {
            switch (propertiesList[i]) {
                case 'picture':
                    this.updatePictureState();
                    break;
                case 'video':
                    this.updateVideoState();
                    break;
                case 'object':
                    this.updateObjectState();
                    break;
                case 'link':
                    this.updateLinkState();
                    break;
            }
        }
    };
    return UI_Toolbar_Panel_Multimedia;
})(UI_Toolbar_Panel);
var UI_Toolbar_Panel_Table = (function (_super) {
    __extends(UI_Toolbar_Panel_Table, _super);
    function UI_Toolbar_Panel_Table(toolbar, appendIn, maxPercentualOrFixedWidth, panelRowIndex) {
        _super.call(this, toolbar, 'Table', appendIn, maxPercentualOrFixedWidth, panelRowIndex);
        this.btnTable = null;
        this.btnBorderColor = null;
        this.btnBackgroundColor = null;
        this.btnInsertRowBefore = null;
        this.btnInsertRowAfter = null;
        this.btnDeleteRow = null;
        this.btnInsertColBefore = null;
        this.btnInsertColAfter = null;
        this.btnDeleteCol = null;
        this.btnSplitCell = null;
        this.btnMergeCells = null;
        DOM.addClass(this.node, 'ui-panel-table');
        this.node.innerHTML = UI_Resources.html_tableToolbar;
        this.btnTable = this.node.querySelector('div.ui-button.table');
        this.btnBorderColor = this.node.querySelector('div.ui-button.borderColor');
        this.btnBackgroundColor = this.node.querySelector('div.ui-button.backgroundColor');
        this.btnInsertRowBefore = this.node.querySelector('div.ui-button.table-insert-r-before');
        this.btnInsertRowAfter = this.node.querySelector('div.ui-button.table-insert-r-after');
        this.btnDeleteRow = this.node.querySelector('div.ui-button.table-delete-r');
        this.btnInsertColBefore = this.node.querySelector('div.ui-button.table-insert-c-before');
        this.btnInsertColAfter = this.node.querySelector('div.ui-button.table-insert-c-after');
        this.btnDeleteCol = this.node.querySelector('div.ui-button.table-delete-c');
        this.btnSplitCell = this.node.querySelector('div.ui-button.table-split-cells');
        this.btnMergeCells = this.node.querySelector('div.ui-button.table-merge-cells');
        (function (me) {
            me.makeColorDropdown(me.btnBorderColor, function (color) {
                if (DOM.hasClass(me.btnBorderColor, 'state-disabled'))
                    return;
                me.setBorderColor(color);
                me.focusCanvas();
            }, '');
            me.btnInsertRowAfter.addEventListener('click', function (evt) {
                if (DOM.hasClass(me.btnInsertRowAfter, 'state-disabled'))
                    return;
                me.insertRowAfter();
                me.focusCanvas();
            }, true);
            me.btnInsertRowBefore.addEventListener('click', function (evt) {
                if (DOM.hasClass(me.btnInsertRowBefore, 'state-disabled'))
                    return;
                me.insertRowBefore();
                me.focusCanvas();
            }, true);
            me.btnDeleteRow.addEventListener('click', function (evt) {
                if (DOM.hasClass(me.btnDeleteRow, 'state-disabled'))
                    return;
                me.deleteRow();
                me.focusCanvas();
            }, true);
            me.btnInsertColAfter.addEventListener('click', function (evt) {
                if (DOM.hasClass(me.btnInsertColAfter, 'state-disabled'))
                    return;
                me.insertColumnAfter();
                me.focusCanvas();
            }, true);
            me.btnInsertColBefore.addEventListener('click', function (evt) {
                if (DOM.hasClass(me.btnInsertColBefore, 'state-disabled'))
                    return;
                me.insertColumnBefore();
                me.focusCanvas();
            }, true);
            me.btnDeleteCol.addEventListener('click', function (evt) {
                if (DOM.hasClass(me.btnDeleteCol, 'state-disabled'))
                    return;
                me.deleteColumn();
                me.focusCanvas();
            }, true);
            me.btnMergeCells.addEventListener('click', function (evt) {
                if (DOM.hasClass(me.btnMergeCells, 'state-disabled'))
                    return;
                me.mergeCells();
                me.focusCanvas();
            }, true);
            me.btnSplitCell.addEventListener('click', function (evt) {
                if (DOM.hasClass(me.btnSplitCell, 'state-disabled'))
                    return;
                me.splitCell();
                me.focusCanvas();
            }, true);
            me.createTableDropdown(me.btnTable, function (c, r) {
                me.insertTable(c, r);
                me.focusCanvas();
            });
            me.makeColorDropdown(me.btnBackgroundColor, function (color) {
                me.setBackgroundColor(color);
                me.focusCanvas();
            }, '');
        })(this);
        this.on_afterload();
    }
    UI_Toolbar_Panel_Table.prototype.updatePanelState = function () {
        var tableState = !!this.toolbar.state.state.table, cellState = this.toolbar.state.state.cell, selection = this.toolbar.router.viewport.selection, rng = selection.getRange();
        if (tableState) {
            DOM.removeClass(this.btnTable, 'state-disabled');
        }
        else {
            DOM.addClass(this.btnTable, 'state-disabled');
        }
        if (cellState) {
            DOM.removeClass(this.btnBorderColor, 'state-disabled');
            DOM.removeClass(this.btnBackgroundColor, 'state-disabled');
            DOM.removeClass(this.btnInsertColAfter, 'state-disabled');
            DOM.removeClass(this.btnInsertColBefore, 'state-disabled');
            DOM.removeClass(this.btnDeleteCol, 'state-disabled');
            DOM.removeClass(this.btnInsertRowAfter, 'state-disabled');
            DOM.removeClass(this.btnInsertRowBefore, 'state-disabled');
            DOM.removeClass(this.btnDeleteRow, 'state-disabled');
            /* Split cells is possible only if the cell has colspan or rowspan > 1.
               Merge cells is possible only if selection is of type multirange,
               and contains more than 1 cell.
             */
            if ((cellState.colSpan() > 1 || cellState.rowSpan() > 1) && !rng.isMultiRange()) {
                DOM.removeClass(this.btnSplitCell, 'state-disabled');
            }
            else {
                DOM.addClass(this.btnSplitCell, 'state-disabled');
            }
            if (cellState && rng.isMultiRange() && cellState && rng.anchorNode().target.childNodes.length > 1) {
                DOM.removeClass(this.btnMergeCells, 'state-disabled');
            }
            else {
                DOM.addClass(this.btnMergeCells, 'state-disabled');
            }
        }
        else {
            DOM.addClass(this.btnBorderColor, 'state-disabled');
            DOM.addClass(this.btnBackgroundColor, 'state-disabled');
            DOM.addClass(this.btnInsertColAfter, 'state-disabled');
            DOM.addClass(this.btnInsertColBefore, 'state-disabled');
            DOM.addClass(this.btnDeleteCol, 'state-disabled');
            DOM.addClass(this.btnInsertRowAfter, 'state-disabled');
            DOM.addClass(this.btnInsertRowBefore, 'state-disabled');
            DOM.addClass(this.btnDeleteRow, 'state-disabled');
            DOM.addClass(this.btnSplitCell, 'state-disabled');
            DOM.addClass(this.btnMergeCells, 'state-disabled');
        }
    };
    UI_Toolbar_Panel_Table.prototype.setBorderColor = function (color) {
        var cell = this.toolbar.router.viewport.selection.editorState.state.cell;
        if (!cell) {
            return;
        }
        this.toolbar.router.viewport.undo.createUndoEntry('Set Border Color');
        cell.ownerTable.style.borderColor(color);
        if (!color) {
            cell.ownerTable.border(0);
        }
        else {
            if (cell.ownerTable.border() == 0) {
                cell.ownerTable.border(1);
            }
        }
    };
    UI_Toolbar_Panel_Table.prototype.createTableDropdown = function (button, onchange) {
        var overlay = document.createElement('div'), status = document.createElement('div'), row, col, matrix = [[], [], [], [], [], [], [], [], [], []];
        function reset() {
            var r = 0, c = 0;
            for (r = 0; r < 10; r++) {
                for (c = 0; c < 10; c++) {
                    matrix[r][c].className = 'cell';
                }
            }
            status.textContent = '';
        }
        button.addEventListener('click', function (evt) {
            if (DOM.hasClass(button, 'state-disabled')) {
                return;
            }
            if (DOM.hasClass(button, 'state-expanded')) {
                reset();
                DOM.removeClass(button, 'state-expanded');
                DOM.removeClass(button, 'state-pressed');
            }
            else {
                DOM.addClass(button, 'state-expanded');
                DOM.addClass(button, 'state-pressed');
            }
        }, false);
        DOM.addClass(overlay, 'overlay');
        function highlight(cell) {
            var row = ~~cell.getAttribute('data-row'), col = ~~cell.getAttribute('data-col'), mc, r, c;
            for (r = 1; r <= 10; r++) {
                for (c = 1; c <= 10; c++) {
                    mc = matrix[r - 1][c - 1];
                    if (r <= row && c <= col) {
                        DOM.addClass(mc, 'on');
                    }
                    else {
                        DOM.removeClass(mc, 'on');
                    }
                }
            }
            status.textContent = col + ' x ' + row;
        }
        for (row = 1; row <= 10; row++) {
            for (col = 1; col <= 10; col++) {
                (function (row, col) {
                    var cell = document.createElement('div');
                    DOM.addClass(cell, 'cell');
                    cell.setAttribute('data-row', row);
                    cell.setAttribute('data-col', col);
                    overlay.appendChild(cell);
                    matrix[row - 1].push(cell);
                    cell.addEventListener('mouseover', function (evt) {
                        highlight(cell);
                    }, false);
                })(row, col);
            }
        }
        function dispatchClick(cell) {
            var row = ~~cell.getAttribute('data-row'), col = ~~cell.getAttribute('data-col');
            DOM.removeClass(button, 'state-expanded');
            DOM.removeClass(button, 'state-pressed');
            onchange(col, row);
            reset();
        }
        button.tabIndex = 0;
        overlay.addEventListener('click', function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            var target = evt.target || evt.srcElement;
            if (target) {
                if (DOM.hasClass(target, 'cell')) {
                    dispatchClick(target);
                }
            }
        }, true);
        DOM.addClass(status, 'status');
        overlay.appendChild(status);
        button.appendChild(overlay);
    };
    UI_Toolbar_Panel_Table.prototype.insertTable = function (cols, rows) {
        var out = [
            '<table border="1" bordercolor="#000000" cellpadding="0" cellspacing="0">'
        ];
        for (var r = 0; r < rows; r++) {
            out.push('<tr>');
            for (var c = 0; c < cols; c++) {
                out.push('<td></td>');
            }
            out.push('</tr>');
        }
        out.push('</table>');
        this.toolbar.router.viewport.selection.insertHTML(out.join(''));
    };
    UI_Toolbar_Panel_Table.prototype.insertColumnBefore = function () {
        var cell = this.toolbar.router.viewport.selection.editorState.state.cell;
        if (cell) {
            cell.insertColumn(true);
        }
    };
    UI_Toolbar_Panel_Table.prototype.insertColumnAfter = function () {
        var cell = this.toolbar.router.viewport.selection.editorState.state.cell;
        if (cell) {
            cell.insertColumn(false);
        }
    };
    UI_Toolbar_Panel_Table.prototype.insertRowBefore = function () {
        var cell = this.toolbar.router.viewport.selection.editorState.state.cell;
        if (cell) {
            cell.insertRow(true);
        }
    };
    UI_Toolbar_Panel_Table.prototype.insertRowAfter = function () {
        var cell = this.toolbar.router.viewport.selection.editorState.state.cell;
        if (cell) {
            cell.insertRow(false);
        }
    };
    UI_Toolbar_Panel_Table.prototype.deleteColumn = function () {
        var cell = this.toolbar.router.viewport.selection.editorState.state.cell;
        if (cell) {
            cell.deleteColumn();
        }
    };
    UI_Toolbar_Panel_Table.prototype.deleteRow = function () {
        var cell = this.toolbar.router.viewport.selection.editorState.state.cell;
        if (cell) {
            cell.deleteRow();
        }
    };
    UI_Toolbar_Panel_Table.prototype.setBackgroundColor = function (color) {
        this.toolbar.router.dispatchCommand(18 /* BGCOLOR */, [color]);
    };
    UI_Toolbar_Panel_Table.prototype.splitCell = function () {
        var cell = this.toolbar.router.viewport.selection.editorState.state.cell;
        if (cell) {
            cell.splitCell();
        }
    };
    UI_Toolbar_Panel_Table.prototype.mergeCells = function () {
        var selection = this.toolbar.router.viewport.selection, rng = selection.getRange();
        if (!rng.isMultiRange()) {
            return;
        }
        /* Transform the range into a HTML_MultiRange_TableRect range */
        if (!rng.becomeTableRectRange()) {
            console.warn('failed to become tablerectrange');
            return;
        }
        rng.anchorNode().target.mergeCells();
        DOM.removeClass(this.btnSplitCell, 'state-disabled');
    };
    UI_Toolbar_Panel_Table.prototype.updateDocumentState = function (propertiesList) {
        var i = 0, len = propertiesList.length;
        for (i = 0; i < len; i++) {
            if (propertiesList[i] == 'table' || propertiesList[i] == 'cell') {
                this.updatePanelState();
                break;
            }
        }
    };
    return UI_Toolbar_Panel_Table;
})(UI_Toolbar_Panel);
var UI_Dialog = (function (_super) {
    __extends(UI_Dialog, _super);
    function UI_Dialog(config) {
        _super.call(this);
        /* DOM Elements */
        this.outerNode = document.createElement('div');
        this.titlebar = document.createElement('div');
        this.label = document.createElement('div');
        this.btns = document.createElement('div');
        this.body = document.createElement('div');
        this.resizer = document.createElement('div');
        this.footerButtons = document.createElement('div');
        /* Resizing stuff */
        this.resizerType = null;
        this.resizerLastPoint = null;
        this.settings = {
            "width": 100,
            "height": 100,
            "caption": "Dialog",
            "closable": true,
            "resizable": true,
            "minWidth": 90,
            "minHeight": 10,
            "childOf": null,
            "x": 0,
            "y": 0,
            "modal": false,
            "buttons": []
        };
        this.titlebar.appendChild(this.label);
        this.titlebar.appendChild(this.btns);
        this.outerNode.appendChild(this.resizer);
        this.resizer.innerHTML = '<div class="handle n"></div><div class="handle s"></div><div class="handle w"></div><div class="handle e"></div><div class="handle nw"></div><div class="handle ne"></div><div class="handle sw"></div><div class="handle se"></div>';
        this.resizer.appendChild(this.titlebar);
        this.resizer.appendChild(this.body);
        this.resizer.appendChild(this.footerButtons);
        DOM.addClass(this.outerNode, 'ui-dialog');
        DOM.addClass(this.outerNode.appendChild(document.createElement('div')), 'modal');
        DOM.addClass(this.resizer, 'resizer');
        DOM.addClass(this.titlebar, 'titlebar');
        DOM.addClass(this.label, 'caption');
        DOM.addClass(this.btns, 'buttons');
        DOM.addClass(this.footerButtons, 'buttons-footer');
        DOM.addClass(this.body, 'body');
        this.width = typeof config.width == 'undefined' ? this.settings.width : config.width;
        this.height = typeof config.height == 'undefined' ? this.settings.height : config.height;
        this.caption = typeof config.caption == 'undefined' ? this.settings.caption : config.caption;
        this.closable = typeof config.closable == 'undefined' ? this.settings.closable : config.closable;
        this.modal = typeof config.modal == 'undefined' ? this.settings.modal : config.modal;
        this.childOf = typeof config.childOf == 'undefined' ? this.settings.childOf : config.childOf;
        this.x = typeof config.x == 'undefined' ? this.settings.x : config.x;
        this.y = typeof config.y == 'undefined' ? this.settings.y : config.y;
        this.minWidth = typeof config.minWidth == 'undefined' ? this.settings.minWidth : config.minWidth;
        this.minHeight = typeof config.minHeight == 'undefined' ? this.settings.minHeight : config.minHeight;
        this.innerHTML = typeof config.innerHTML == 'undefined' ? this.settings.innerHTML : config.innerHTML;
        this.buttons = typeof config.buttons == 'undefined' ? this.settings.buttons : config.buttons;
        this.outerNode['dialog'] = this;
        this._initResizer_();
        this._initKeyboard_();
        this.outerNode.tabIndex = 0;
    }
    Object.defineProperty(UI_Dialog.prototype, "x", {
        get: function () {
            return this.settings.x;
        },
        set: function (num) {
            this.settings.x = ~~num;
            this.outerNode.style.left = this.settings.x + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Dialog.prototype, "y", {
        get: function () {
            return this.settings.y;
        },
        set: function (num) {
            this.settings.y = ~~num;
            this.outerNode.style.top = this.settings.y + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Dialog.prototype, "width", {
        get: function () {
            return this.settings.width;
        },
        set: function (v) {
            this.settings.width = ~~v;
            this.outerNode.style.width = v + 4 + "px";
            this.fire('resize');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Dialog.prototype, "height", {
        get: function () {
            return this.settings.height;
        },
        set: function (v) {
            this.settings.height = ~~v;
            this.outerNode.style.height = v + 30 + (this.settings.buttons ? 50 : 0) + "px";
            this.resizer.style.height = v + 30 + (this.settings.buttons ? 50 : 0) + "px";
            this.body.style.height = v + "px";
            this.fire('resize');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Dialog.prototype, "caption", {
        get: function () {
            return this.settings.caption;
        },
        set: function (s) {
            this.settings.caption = String(s || '');
            this.label.innerHTML = '';
            this.label.appendChild(document.createTextNode(this.settings.caption));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Dialog.prototype, "childOf", {
        get: function () {
            return this.outerNode.parentNode;
        },
        set: function (element) {
            if (element) {
                element.appendChild(this.outerNode);
                this.fire('open', element);
            }
            else {
                if (this.outerNode.parentNode) {
                    this.outerNode.parentNode.removeChild(this.outerNode);
                }
            }
            this.settings.childOf = element || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Dialog.prototype, "innerHTML", {
        get: function () {
            return this.body.innerHTML;
        },
        set: function (s) {
            this.body.innerHTML = String(s || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Dialog.prototype, "closable", {
        get: function () {
            return this.settings.closable;
        },
        set: function (v) {
            this.settings.closable = !!v;
            var rm = this.btns.querySelector('div.close');
            if (rm) {
                this.btns.removeChild(rm);
            }
            if (v) {
                DOM.addClass(this.titlebar, 'closable');
                var btnClose = document.createElement('div');
                DOM.addClass(btnClose, 'close');
                this.btns.appendChild(btnClose);
                (function (me) {
                    btnClose.addEventListener('click', function () {
                        me.close();
                    }, true);
                })(this);
            }
            else {
                DOM.removeClass(this.titlebar, 'closable');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Dialog.prototype, "modal", {
        get: function () {
            return this.settings.modal;
        },
        set: function (b) {
            this.settings.modal = !!b;
            if (this.settings.modal) {
                DOM.addClass(this.outerNode, 'modal');
            }
            else {
                DOM.removeClass(this.outerNode, 'modal');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Dialog.prototype, "minWidth", {
        get: function () {
            return this.settings.minWidth;
        },
        set: function (v) {
            this.settings.minWidth = ~~v;
            if (this.width < this.settings.minWidth) {
                this.width = this.settings.minWidth;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Dialog.prototype, "minHeight", {
        get: function () {
            return this.settings.minHeight;
        },
        set: function (v) {
            this.settings.minHeight = ~~v;
            if (this.height < this.settings.minHeight) {
                this.height = this.settings.minHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    UI_Dialog.prototype.close = function () {
        this.childOf = null;
        this.fire('close');
        return this;
    };
    UI_Dialog.prototype.open = function (inParent) {
        if (inParent === void 0) { inParent = null; }
        if (inParent) {
            this.childOf = inParent;
        }
        else {
            this.childOf = document.body;
        }
        this.fire('open');
        try {
            this.body.querySelector('.focus-first')['focus']();
        }
        catch (e) {
            this.outerNode.focus();
        }
        return this;
    };
    Object.defineProperty(UI_Dialog.prototype, "buttons", {
        get: function () {
            return this.settings.buttons;
        },
        set: function (cfg) {
            this.footerButtons.innerHTML = '';
            if (cfg && cfg.length) {
                for (var i = 0, len = cfg.length; i < len; i++) {
                    (function (btn, container, me) {
                        var button = document.createElement('button');
                        button.appendChild(document.createTextNode(btn.name));
                        if (btn.default) {
                            DOM.addClass(button, 'default');
                        }
                        container.appendChild(button);
                        button.addEventListener('click', function () {
                            btn.callback.call(me);
                        }, true);
                    })(cfg[i], this.footerButtons, this);
                }
                DOM.addClass(this.outerNode, 'footer-buttons');
                this.settings.buttons = cfg;
            }
            else {
                DOM.removeClass(this.outerNode, 'footer-buttons');
                this.settings.buttons = null;
            }
            this.height = this.height;
        },
        enumerable: true,
        configurable: true
    });
    UI_Dialog.prototype.runDefaultAction = function () {
        if (this.settings.buttons && this.settings.buttons.length) {
            for (var i = 0, len = this.settings.buttons.length; i < len; i++) {
                if (this.settings.buttons[i].default) {
                    this.settings.buttons[i].callback.call(this);
                    break;
                }
            }
        }
    };
    UI_Dialog.prototype.runCancelAction = function () {
        for (var i = 0, len = this.settings.buttons.length; i < len; i++) {
            if (this.settings.buttons[i].cancel) {
                this.settings.buttons[i].callback.call(this);
                break;
            }
        }
    };
    // this method should be implemented by ancestors.
    UI_Dialog.prototype.setup = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return this;
    };
    UI_Dialog.prototype._initKeyboard_ = function () {
        (function (me) {
            me.outerNode.addEventListener('keyup', function (evt) {
                var key = evt.keyCode;
                switch (key) {
                    case 13:
                        if (document.activeElement && document.activeElement.nodeName.toLowerCase() == 'textarea') {
                            break;
                        }
                        me.runDefaultAction();
                        evt.preventDefault();
                        evt.stopPropagation();
                        break;
                    case 27:
                        me.runCancelAction();
                        evt.preventDefault();
                        evt.stopPropagation();
                        break;
                }
            });
            me.outerNode.addEventListener('keydown', function (evt) {
                var key = evt.keyCode, nodes, focused = document.activeElement, fIndex = null;
                if (key == 9) {
                    nodes = Array.prototype.slice.call(me.outerNode.querySelectorAll('input:not(:disabled),textarea:not(:disabled),select:not(:disabled),button:not(:disabled)'), 0);
                    for (var i = 0, len = nodes.length; i < len; i++) {
                        if (focused == nodes[i]) {
                            fIndex = i;
                            break;
                        }
                    }
                    if (fIndex === null) {
                        return;
                    }
                    if (evt.shiftKey) {
                        // focus previous
                        if (fIndex > 0) {
                            nodes[fIndex - 1].focus();
                        }
                        else {
                            nodes[nodes.length - 1].focus();
                        }
                    }
                    else {
                        //console.log( fIndex, nodes.length, nodes );
                        // focus next
                        if (fIndex < (nodes.length - 1)) {
                            nodes[fIndex + 1].focus();
                        }
                        else {
                            nodes[0].focus();
                        }
                    }
                    evt.preventDefault();
                    evt.stopPropagation();
                }
            });
        })(this);
    };
    UI_Dialog.prototype._initResizer_ = function () {
        (function (me) {
            me.outerNode.querySelector('.modal').addEventListener('click', function () {
                me.x -= 10;
                setTimeout(function () {
                    me.x += 20;
                }, 50);
                setTimeout(function () {
                    me.x -= 20;
                }, 100);
                setTimeout(function () {
                    me.x += 10;
                    me.outerNode.focus();
                }, 150);
            });
            function onresizer_mousemove(evt) {
                evt.preventDefault();
                evt.stopPropagation();
                var currentPoint = {
                    "x": evt.clientX,
                    "y": evt.clientY
                }, delta = {
                    "x": me.resizerLastPoint.x - currentPoint.x,
                    "y": me.resizerLastPoint.y - currentPoint.y
                }, rect = {
                    "width": me.width,
                    "height": me.height,
                    "x": me.x,
                    "y": me.y
                };
                switch (me.resizerType) {
                    case 4 /* N */:
                        rect.y -= delta.y;
                        rect.height += delta.y;
                        break;
                    case 5 /* S */:
                        rect.height -= delta.y;
                        break;
                    case 6 /* W */:
                        rect.x -= delta.x;
                        rect.width += delta.x;
                        break;
                    case 7 /* E */:
                        rect.width -= delta.x;
                        break;
                    case 2 /* SW */:
                        rect.x -= delta.x;
                        rect.width += delta.x;
                        rect.height -= delta.y;
                        break;
                    case 3 /* SE */:
                        rect.width -= delta.x;
                        rect.height -= delta.y;
                        break;
                    case 0 /* NW */:
                        rect.x -= delta.x;
                        rect.y -= delta.y;
                        rect.width += delta.x;
                        rect.height += delta.y;
                        break;
                    case 1 /* NE */:
                        rect.y -= delta.y;
                        rect.width -= delta.x;
                        rect.height += delta.y;
                        break;
                }
                if (rect.width >= me.settings.minWidth) {
                    if (rect.x != me.x) {
                        me.x = rect.x;
                    }
                    if (rect.width != me.width) {
                        me.width = rect.width;
                    }
                    me.resizerLastPoint.x = currentPoint.x;
                }
                if (rect.height >= me.settings.minHeight) {
                    if (rect.y != me.y) {
                        me.y = rect.y;
                    }
                    if (rect.height != me.height) {
                        me.height = rect.height;
                    }
                    me.resizerLastPoint.y = currentPoint.y;
                }
            }
            function onresizer_mouseup(evt) {
                evt.preventDefault();
                evt.stopPropagation();
                me.resizerType = null;
                document.body.removeEventListener('mousemove', onresizer_mousemove, true);
                document.body.removeEventListener('mouseup', onresizer_mouseup, true);
            }
            me.resizer.addEventListener('mousedown', function (evt) {
                var handle = evt.target || evt.toElement;
                if (handle && DOM.hasClass(handle, 'handle')) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    switch (true) {
                        case DOM.hasClass(handle, 'n'):
                            me.resizerType = 4 /* N */;
                            break;
                        case DOM.hasClass(handle, 's'):
                            me.resizerType = 5 /* S */;
                            break;
                        case DOM.hasClass(handle, 'w'):
                            me.resizerType = 6 /* W */;
                            break;
                        case DOM.hasClass(handle, 'e'):
                            me.resizerType = 7 /* E */;
                            break;
                        case DOM.hasClass(handle, 'nw'):
                            me.resizerType = 0 /* NW */;
                            break;
                        case DOM.hasClass(handle, 'ne'):
                            me.resizerType = 1 /* NE */;
                            break;
                        case DOM.hasClass(handle, 'sw'):
                            me.resizerType = 2 /* SW */;
                            break;
                        case DOM.hasClass(handle, 'se'):
                            me.resizerType = 3 /* SE */;
                            break;
                    }
                    me.resizerLastPoint = {
                        "x": evt.clientX,
                        "y": evt.clientY
                    };
                    document.body.addEventListener('mousemove', onresizer_mousemove, true);
                    document.body.addEventListener('mouseup', onresizer_mouseup, true);
                }
            }, true);
            function ondrag_mousemove(evt) {
                evt.preventDefault();
                evt.stopPropagation();
                var currentPoint = {
                    "x": evt.clientX,
                    "y": evt.clientY
                }, delta = {
                    "x": me.resizerLastPoint.x - currentPoint.x,
                    "y": me.resizerLastPoint.y - currentPoint.y
                };
                me.x -= delta.x;
                me.y -= delta.y;
                me.resizerLastPoint.x = currentPoint.x;
                me.resizerLastPoint.y = currentPoint.y;
            }
            function ondrag_mouseup(evt) {
                document.body.removeEventListener('mousemove', ondrag_mousemove, true);
                document.body.removeEventListener('mouseup', ondrag_mouseup, true);
            }
            me.label.addEventListener('mousedown', function (evt) {
                document.body.addEventListener('mousemove', ondrag_mousemove, true);
                document.body.addEventListener('mouseup', ondrag_mouseup, true);
                me.resizerLastPoint = {
                    "x": evt.clientX,
                    "y": evt.clientY
                };
                evt.preventDefault();
                evt.stopPropagation();
            }, true);
        })(this);
    };
    Object.defineProperty(UI_Dialog.prototype, "offsetHeight", {
        get: function () {
            return this.settings.height + 30 + (this.settings.buttons ? 50 : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Dialog.prototype, "offsetWidth", {
        get: function () {
            return this.settings.width + 4;
        },
        enumerable: true,
        configurable: true
    });
    UI_Dialog.prototype.centerTo = function (node) {
        var nodeRect = node.getBoundingClientRect(), bodyLeft = document.body.scrollLeft, bodyTop = document.body.scrollTop, y = nodeRect.top + (nodeRect.height / 2) - (this.offsetHeight / 2), x = nodeRect.left + (nodeRect.width / 2) - (this.offsetWidth / 2);
        if (y < bodyTop) {
            y = bodyTop;
        }
        if (x < bodyLeft) {
            x = bodyLeft;
        }
        this.x = ~~x;
        this.y = ~~y;
        return this;
    };
    return UI_Dialog;
})(Events);
var UI_Tabs = (function (_super) {
    __extends(UI_Tabs, _super);
    function UI_Tabs(_DomElement) {
        _super.call(this);
        this.sheets = [];
        this._width = 0;
        this._height = 0;
        this.root = _DomElement;
        var t = Array.prototype.slice.call(this.root.querySelectorAll('.ui-tabs-header > .ui-tab'), 0), i, len = t.length, s;
        for (i = 0; i < len; i++) {
            s = {
                "id": t[i].getAttribute('data-sheet-id'),
                "tab": (t[i]),
                "sheet": (this.root.querySelector('.ui-sheet.' + t[i].getAttribute('data-sheet-id')))
            };
            this.sheets.push(s);
        }
        (function (me) {
            me.root.querySelector('.ui-tabs-header').addEventListener('click', function (evt) {
                var target = evt.target || evt.srcElement;
                if (DOM.hasClass(target, 'ui-tab')) {
                    me.showTab(target.getAttribute('data-sheet-id'));
                }
            }, false);
        })(this);
        if (this.sheets.length) {
            this.showTab(this.sheets[0].id);
            DOM.addClass(this.sheets[0].tab, 'first');
        }
    }
    Object.defineProperty(UI_Tabs.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (w) {
            w = ~~w;
            this._width = w;
            this.root.style.width = w + "px";
            this.fire('resize');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI_Tabs.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (h) {
            h = ~~h;
            this._height = h;
            this.root.style.height = h + "px";
            for (var i = 0, len = this.sheets.length; i < len; i++) {
                this.sheets[i].sheet.style.height = (h - 40) + "px";
            }
            this.fire('resize');
        },
        enumerable: true,
        configurable: true
    });
    UI_Tabs.prototype.showTab = function (tabId) {
        for (var i = 0, len = this.sheets.length; i < len; i++) {
            if (this.sheets[i].id == tabId) {
                DOM.addClass(this.sheets[i].tab, 'active');
                this.sheets[i].sheet.style.display = 'block';
            }
            else {
                DOM.removeClass(this.sheets[i].tab, 'active');
                this.sheets[i].sheet.style.display = 'none';
            }
        }
    };
    return UI_Tabs;
})(Events);
var UI_Dialog_Manager = (function () {
    function UI_Dialog_Manager() {
    }
    UI_Dialog_Manager.singleton = function (dialogType) {
        var i = 0, len = UI_Dialog_Manager.dialogs.length, add = {
            "type": null,
            "dialog": null
        };
        for (i = 0; i < len; i++) {
            if (UI_Dialog_Manager.dialogs[i].type == dialogType) {
                return UI_Dialog_Manager.dialogs[i].dialog;
                break;
            }
        }
        add.type = dialogType;
        switch (dialogType) {
            case 'Alert':
                add.dialog = new UI_Dialog_Alert();
                UI_Dialog_Manager.dialogs.push(add);
                return add.dialog;
                break;
            case 'InsertPicture':
                add.dialog = new UI_Dialog_InsertPicture();
                UI_Dialog_Manager.dialogs.push(add);
                return add.dialog;
                break;
            case 'InsertVideo':
                add.dialog = new UI_Dialog_InsertVideo();
                UI_Dialog_Manager.dialogs.push(add);
                return add.dialog;
                break;
            case 'InsertLink':
                add.dialog = new UI_Dialog_InsertLink();
                UI_Dialog_Manager.dialogs.push(add);
                return add.dialog;
                break;
            case 'EditLink':
                add.dialog = new UI_Dialog_EditLink();
                UI_Dialog_Manager.dialogs.push(add);
                return add.dialog;
                break;
            case 'FileBrowser':
                add.dialog = new UI_Dialog_FileBrowser();
                UI_Dialog_Manager.dialogs.push(add);
                return add.dialog;
                break;
            default:
                throw "Unknown dialog type: " + dialogType;
                break;
        }
    };
    UI_Dialog_Manager.alert = function (message, callback, centerTo) {
        if (callback === void 0) { callback = null; }
        if (centerTo === void 0) { centerTo = null; }
        var dlg = UI_Dialog_Manager.singleton('Alert');
        dlg.setup(message, callback, centerTo).open();
    };
    UI_Dialog_Manager.dialogs = [];
    return UI_Dialog_Manager;
})();
var UI_Dialog_Alert = (function (_super) {
    __extends(UI_Dialog_Alert, _super);
    function UI_Dialog_Alert(config) {
        if (config === void 0) { config = {
            "caption": "Alert",
            "width": 400,
            "height": 100,
            "minWidth": 400,
            "minHeight": 50,
            "closable": true,
            "modal": true,
            "buttons": [
                {
                    "name": "Ok",
                    "default": true,
                    "cancel": true,
                    "callback": function () {
                        this.on_ok();
                    }
                }
            ],
            "innerHTML": UI_Resources.html_alert
        }; }
        _super.call(this, config);
        this.textAlert = null;
        this.callback = null;
        this.textAlert = this.body.querySelector('p.alert-text');
    }
    /* Setup:
        $args[0]: <message> : string = null
        $args[1]: <callback>: () => void,
        $args[2]: <centerTo>: DOMElement = null
     */
    UI_Dialog_Alert.prototype.setup = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        this.textAlert.innerHTML = '';
        this.textAlert.appendChild(document.createTextNode(String(args[0] || 'Alert!')));
        this.callback = args[1] || null;
        if (args[2]) {
            this.centerTo(args[2]);
        }
        return this;
    };
    UI_Dialog_Alert.prototype.on_ok = function () {
        this.close();
        if (this.callback) {
            this.callback();
        }
    };
    return UI_Dialog_Alert;
})(UI_Dialog);
var UI_Dialog_InsertPicture = (function (_super) {
    __extends(UI_Dialog_InsertPicture, _super);
    function UI_Dialog_InsertPicture(config) {
        if (config === void 0) { config = {
            "caption": "Insert Picture",
            "width": 400,
            "height": 400,
            "minWidth": 400,
            "minHeight": 400,
            "closable": true,
            "modal": true,
            "buttons": [
                {
                    "name": "Ok",
                    "default": true,
                    "callback": function () {
                        this.on_ok();
                    }
                },
                {
                    "name": "Cancel",
                    "cancel": true,
                    "callback": function () {
                        this.on_cancel();
                    }
                }
            ],
            "innerHTML": UI_Resources.html_insertPicture
        }; }
        _super.call(this, config);
        this.iWidth = null;
        this.iHeight = null;
        this.iConstrainProportions = null;
        this.iAlternateText = null;
        this.iSource = null;
        this.btnBrowse = null;
        this.iPreview = null;
        this.iLoaded = false;
        this.aspectRatio = 1;
        this.iInitialWidth = null;
        this.initialImage = null;
        this.ownerDocument = null;
        this.emptySrc = '';
        this.iWidth = this.body.querySelector('input.int-width');
        this.iHeight = this.body.querySelector('input.int-height');
        this.iConstrainProportions = this.body.querySelector('input.bool-proportions');
        this.iAlternateText = this.body.querySelector('input.txt-alt');
        this.iSource = this.body.querySelector('input.txt-src');
        this.iPreview = this.body.querySelector('img.img-preview');
        this.emptySrc = this.iPreview.src;
        this.btnBrowse = this.body.querySelector('button.browse');
        this._setupPreview_();
        (function (me) {
            me.btnBrowse.addEventListener('click', function () {
                me.on_browse();
            });
        })(this);
    }
    UI_Dialog_InsertPicture.prototype._setupPreview_ = function () {
        (function (me) {
            me.iPreview.addEventListener('error', function () {
                me.iPreview.src = me.emptySrc;
                me.iLoaded = false;
                me.onLoadStateChanged();
            }, true);
            me.iPreview.addEventListener('load', function () {
                if (me.iPreview.src != me.emptySrc) {
                    me.iLoaded = true;
                    me.iPreview.style.maxWidth = '';
                    me.iPreview.style.maxHeight = '';
                    me.iWidth.value = me.iPreview.width;
                    me.iHeight.value = me.iPreview.height;
                    me.aspectRatio = me.iPreview.width / me.iPreview.height;
                    if (me.iInitialWidth) {
                        me.iWidth.value = String(me.iInitialWidth);
                        me.iHeight.value = String(Math.round(me.iInitialWidth / me.aspectRatio));
                    }
                    me.iPreview.style.maxWidth = '150px';
                    me.iPreview.style.maxHeight = '150px';
                }
                else {
                    me.iLoaded = false;
                }
                me.onLoadStateChanged();
            }, true);
            me.iSource.addEventListener('input', function () {
                me.on_source_changed();
            });
            me.iWidth.addEventListener('wheel', function (evt) {
                if (me.iWidth.disabled) {
                    evt.preventDefault();
                    evt.stopPropagation();
                }
                else {
                    me.onWidthChanged();
                }
            }, true);
            me.iHeight.addEventListener('wheel', function (evt) {
                if (me.iHeight.disabled) {
                    evt.preventDefault();
                    evt.stopPropagation();
                }
                else {
                    me.onHeightChanged();
                }
            }, true);
            me.iWidth.addEventListener('blur', function () {
                me.onWidthChanged();
            }, true);
            me.iHeight.addEventListener('blur', function () {
                me.onHeightChanged();
            }, true);
            me.iConstrainProportions.addEventListener('click', function () {
                if (me.iConstrainProportions.checked) {
                    me.onWidthChanged();
                }
            }, false);
        })(this);
    };
    UI_Dialog_InsertPicture.prototype.onLoadStateChanged = function () {
        if (this.iLoaded) {
            this.iWidth.disabled = false;
            this.iHeight.disabled = false;
            this.iConstrainProportions.disabled = false;
            this.iConstrainProportions.checked = true;
        }
        else {
            this.iWidth.disabled = true;
            this.iHeight.disabled = true;
            this.iConstrainProportions.disabled = true;
            this.iWidth.value = '';
            this.iHeight.value = '';
        }
    };
    UI_Dialog_InsertPicture.prototype.onWidthChanged = function () {
        if (this.iConstrainProportions.checked) {
            var w = ~~this.iWidth.value;
            if (w > 0)
                this.iHeight.value = String(Math.round(w / this.aspectRatio));
        }
    };
    UI_Dialog_InsertPicture.prototype.onHeightChanged = function () {
        if (this.iConstrainProportions.checked) {
            var h = ~~this.iHeight.value;
            if (h > 0)
                this.iWidth.value = String(Math.round(h * this.aspectRatio));
        }
    };
    /* $args[0] => <picture> : HTML_Image = null
       $args[1] => <document>: HTML_Body  = null;
     */
    UI_Dialog_InsertPicture.prototype.setup = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var img = args[0] || null;
        var doc = args[1] || null;
        this.ownerDocument = doc;
        if (img === null) {
            /* Setup for a new image */
            this.iInitialWidth = null;
            this.iPreview.src = this.emptySrc;
            this.iSource.value = '';
            this.initialImage = null;
            this.iWidth.value = '';
            this.iHeight.value = '';
            this.iInitialWidth = 400;
            this.aspectRatio = 1;
        }
        else {
            /* Setup for an existing image */
            this.iWidth.value = String(~~img.style.width());
            this.iInitialWidth = ~~img.style.width();
            this.iHeight.value = String(~~img.style.height());
            this.iAlternateText.value = img.alt();
            this.iSource.value = img.src();
            this.iPreview.src = img.src();
            this.initialImage = img;
        }
        this.iConstrainProportions.checked = true;
        return this;
    };
    UI_Dialog_InsertPicture.prototype.on_ok = function () {
        var width = ~~(this.iWidth.value), height = ~~(this.iHeight.value), src = this.iSource.value, me = this;
        if (!this.iLoaded) {
            UI_Dialog_Manager.alert('Please input a valid image source!', function () {
                me.iSource.focus();
            }, this.body);
            return;
        }
        if (width <= 0) {
            UI_Dialog_Manager.alert('Please input a valid image width!', function () {
                me.iWidth.focus();
            }, this.body);
            return;
        }
        if (height <= 0) {
            UI_Dialog_Manager.alert('Please input a valid image height!', function () {
                me.iHeight.focus();
            }, this.body);
            return;
        }
        if (this.initialImage) {
            this.initialImage.src(src);
            this.initialImage.width(String(width));
            this.initialImage.height(String(height));
            this.initialImage.alt(this.iAlternateText.value);
        }
        else {
            var img = this.ownerDocument.createElement('img');
            img.src(src);
            img.width(String(width));
            img.height(String(height));
            img.alt(this.iAlternateText.value);
            this.ownerDocument.viewport.selection.insertHTML(img.outerHTML());
        }
        this.close();
    };
    UI_Dialog_InsertPicture.prototype.on_cancel = function () {
        this.ownerDocument = null;
        this.initialImage = null;
        this.close();
    };
    UI_Dialog_InsertPicture.prototype.on_browse = function () {
        (function (me) {
            UI_Dialog_Manager.singleton('FileBrowser').centerTo(me.body).setup('image', function (href) {
                me.iSource.value = href;
                me.on_source_changed();
            }).open();
        })(this);
    };
    UI_Dialog_InsertPicture.prototype.on_source_changed = function () {
        if (this.iSource.value) {
            this.iPreview.src = this.iSource.value;
        }
        else {
            this.iPreview.src = this.emptySrc;
        }
    };
    return UI_Dialog_InsertPicture;
})(UI_Dialog);
var UI_Dialog_InsertVideo = (function (_super) {
    __extends(UI_Dialog_InsertVideo, _super);
    function UI_Dialog_InsertVideo(config) {
        if (config === void 0) { config = {
            "caption": "Insert Video",
            "width": 400,
            "height": 400,
            "minWidth": 400,
            "minHeight": 400,
            "closable": true,
            "modal": true,
            "buttons": [
                {
                    "name": "Ok",
                    "default": true,
                    "callback": function () {
                        this.on_ok();
                    }
                },
                {
                    "name": "Cancel",
                    "cancel": true,
                    "callback": function () {
                        this.on_cancel();
                    }
                }
            ],
            "innerHTML": UI_Resources.html_insertVideo
        }; }
        _super.call(this, config);
        this.ownerDocument = null;
        this.initialVideo = null;
        this.tabs = null;
        this.tabs = new UI_Tabs(this.body.querySelector('.ui-tabs'));
        (function (me) {
            me.on('resize', function () {
                me.tabs.width = me.width - 20;
                me.tabs.height = me.height - 30;
            });
        })(this);
    }
    /* $args[0] => <picture> : HTML_Video = null
       $args[1] => <document>: HTML_Body  = null;
     */
    UI_Dialog_InsertVideo.prototype.setup = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var vid = args[0] || null;
        var doc = args[1] || null;
        this.ownerDocument = doc;
        if (vid === null) {
            /* Setup for a new video */
            this.initialVideo = null;
        }
        else {
            /* Setup for an existing video */
            this.initialVideo = vid;
        }
        this.fire('resize');
        return this;
    };
    UI_Dialog_InsertVideo.prototype.on_ok = function () {
        if (this.initialVideo) {
        }
        else {
            var vid = this.ownerDocument.createElement('video');
            this.ownerDocument.viewport.selection.insertHTML(vid.outerHTML());
        }
        this.close();
    };
    UI_Dialog_InsertVideo.prototype.on_cancel = function () {
        this.ownerDocument = null;
        this.initialVideo = null;
        this.close();
    };
    UI_Dialog_InsertVideo.prototype.on_browse = function () {
        (function (me) {
            UI_Dialog_Manager.singleton('FileBrowser').centerTo(me.body).setup('video', function (href) {
                console.warn('video.onsourcechanged: ', href);
                me.on_source_changed();
            }).open();
        })(this);
    };
    UI_Dialog_InsertVideo.prototype.on_source_changed = function () {
        console.warn('on_source_changed');
    };
    return UI_Dialog_InsertVideo;
})(UI_Dialog);
var UI_Dialog_InsertLink = (function (_super) {
    __extends(UI_Dialog_InsertLink, _super);
    function UI_Dialog_InsertLink(config) {
        if (config === void 0) { config = {
            "caption": "Insert Link",
            "width": 400,
            "height": 150,
            "minWidth": 400,
            "minHeight": 150,
            "closable": true,
            "modal": true,
            "buttons": [
                {
                    "name": "Ok",
                    "default": true,
                    "callback": function () {
                        this.on_ok();
                    }
                },
                {
                    "name": "Cancel",
                    "cancel": true,
                    "callback": function () {
                        this.on_cancel();
                    }
                }
            ],
            "innerHTML": UI_Resources.html_insertLink
        }; }
        _super.call(this, config);
        this.aText = null;
        this.aHref = null;
        this.aTarget = null;
        this.viewport = null;
        this.aText = this.body.querySelector('input.i-text');
        this.aHref = this.body.querySelector('input.i-link');
        this.aTarget = this.body.querySelector('select.s-target');
    }
    /* Setup:
        $args[0]: <viewport>: Viewport
        $args[1]: <sText>   : string = null
        $args[2]: <sHref>   : string = null
        $args[3]: <sTarget> : string = null
     */
    UI_Dialog_InsertLink.prototype.setup = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var viewport = args[0] || null, sText = String(args[1] || '') || null, sHref = String(args[2] || '') || null, sTarget = String(args[3] || '') || null;
        this.viewport = viewport;
        this.aText.value = sText || '';
        if (this.aText.value) {
            this.aText.readOnly = true;
            this.aText.disabled = true;
        }
        else {
            this.aText.readOnly = false;
            this.aText.disabled = false;
        }
        this.aHref.value = sHref || '';
        this.aTarget.value = sTarget || '';
        return this;
    };
    UI_Dialog_InsertLink.prototype.on_ok = function () {
        var me = this;
        if (this.aText) {
            if (this.aText.value == '') {
                UI_Dialog_Manager.alert('Please fill-in a text for the HyperLink!', function () {
                    me.aText.focus();
                }, this.body);
                return;
            }
        }
        if (this.aHref.value == '') {
            UI_Dialog_Manager.alert('Please fill-in an internet address that will be used for the HyperLink!', function () {
                me.aHref.focus();
            }, this.body);
            return;
        }
        this.viewport.execCommand(22 /* INSERT_LINK */, this.aHref.value, this.aText && this.aText.readOnly === false ? this.aText.value : null, this.aTarget.value);
        this.close();
    };
    UI_Dialog_InsertLink.prototype.on_cancel = function () {
        this.close();
    };
    return UI_Dialog_InsertLink;
})(UI_Dialog);
var UI_Dialog_EditLink = (function (_super) {
    __extends(UI_Dialog_EditLink, _super);
    function UI_Dialog_EditLink(config) {
        if (config === void 0) { config = {
            "caption": "Edit Link(s)",
            "width": 400,
            "height": 150,
            "minWidth": 400,
            "minHeight": 150,
            "closable": true,
            "modal": true,
            "buttons": [
                {
                    "name": "Ok",
                    "default": true,
                    "callback": function () {
                        this.on_ok();
                    }
                },
                {
                    "name": "Remove Link(s)",
                    "callback": function () {
                        this.on_remove_links();
                    }
                },
                {
                    "name": "Cancel",
                    "cancel": true,
                    "callback": function () {
                        this.on_cancel();
                    }
                }
            ],
            "innerHTML": UI_Resources.html_editLink
        }; }
        _super.call(this, config);
        this.aHref = this.body.querySelector('input.i-link');
        this.aTarget = this.body.querySelector('select.s-target');
    }
    /* Setup:
        $args[0]: <viewport>: Viewport
        $args[1]: <sText>   : string = null
        $args[2]: <sHref>   : string = null
        $args[3]: <sTarget> : string = null
     */
    UI_Dialog_EditLink.prototype.setup = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var viewport = args[0] || null, sText = String(args[1] || '') || null, sHref = String(args[2] || '') || null, sTarget = String(args[3] || '') || null;
        this.viewport = viewport;
        this.aHref.value = sHref || '';
        this.aTarget.value = sTarget || '';
        return this;
    };
    UI_Dialog_EditLink.prototype.on_remove_links = function () {
        this.close();
        this.viewport.execCommand(23 /* REMOVE_LINK */);
    };
    return UI_Dialog_EditLink;
})(UI_Dialog_InsertLink);
var UI_Dialog_FileBrowser = (function (_super) {
    __extends(UI_Dialog_FileBrowser, _super);
    function UI_Dialog_FileBrowser(config) {
        if (config === void 0) { config = {
            "caption": "Open File",
            "width": 500,
            "height": 250,
            "minWidth": 400,
            "minHeight": 250,
            "closable": true,
            "modal": true,
            "buttons": [
                {
                    "name": "Open",
                    "default": true,
                    "callback": function () {
                        this.on_ok();
                    }
                },
                {
                    "name": "Cancel",
                    "cancel": true,
                    "callback": function () {
                        this.on_cancel();
                    }
                }
            ],
            "innerHTML": UI_Resources.html_fileBrowser
        }; }
        _super.call(this, config);
        this.overlay = null; // where files will be placed
        this.address = null; // the address bar
        this.btnUp = null; // up one level
        this.btnRefresh = null; // refresh
        this.btnSortAZ = null; // sort files A-Z
        this.btnSortZA = null; // sort files Z-A
        this.on_open = null;
        this.sorterName = 'asc';
        this.sorters = {
            "asc": null,
            "desc": null
        };
        this.navigator = FS_Navigator.factory('image', '/');
        this.overlay = this.body.querySelector('div.htmleditor-fs > div.files');
        this.address = this.body.querySelector('div.htmleditor-fs input.fs-location');
        this.overlay.tabIndex = 1;
        this.btnUp = this.body.querySelector('div.htmleditor-fs div.buttons > div.button.up');
        this.btnRefresh = this.body.querySelector('div.htmleditor-fs div.buttons > div.button.refresh');
        this.btnSortAZ = this.body.querySelector('div.htmleditor-fs div.buttons > div.button.asc');
        this.btnSortZA = this.body.querySelector('div.htmleditor-fs div.buttons > div.button.desc');
        DOM.addClass(this.btnSortAZ, 'pressed');
        (function (me) {
            me.navigator.on('loading', function () {
                me.on_loading();
            });
            me.navigator.on('loaded', function () {
                me.on_loaded();
            });
            me.navigator.on('changed', function () {
                me.on_changed();
            });
            me.navigator.on('error', function (reason) {
                me.on_error(reason || null);
            });
        })(this);
        this._setup_mouse_();
        this._setup_keyboard_();
        this.sorters.asc = function (a, b) {
            var aName, bName;
            if (a.type == b.type) {
                aName = a.name.toLowerCase();
                bName = b.name.toLowerCase();
                return aName == bName ? 0 : (aName > bName ? 1 : -1);
            }
            else {
                return a.type == 1 /* FOLDER */ ? -1 : 1;
            }
        };
        this.sorters.desc = function (a, b) {
            var aName, bName;
            if (a.type == b.type) {
                aName = a.name.toLowerCase();
                bName = b.name.toLowerCase();
                return aName == bName ? 0 : (aName > bName ? -1 : 1);
            }
            else {
                return a.type == 1 /* FOLDER */ ? -1 : 1;
            }
        };
    }
    UI_Dialog_FileBrowser.prototype.on_loading = function () {
        this.overlay.innerHTML = '<span class="loading">Loading...</span>';
        this.address.disabled = true;
        DOM.addClass(this.btnRefresh, 'pressed');
    };
    UI_Dialog_FileBrowser.prototype.setSorter = function (sorterName) {
        if (sorterName == this.sorterName) {
            return;
        }
        if (['asc', 'desc'].indexOf(sorterName) == -1) {
            throw "Invalid sorter name!";
        }
        var buttons = [
            this.btnSortAZ,
            this.btnSortZA
        ], i = 0, len = buttons.length;
        for (i = 0; i < len; i++) {
            DOM.removeClass(buttons[i], 'pressed');
        }
        switch (sorterName) {
            case 'asc':
                DOM.addClass(this.btnSortAZ, 'pressed');
                this.sorterName = sorterName;
                if (this.navigator.lastStatus == 0 /* LOADED */)
                    this.on_loaded();
                break;
            case 'desc':
                DOM.addClass(this.btnSortZA, 'pressed');
                this.sorterName = sorterName;
                if (this.navigator.lastStatus == 0 /* LOADED */)
                    this.on_loaded();
                break;
        }
    };
    UI_Dialog_FileBrowser.prototype.getFSType = function (itemType, itemMime) {
        itemMime = itemMime || '';
        switch (itemType) {
            case 1 /* FOLDER */:
                return 'folder';
                break;
            case 0 /* FILE */:
                switch (true) {
                    case /^image($|\/)/.test(itemMime):
                        return 'picture';
                        break;
                    case /^audio($|\/)/.test(itemMime):
                        return 'audio';
                        break;
                    case /^video($|\/)/.test(itemMime):
                        return 'video';
                        break;
                    default:
                        return 'unknown';
                        break;
                }
                break;
        }
    };
    UI_Dialog_FileBrowser.prototype.on_loaded = function () {
        this.address.disabled = false;
        DOM.removeClass(this.btnRefresh, 'pressed');
        var i = 0, len = this.navigator.items.length, d, im, l;
        this.overlay.innerHTML = '';
        if (this.navigator.items.length) {
            this.navigator.items.sort(this.sorters[this.sorterName]);
            for (i = 0; i < len; i++) {
                d = document.createElement('div');
                DOM.addClass(d, 'fs');
                im = d.appendChild(document.createElement('div'));
                im.className = 'icon mime ' + this.getFSType(this.navigator.items[i].type, this.navigator.items[i].mime);
                l = d.appendChild(document.createElement('label'));
                l.appendChild(document.createTextNode(this.navigator.items[i].name));
                d.setAttribute('fs-index', i);
                this.overlay.appendChild(d);
            }
        }
        else {
            this.overlay.innerHTML = '<span class="empty">There are no items to show in this view</span>';
        }
    };
    UI_Dialog_FileBrowser.prototype.on_changed = function () {
        this.address.disabled = false;
        this.address.value = this.navigator.path;
        this.address.focus();
        this.address.select();
    };
    UI_Dialog_FileBrowser.prototype.on_error = function (reason) {
        if (reason === void 0) { reason = null; }
        this.address.disabled = false;
        DOM.removeClass(this.btnRefresh, 'pressed');
        this.overlay.innerHTML = '';
        var span = document.createElement('span');
        span.className = 'error';
        span.appendChild(document.createTextNode(reason || 'An unknown error occured'));
        this.overlay.appendChild(span);
    };
    UI_Dialog_FileBrowser.prototype._setup_mouse_ = function () {
        (function (me) {
            me.btnRefresh.addEventListener('click', function () {
                if (me.navigator.lastStatus == 0 /* LOADED */) {
                    me.navigator.open(me.navigator.path);
                }
            }, true);
            me.btnSortAZ.addEventListener('click', function () {
                me.setSorter('asc');
            });
            me.btnSortZA.addEventListener('click', function () {
                me.setSorter('desc');
            });
            me.overlay.addEventListener('click', function (evt) {
                var target = evt.target, onLabel = false, onIcon = false, onItem = false, prevSelected = null;
                if (target) {
                    if ((onLabel = target.nodeName.toLowerCase() == 'label') || target.nodeName.toLowerCase() == 'div' && [onItem = DOM.hasClass(target, 'fs'), onIcon = DOM.hasClass(target, 'icon')].indexOf(true) >= 0) {
                        if (onLabel || onIcon) {
                            target = target.parentNode;
                        }
                    }
                    else {
                        prevSelected = me.overlay.querySelector('div.fs.focused');
                        if (prevSelected) {
                            DOM.removeClass(prevSelected, 'focused');
                        }
                        return;
                    }
                }
                else {
                    return;
                }
                prevSelected = me.overlay.querySelector('div.fs.focused');
                if (prevSelected) {
                    DOM.removeClass(prevSelected, 'focused');
                }
                DOM.addClass(target, 'focused');
            }, true);
            me.overlay.addEventListener('dblclick', function (evt) {
                var target = evt.target, onLabel = false, onIcon = false, onItem = false, prevSelected = null;
                if (target) {
                    if ((onLabel = target.nodeName.toLowerCase() == 'label') || target.nodeName.toLowerCase() == 'div' && [onItem = DOM.hasClass(target, 'fs'), onIcon = DOM.hasClass(target, 'icon')].indexOf(true) >= 0) {
                        if (onLabel || onIcon) {
                            target = target.parentNode;
                        }
                    }
                    else {
                        prevSelected = me.overlay.querySelector('div.fs.focused');
                        if (prevSelected) {
                            DOM.removeClass(prevSelected, 'focused');
                        }
                        return;
                    }
                }
                else {
                    return;
                }
                prevSelected = me.overlay.querySelector('div.fs.focused');
                if (prevSelected) {
                    DOM.removeClass(prevSelected, 'focused');
                }
                DOM.addClass(target, 'focused');
                me.on_ok();
            }, true);
            me.btnUp.addEventListener('click', function () {
                if (me.navigator.lastStatus == 0 /* LOADED */) {
                    if (!me.navigator.goUp()) {
                        UI_Dialog_Manager.alert("You are allready at the top level and cannot navigate upper.", function () {
                            me.overlay.focus();
                        }, me.body);
                        return;
                    }
                }
            }, true);
        })(this);
    };
    UI_Dialog_FileBrowser.prototype._setup_keyboard_ = function () {
        (function (me) {
            me.address.addEventListener('keydown', function (evt) {
                if (evt.keyCode == 13) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    if (me.address.value) {
                        me.navigator.open(me.address.value);
                    }
                }
            }, true);
        })(this);
    };
    /*
        
        $args[0] => <string>   mime
        $args[1] => <callback = null> callback

     */
    UI_Dialog_FileBrowser.prototype.setup = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        this.navigator.mimeType = String(args[0]) || 'image';
        this.on_open = args[1] || null;
        this.navigator.open(this.navigator.path);
        return this;
    };
    UI_Dialog_FileBrowser.prototype.on_ok = function () {
        /* Find active item. If item is of type folder, then open the folder.
           If item is of type file, then run the callback and close dialog */
        var item = this.overlay.querySelector('div.fs.focused');
        if (!item) {
            return;
        }
        var index = ~~item.getAttribute('fs-index'), itemURL = null;
        if (!this.navigator.items[index]) {
            UI_Dialog_Manager.alert("The item could not be found in our files collection. This is due to a bug. Operation canceled.", function () {
                this.overlay.focus();
            }, this.body);
            return;
        }
        switch (this.navigator.items[index].type) {
            case 1 /* FOLDER */:
                this.navigator.open(this.navigator.path + this.navigator.items[index].name + '/');
                return;
                break;
            case 0 /* FILE */:
                itemURL = String(this.navigator.items[index].url || '') || null;
                if (!itemURL) {
                    itemURL = window['escape'](this.navigator.path + '/' + this.navigator.items[index].name);
                }
                break;
        }
        this.close();
        if (this.on_open) {
            this.on_open(itemURL);
        }
    };
    UI_Dialog_FileBrowser.prototype.on_cancel = function () {
        this.close();
    };
    return UI_Dialog_FileBrowser;
})(UI_Dialog);
var FS_Navigator = (function (_super) {
    __extends(FS_Navigator, _super);
    function FS_Navigator(mimeType, initialPath) {
        if (mimeType === void 0) { mimeType = 'image'; }
        if (initialPath === void 0) { initialPath = '/'; }
        _super.call(this);
        this.mimeType = null;
        this.path = null;
        this.items = [];
        this.lastStatus = 0 /* LOADED */;
        this.mimeType = mimeType;
        this.path = initialPath;
        (function (me) {
            me.on('loading', function () {
                me.lastStatus = 1 /* LOADING */;
            });
            me.on('loaded', function () {
                me.lastStatus = 0 /* LOADED */;
            });
            me.on('error', function () {
                me.lastStatus = 2 /* ERROR */;
            });
        })(this);
    }
    FS_Navigator.prototype.open = function (path) {
        this.fire('loading');
        this.items = [];
        this.fetchItems(this.mimeType, path);
    };
    /* This is an abstract class. Ulterior implementations should
       implement this method via AJAX calls, JSONP calls, etc.
     */
    FS_Navigator.prototype.fetchItems = function (mime, path) {
        switch (path) {
            case '/':
                this.items = [
                    {
                        "name": "_assets",
                        "mime": "folder",
                        "type": 1 /* FOLDER */
                    }
                ];
                (function (me) {
                    setTimeout(function () {
                        me.path = path;
                        me.fire('loaded');
                        me.fire('changed');
                    }, 10);
                })(this);
                break;
            case '/_assets/':
                switch (true) {
                    case /^image/.test(mime) ? true : false:
                        this.items = [
                            {
                                "name": "pic1.jpg",
                                "mime": "image/jpg",
                                "url": "./_assets/pic1.jpg",
                                "type": 0 /* FILE */
                            },
                            {
                                "name": "pic2.jpg",
                                "mime": "image/jpg",
                                "url": "./_assets/pic2.jpg",
                                "type": 0 /* FILE */
                            }
                        ];
                        break;
                    default:
                        this.items = [];
                        break;
                }
                (function (me) {
                    setTimeout(function () {
                        me.path = path;
                        me.fire('loaded');
                        me.fire('changed');
                    }, 10);
                })(this);
                break;
            default:
                (function (me) {
                    setTimeout(function () {
                        me.fire('error', 'invalid path "' + path + '"');
                    }, 10);
                })(this);
                break;
        }
    };
    FS_Navigator.prototype.toString = function () {
        return this.path;
    };
    FS_Navigator.prototype.goUp = function () {
        if (this.path == '/' || this.path == '') {
            return false;
        }
        else {
            var parts = this.path.replace(/(^[\/\\]+|[\/\\]+$)/g, '').split(/[\/\\]+/);
            if (!parts.length) {
                return false;
            }
            this.open(parts.slice(0, parts.length - 1).join('/') || '/');
            return true;
        }
    };
    FS_Navigator.factory = function (mimeType, initialPath) {
        return new FS_Navigator(mimeType, initialPath);
    };
    return FS_Navigator;
})(Events);
/// <reference path="Types.ts" />
/// <reference path="Events.ts" />
/// <reference path="Throttler.ts" />
/// <reference path="DOM.ts" />
/// <reference path="Helper.ts" />
