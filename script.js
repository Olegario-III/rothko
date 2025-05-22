const label1 = document.getElementById('label1');
    const label2 = document.getElementById('label2');
    const label3 = document.getElementById('label3');
    const label4 = document.getElementById('label4');
    const label1Txt = document.getElementById('label1-txt').value;
    const label2Txt = document.getElementById('label2-txt').value;
    const label3Txt = document.getElementById('label3-txt').value;
    const label4Txt = document.getElementById('label4-txt').value;
    const frameBtn = document.getElementById('frame-btn');
    const canvasBtn = document.getElementById('canvas-btn');
    const oneBtn = document.getElementById('one-btn');
    const twoBtn = document.getElementById('two-btn');
    const threeBtn = document.getElementById('three-btn');
    const resetBtn = document.getElementById('reset-btn');
    const frame = document.getElementById('frame');
    const canvas = document.getElementById('canvas');
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');

    const frameFunction = () => {
      document.getElementById('label1-txt').disabled = false;
      document.getElementById('label2-txt').disabled = false;
      document.getElementById('label3-txt').disabled = false;
      document.getElementById('label4-txt').disabled = false;
      label1.textContent = "Frame Border (px)";
      label2.textContent = "Frame Padding (px)";
      label3.textContent = "Frame Margin (px)";
      label4.textContent = "Frame Radius (%)";

      document.getElementById('label1-txt').addEventListener("input", e => {
        frame.style.borderWidth = `${e.target.value}px`;
      });
      document.getElementById('label2-txt').addEventListener("input", e => {
        frame.style.padding = `${e.target.value}px`;
      });
      document.getElementById('label3-txt').addEventListener("input", e => {
        frame.style.margin = `${e.target.value}px`;
      });
      document.getElementById('label4-txt').addEventListener("input", e => {
        frame.style.borderRadius = `${e.target.value}%`;
      });

    };

    const canvasfunction = () =>{
      document.getElementById('label1-txt').disabled = false;
      document.getElementById('label2-txt').disabled = false;
      document.getElementById('label3-txt').disabled = false;
      document.getElementById('label4-txt').disabled = false;
      label1.textContent = "Canvas Width (px)";
      label2.textContent = "Canvas Height (px)";
      label3.textContent = "Canvas Margin (px)";
      label4.textContent = "Canvas Radius (%)";
      document.getElementById('label1-txt').addEventListener("input", e => {
        canvas.style.width = `${e.target.value}px`;
      });
      document.getElementById('label2-txt').addEventListener("input", e => {
        canvas.style.height = `${e.target.value}px`;
      });
      document.getElementById('label3-txt').addEventListener("input", e => {
        canvas.style.margin = `${e.target.value}px`;
      });
      document.getElementById('label4-txt').addEventListener("input", e => {
        canvas.style.borderRadius = `${e.target.value}%`;
      });
    };

    const onefunction = () =>{
      document.getElementById('label1-txt').disabled = false;
      document.getElementById('label2-txt').disabled = false;
      document.getElementById('label3-txt').disabled = false;
      document.getElementById('label4-txt').disabled = false;
      label1.textContent = "Upper Box Width (px)";
      label2.textContent = "Upper Box Height (px)";
      label3.textContent = "Upper Box Margin (px)";
      label4.textContent = "Upper Box Radius (%)";
      document.getElementById('label1-txt').addEventListener("input", e => {
        one.style.width = `${e.target.value}px`;
      });
      document.getElementById('label2-txt').addEventListener("input", e => {
        one.style.height = `${e.target.value}px`;
      });
      document.getElementById('label3-txt').addEventListener("input", e => {
        one.style.margin = `${e.target.value}px`;
      });
      document.getElementById('label4-txt').addEventListener("input", e => {
        one.style.borderRadius = `${e.target.value}%`;
      });
    };

    const twofunction = () =>{
      document.getElementById('label1-txt').disabled = false;
      document.getElementById('label2-txt').disabled = false;
      document.getElementById('label3-txt').disabled = false;
      document.getElementById('label4-txt').disabled = false;
      label1.textContent = "Middle Box Width (px)";
      label2.textContent = "Middle Box Height (px)";
      label3.textContent = "Middle Box Margin (px)";
      label4.textContent = "Middle Box Radius (%)";
      document.getElementById('label1-txt').addEventListener("input", e => {
        two.style.width = `${e.target.value}px`;
      });
      document.getElementById('label2-txt').addEventListener("input", e => {
        two.style.height = `${e.target.value}px`;
      });
      document.getElementById('label3-txt').addEventListener("input", e => {
        two.style.margin = `${e.target.value}px`;
      });
      document.getElementById('label4-txt').addEventListener("input", e => {
        two.style.borderRadius = `${e.target.value}%`;
      });
    };
    const threefunction = () =>{
      document.getElementById('label1-txt').disabled = false;
      document.getElementById('label2-txt').disabled = false;
      document.getElementById('label3-txt').disabled = false;
      document.getElementById('label4-txt').disabled = false;
      label1.textContent = "Lower Box Width (px)";
      label2.textContent = "Lower Box Height (px)";
      label3.textContent = "Lower Box Margin (px)";
      label4.textContent = "Lower Box Radius (%)";
      document.getElementById('label1-txt').addEventListener("input", e => {
        three.style.width = `${e.target.value}px`;
      });
      document.getElementById('label2-txt').addEventListener("input", e => {
        three.style.height = `${e.target.value}px`;
      });
      document.getElementById('label3-txt').addEventListener("input", e => {
        three.style.margin = `${e.target.value}px`;
      });
      document.getElementById('label4-txt').addEventListener("input", e => {
        three.style.borderRadius = `${e.target.value}%`;
      });
    };

    frameBtn.addEventListener("click", frameFunction);
    canvasBtn.addEventListener("click", canvasfunction);
    oneBtn.addEventListener("click", onefunction);
    twoBtn.addEventListener("click", twofunction);
    threeBtn.addEventListener("click", threefunction);
    resetBtn.addEventListener("click", ()=>{
      location.reload();
    });