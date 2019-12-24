import { Component, OnInit, Input } from '@angular/core';
import { Parser, HtmlRenderer } from 'commonmark';

@Component({
	selector: 'app-markdown-text',
	templateUrl: './markdown-text.component.html',
	styleUrls: ['./markdown-text.component.css']
})
export class MarkdownTextComponent implements OnInit {
	@Input()
	mdContent: string = "";

	htmlContent: string = "";
	reader: Parser;
	writer: HtmlRenderer;
	constructor() {
	}

	ngOnInit() {
		console.log(this.mdContent)
		this.reader = new Parser();
		this.writer = new HtmlRenderer();
		this.htmlContent = this.writer.render(this.reader.parse(this.mdContent));
	}

}
