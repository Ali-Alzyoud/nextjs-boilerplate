export const getIcon = (iconName) => {
    if(iconName === 'heart') {
  
      return (
        <svg id="i-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
        </svg>
        )
      
    } else if(iconName === 'camera') {
      return (
        <svg id="i-camera" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M2 8 L 9 8 12 4 20 4 23 8 30 8 30 26 2 26 Z" />
          <circle cx="16" cy="16" r="5" />
        </svg>
      )
    }  else if(iconName === 'gift') {
      return (
        <svg id="i-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
        </svg>
        )
  
    } else if(iconName === 'moon') {
      return (
      <svg id="i-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" />
      </svg>
      )
    }
  
  }
  