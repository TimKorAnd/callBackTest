function loadScript(src,callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script)
    document.head.append(script);
}

loadScript('./loadedScript.js', (script) => {
    newFunction(script.src)
    loadScript('./loadedScript2.js', () => {
        newFunction2('kuku2')
    })
})
