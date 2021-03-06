class HTML_OrderedList extends TNode_Element {	

	public isSelectionPaintingDisabled: boolean = true;

	constructor() {
		super();
		this.nodeName = 'ol';
		this.style.display('block');

		TStyle_Browser_Calculator.applyDefaultStyles( this, 'ol', [
			'paddingTop',
			'paddingBottom',
			'paddingLeft',
			'paddingRight',
			'marginTop',
			'marginBottom',
			'marginLeft',
			'marginRight'
		] );
	}

	public breakBeforeOption( option: HTML_ListItem ): TListBreakResult {
		var i: number = 0,
		    len: number = option.siblingIndex - 1,
		    ol: HTML_OrderedList;

		if ( option.siblingIndex == 0 || this.childNodes.length == 1 ) {
			return TListBreakResult.NONE_BEFORE;
		}

		ol = <HTML_OrderedList>this.clone();

		this.parentNode.appendChild( ol, this.siblingIndex );

		for ( i=0; i<=len; i++ ) {
			ol.appendChild( this.childNodes[0] );
		}

		return TListBreakResult.BEFORE;
	}

	public breakAfterOption( option: HTML_ListItem ): TListBreakResult {
		var i: number = 0,
		    len: number = this.childNodes.length,
		    ol: HTML_OrderedList;

		if ( option.siblingIndex == this.childNodes.length - 1 || this.childNodes.length == 1 ) {
			return TListBreakResult.NONE_AFTER;
		}

		ol = <HTML_OrderedList>this.clone();

		this.parentNode.appendChild( ol, this.siblingIndex + 1 );

		for ( i=option.siblingIndex + 1; i<len; i++ ) {
			ol.appendChild( this.childNodes[ option.siblingIndex + 1], 0 );
		}

		return TListBreakResult.AFTER;
	}

	// lists don't have tabstops, only list items.
	public tabStop( value: number = null ): number {
		return 0;
	}
	
}