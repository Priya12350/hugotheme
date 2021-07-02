import React from 'react';
import {markdownify} from '../utils';

export default class page extends React.component{
    render(){
        const title = _.get(page,'title');
        const markdowncontent= _.get(page, 'markdown_content');

        return( 
        <article className="page py-5 py-sm-6">
            <div className="container container--medium">
                {title && <header className="page__header"><h1 className="page__title">{title}</h1></header>}
                {markdownContent && <div className="page__body text-block">{markdownify(markdownContent)}</div>}
            </div>
        </article>

        );
    }
}