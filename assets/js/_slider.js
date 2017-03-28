  slider = document.getElementById('slider')
  // Create a true array from the node list
  const monthsArr = [].slice.call(document.querySelectorAll(".month"))
  // Target the <ul> for delegating events to the <li> tags
  const monthsUl = document.querySelector(".range-labels")

  slider.addEventListener('change', activateLabel)
  monthsUl.addEventListener('click', changeSliderValue)

  // Check to see if any labels are already active and if so, deactivate them
  function deactivatePrevious() {
    if (document.querySelector('.active')) {
      let prevActive = document.querySelector('.active');
      prevActive.classList.remove('active');
    }
  }

  // Activate the label that matches the slider's value
  function activateLabel(el) {
    deactivatePrevious();
    monthsArr.map((el) => {
      if (parseInt(monthsArr.indexOf(el) + 1) === parseInt(slider.value)) {
        el.classList.add('active');
      }
    })
  }

  // Update the slider value when a label is activated
  function changeSliderValue(e) {
    deactivatePrevious();
    if (e.target && e.target.nodeName === "LI") {
      monthsArr.map((el) => {
        if (e.target === el) {
          slider.value = monthsArr.indexOf(el) + 1;
          console.log(slider.value);
          el.classList.add('active');
          // focus the slider for better accessibility
          slider.focus();

          createData();
        }
      })
    }
  }
