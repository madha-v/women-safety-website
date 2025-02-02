function showUserLocation() 
{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          alert(`Your location is: Latitude ${latitude}, Longitude ${longitude}`);
        },
        () => {
          alert('Unable to fetch location. Please enable GPS or check permissions.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }
  

  function confirmSend() {
    return confirm('Are you sure you want to send this message?');
  }

// function scrollToSection(sectionId) {
//     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
//   }
  