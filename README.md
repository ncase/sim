Made by [Nicky Case](http://ncase.me)

Dedicated to the public domain with [Creative Commons Zero](https://creativecommons.org/publicdomain/zero/1.0/)! I'm giving away all my art/code/words, so that you teachers, scientists, hobbyists, activists, and emoji-lovers can use them however you like! This is for you. 💜

How To Run This On Your Own Computertron
---

Yeah basically just download this github repository, and host it on some local server. I use the minimalist [http-server](https://www.npmjs.com/package/http-server), but you can also use [MAMP](https://www.mamp.info/en/). (*Simulating The World* is just a bunch of static files, but it needs to be on a server because of some weird browser security issues with XMLHttpRequests)

### Saving your own sims locally:

1. Get it running on your own computertron (see above). For the sake of this example, let's assume it's running on `http://localhost:8080/`. (which it will by default, if you use http-server)
2. Go to `http://localhost:8080/`, and make your own sim!
3. Click "export model". Your simulation's data should pop up in a new tab.
4. Save it locally to `[your local folder]/models`, as `[your sim name].json`. (NOTE: the ".json" extension is important!)
5. Finally, to see your own sim in action, go to `http://localhost:8080/?s=[your sim name]`! Voilà! And you can keep editing and exporting from there, just copy-paste the new data to `[your sim name].json`.

Other Peeps' Stuff I Used
---

They're all open source!

**Code Stuff:**

* [MinPubSub](https://github.com/daniellmb/MinPubSub) - A tiny publish/subscribe library.
* [Perfect Scrollbar](http://noraesae.github.io/perfect-scrollbar/) - Custom scrollbars. Mostly because Mac OS X Lion is silly and hides all the scrollbars because 'minimalism'.
* [requestAnimationFrame shim](https://gist.github.com/paulirish/1579671) - A requestAnimationFrame polyfill.
* [reqwest](https://github.com/ded/reqwest) - A tiny XMLHttpRequest library.
* [Platform.js](https://github.com/bestiejs/platform.js) - To test browser/OS, because there is no good emoji feature detection arrrgghhhhhhhh

**Font Stuff:**

* [Sniglet](https://www.theleagueofmoveabletype.com/sniglet) - For the title splash.
* [OpenSansEmoji](https://github.com/MorbZ/OpenSansEmoji) - Fallback font if your browser doesn't support emoji.


A Narcisstic List of Press This Thing Got
---

* **Jan 8th, 2016:** [KillScreen](https://killscreen.com/articles/the-worlds-most-complex-problems-now-in-emoji/)
* **Jan 7th, 2016:** [FlowingData](http://flowingdata.com/2016/01/07/simulate-the-world-as-an-emoji-system-of-rules/)
* **Jan 5th, 2016:** [FastCoDesign](https://www.fastcodesign.com/3055079/infographic-of-the-day/how-complex-systems-and-chaos-theory-work-according-to-emoji)
* **Dec 2nd, 2015:** [KillScreen](https://killscreen.com/articles/replicate-the-worlds-most-complex-systems-via-emoji) (this was written up for my prototype, before the final thing was even done)





