import React from 'react';
import {useSelector} from "react-redux";
import styles from './EachRepo.module.css';
import {useParams} from "react-router-dom";
import {GetRepoReadeMe} from "../../API/getRepoReadeMe";
import MarkdownRenderer from "./MarkdownRenderer";

function EachRepo(props) {
    const {repoName} = useParams();
    GetRepoReadeMe(repoName);

    const Readme = useSelector((state) => state.repo.readme);

    console.log(Readme);

    let Base64={
        _keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        decode:function(e) {
            let t="";
            let n,r,i;
            let s,o,u,a;
            let f=0;
            if(e !== undefined){
                e = e.replace(/[^A-Za-z0-9+/=]/g,"");}
            else e = "";

            while (f<e.length) {
                s=this._keyStr.indexOf(e.charAt(f++));
                o=this._keyStr.indexOf(e.charAt(f++));
                u=this._keyStr.indexOf(e.charAt(f++));
                a=this._keyStr.indexOf(e.charAt(f++));
                n=s<<2|o>>4;
                r=(o&15)<<4|u>>2;
                i=(u&3)<<6|a;
                t=t+String.fromCharCode(n);

                if (u!=64) {
                    t=t+String.fromCharCode(r);
                }

                if (a!=64) {
                    t=t+String.fromCharCode(i);
                }
            }

            t=Base64._utf8_decode(t);

            return t;
        },
        _utf8_encode:function(e) {
            e=e.replace(/rn/g,"n");
            let t="";

            for (let n=0;n<e.length;n++) {
                let r=e.charCodeAt(n);

                if (r<128) {
                    t+=String.fromCharCode(r);
                } else if(r>127&&r<2048) {
                    // eslint-disable-next-line no-mixed-operators
                    t+=String.fromCharCode(r>>6|192);
                    t+=String.fromCharCode(r&63|128);
                } else {
                    t+=String.fromCharCode(r>>12|224);
                    t+=String.fromCharCode(r>>6&63|128);
                    t+=String.fromCharCode(r&63|128);
                }
            }

            return t;
        },
        _utf8_decode:function(e) {
            let t="";
            let n=0;
            let c1 = 0;
            let c2 = 0;
            let c3 = 0;
            let r= 0;

            while (n<e.length) {
                r=e.charCodeAt(n);
                if (r<128) {
                    t+=String.fromCharCode(r);
                    n++;
                } else if (r>191&&r<224) {
                    c2=e.charCodeAt(n+1);
                    t+=String.fromCharCode((r&31)<<6|c2&63);
                    n+=2;
                } else {
                    c2=e.charCodeAt(n+1);
                    c3=e.charCodeAt(n+2);
                    t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);
                    n+=3;
                }
            }
            return t;
        }
    }

    return (
        <>
            <div className={styles.Container}>
                <div className={styles.RepoName}> {repoName} </div>
                <div className={styles.readMeTitle}> ReadMe </div>
                {/*<div className={styles.readMeContent}> {(Readme.length === 0) ? "nothing" :(atob(Readme.content))}</div>*/}
                {/*{atob(Readme)}*/}
                <MarkdownRenderer
                    source={Base64.decode(Readme)}
                />

            </div>
        </>
    );
}

export default EachRepo;