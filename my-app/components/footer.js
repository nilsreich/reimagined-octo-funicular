import React from 'react';
import { Remarkable } from 'remarkable'
import rkatex from 'remarkable-katex';

class MarkdownEditor extends React.Component {



  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.md.use(rkatex);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: `# Polynomdivision
  Gegeben ist folgende Funktion $f(x)=3x^3-2x-1$.
    Durch profanes Ausprobieren bekommen wir eine Nullstelle der Funktion.
    
  $f(1)=3-2-1=0$
    
  Die weiteren Nullstellen erlangen wir mit Hilfe der Polynomdivision, indem wir den kompletten Funktionsterm durch die gefundene Nullstelle teilen:
    
  $\\,\\,\\,\\,\\,(3x^3-0x^2-2x-1):(x-1)=3x^2+3x+1$
    
  $-(3x^3-3x^2)$
    
  $\\qquad\\quad\\quad3x^2-2x$
    
  $\\qquad\\quad-(3x^2-3x)$
    
  $\\qquad\\qquad\\qquad\\quad x-1$
    
  $\\qquad\\qquad\\qquad -(x-1)$
    
  $\\qquad\\qquad\\qquad\\qquad\\quad 0$
    '` };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }
  render() {
    return (
      <div className="flex h-full overflow-hidden bg-white w-full">
        <textarea
          className=' bg-white w-1/2 resize-none p-1 focus:outline-none'
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <div
          className="overflow-auto prose bg-white w-1/2 border-l-2 p-1"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

export default MarkdownEditor;

