(() => {
    let e = !1;

    function t() {
        document.removeEventListener("click", t), document.removeEventListener("keydown", t), document.removeEventListener("touchstart", t)
    }
    document.addEventListener("click", t), document.addEventListener("keydown", t), document.addEventListener("touchstart", t);
    class a {
        constructor(e) {
            this.video = e
        }
        Space(e) {
            let t = this.video;
            "textarea" === e.target.type || "input" === e.target.type || e.target.isContentEditable || (e.preventDefault(), t.paused ? t.play() : t.pause())
        }
        ArrowLeft() {
            document.querySelector(".bmpui-ui-rewindbutton").click()
        }
        ArrowRight() {
            document.querySelector(".bmpui-ui-forwardbutton").click()
        }
        ArrowUp(e) {
            let t = this.video;
            if (e.preventDefault(), t.volume < 1) {
                let e = (t.volume + .1).toFixed(1);
                t.volume = e, localStorage.setItem("volume", e), t.muted = !1
            }
        }
        ArrowDown(e) {
            let t = this.video;
            if (e.preventDefault(), t.volume > 0) {
                let e = (t.volume - .1).toFixed(1);
                t.volume = e, localStorage.setItem("volume", e), t.muted = !1
            } else t.muted = !0
        }
        BracketLeft() {
            let e = this.video,
                t = (e.playbackRate - .1).toFixed(1);
            t >= 0 && (e.playbackRate = t, o.innerText = t + "x", localStorage.setItem("playbackSpeed", e.playbackRate), o.classList.contains("hidden") && (o.classList.remove("hidden"), setTimeout(() => {
                o.classList.add("hidden")
            }, 1e3)))
        }
        BracketRight() {
            let e = this.video,
                t = (e.playbackRate + .1).toFixed(1);
            t <= 16 && (e.playbackRate = t, o.innerText = t + "x", localStorage.setItem("playbackSpeed", e.playbackRate), o.classList.contains("hidden") && (o.classList.remove("hidden"), setTimeout(() => {
                o.classList.add("hidden")
            }, 1e3)))
        }
        KeyD(e) {
            document.body.classList.add("dark")
        }
        KeyL(e) {
            document.body.classList.remove("dark")
        }
        KeyI(e) {
            document.querySelector(".bmpui-ui-piptogglebutton").click()
        }
        KeyF() {
            document.querySelector(".bmpui-ui-fullscreentogglebutton").click()
        }
        F11(e) {
            e.preventDefault()
            document.querySelector(".bmpui-ui-fullscreentogglebutton").click()
        }
        KeyM() {
            let e = this.video;
            e.muted = !e.muted
        }
    }
    document.createElement("div").classList.add("btn-container"), document.addEventListener("keydown", e => {
        let t = document.querySelector("video");
        if ("textarea" === e.target.type || "input" === e.target.type || e.target.isContentEditable || ("Space" === e.code && e.preventDefault(), !t)) return;
        let l = new a(t);
        l[e.code]?.(e, t)
    });
    let l = null,
        o = null,
        n = document.getElementById("root");
    new MutationObserver(() => {
        let t = document.querySelector("video");
        if (null !== l && t === l) return;
        l = t;
        let a = document.querySelector(".menu_sidebar:has(li.ant-menu-item)");
        document.querySelector("#play");
        let n = document.querySelector(".bitmovinplayer-container");
        console.log({
            playerContainer: n
        }), n && ((o = document.createElement("span")).className = "playback-speed hidden", n.append(o)), a && !e && (a.addEventListener("click", e => {
            if (e.target.closest("li.ant-menu-item")) {
                let e = setInterval(() => {
                    let t = document.querySelector("#play");
                    t && t?.click();
                    let a = document.querySelector("video"),
                        l = document.querySelector(".show-v-a-a-images")?.lastChild;
                    (a && !a.paused || l && l.className.includes("scaffold")) && clearInterval(e)
                }, 100)
            }
        }), e = !0), l && (l.addEventListener("play", function () {
            ! function (e) {
                let t = localStorage.getItem("playbackSpeed"),
                    a = localStorage.getItem("volume");
                t && (e.playbackRate = t, o.innerText = t + "x"), a && (e.volume = a)
            }(l)
        }), l.addEventListener("volumechange", e => {
            localStorage.setItem("volume", l.volume)
        }), l.addEventListener("ratechange", () => {
            localStorage.setItem("playbackSpeed", l.playbackRate)
        }))
    }).observe(n, {
        childList: !0,
        subtree: !0
    })
})();