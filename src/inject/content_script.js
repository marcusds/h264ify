/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 erkserkserks
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
 
document.addEventListener('DOMContentLoaded', function() {
	var videos = document.getElementsByTagName('video');
	if(videos.length > 0) {
		var videoLength = videos.length, i = 0;
		for(i = 0; i < videoLength; i++) {
			var sources = videos[i].getElementsByTagName('source');
			var sourcesLength = sources.length, i2 = 0;
			for(i2 = 0; i2 < sourcesLength; i2++) {
				if(typeof sources[i2].type !== 'string') {
					continue;
				}
				if(sources[i2].type === 'video/mp4') {
					videos[i].src = sources[i2].src;
				}
			}
		}
	}
}, false);
 
var injectScript = document.createElement('script');
injectScript.src = chrome.extension.getURL('src/inject/inject.js');
injectScript.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(injectScript);