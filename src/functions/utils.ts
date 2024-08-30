

export function isMobileDevice(): boolean {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    }
    return false;
  }
  
  export function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }
  