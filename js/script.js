(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
        key: "AIzaSyDIWGeBWMq1N3gGBBltdTBS1D953KC2S0o",
        v: "weekly",
        libraries: "marker",
      });

async function myMap() {
    const { Map } = await google.maps.importLibrary("maps");

    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("google_map"), {
      center: { lat: 41.8731, lng: -87.6277 },
      zoom: 10.5,
      mapId: "4504f8b37365c3d0",
    });
    
    const harrison = new AdvancedMarkerElement({
      map,
      position: { lat: 41.87432113640615, lng: -87.62754767358881},
      title: "Harrison Station",
    });
    
    const fullerton = new AdvancedMarkerElement({
      map,
      position: { lat: 41.92538174821182, lng: -87.65275094290494},
      title: "Fullerton Station",
    });
    
    const bryn_mawr = new AdvancedMarkerElement({
      map,
      position: { lat: 41.98376034615108, lng: -87.65887334299748},
      title: "Bryn Mawr Station",
    });

    const roosevelt = new AdvancedMarkerElement({
      map,
      position: { lat: 41.86774879119699, lng: -87.62667219221105},
      title: "Roosevelt Station",
    });
  }
function init(){

  var button = document.getElementById("entrybutton");

  button.addEventListener("click", questionBox);

  function questionBox() {
    alert("If you have questions, contact me at:\nljordan5@hawk.illinoistech.edu");
  }

}
myMap();


window.addEventListener('load', init);