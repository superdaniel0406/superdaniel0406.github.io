import{U as x}from"./index-BUFvi4nX.js";const v=.5;class m{init(){}isEnabled(a){return!x()&&!a.destroyed&&a.container.actualOptions.interactivity.events.onHover.parallax.enable}move(a){const e=a.container,y=e.actualOptions,n=y.interactivity.events.onHover.parallax;if(x()||!n.enable)return;const p=n.force,o=e.interactivity.mouse.position;if(!o)return;const s=e.canvas.size,i={x:s.width*v,y:s.height*v},r=n.smooth,c=a.getRadius()/p,l={x:(o.x-i.x)*c,y:(o.y-i.y)*c},{offset:t}=a;t.x+=(l.x-t.x)/r,t.y+=(l.y-t.y)/r}}export{m as ParallaxMover};
