function LimitDrag(id) {
    Drag.call(this,id);
}
for (var i in Drag.prototype){
    LimitDrag.prototype[i] = Drag.prototype[i]
}

LimitDrag.prototype.fnMove = function (ev) {
        oEvent = event || ev;
        var l = oEvent.clientX - this.disX;
        var t =  oEvent.clientY - this.disY;

        if(l<0)
        {
            l = 0;
        }
        else if (l>document.documentElement.scrollWidth - this.oDiv.offsetWidth){
            l = document.documentElement.scrollWidth - this.oDiv.offsetWidth;
        }

        if(t<0){
            t = 0;
        }
        else if(t>document.documentElement.scrollHeight - this.oDiv.offsetHeight){
            t = document.documentElement.scrollHeight - this.oDiv.offsetHeight;
        }
        this.oDiv.style.left= l +'px';
        this.oDiv.style.top = t +'px';

    };