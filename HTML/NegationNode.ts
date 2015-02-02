class HTML_NegationNode extends TNode_Element {
	
	public isDefragmentable : boolean = true;
	public isNegation       : boolean = true;
	public nodeClass        : TNode_Class = TNode_Class.INLINE;


	constructor( nodeName: string ) {
		super();
		this.nodeName = '!'+nodeName;
		this.style.display('inline');
		switch( nodeName ) {
			case 'b':
				this.style.fontWeight( 'normal' );
				break;
			case 'i':
				this.style.fontStyle( 'normal' );
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
}