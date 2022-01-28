const big = document.querySelector(".big-circle");
const little = document.querySelector(".little-circle");
const photo = document.querySelector(".photo");

document.body.onmousemove = ev => {
    const prct = ev.clientX / document.body.clientWidth;
    big.style["transform"] = `translateX(${prct * -80}px)`;
    photo.style["transform"] = `translateX(${prct * 50}px) translateY(36px)`;
    little.style["transform"] = `translateX(${prct * 100}px)`;
}