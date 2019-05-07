import React from 'react'

const ExtractId = (href) => {
    const regex = /(?<=posts\/).+/;
    let str = href;
    let endOfPath = str.search(regex);
    let id = str.substr(endOfPath);
    return id
}

export default ExtractId;