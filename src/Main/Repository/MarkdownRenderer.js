import React from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

function MarkdownRenderer(props) {

    return (
        <div style={{backgroundColor:"#616161", color:"white",}}>
            <ReactMarkdown children={props.source} remarkPlugins={[remarkGfm]} >
                {/*{props.source}*/}
                </ReactMarkdown>
        </div>
    );
}

export default MarkdownRenderer;