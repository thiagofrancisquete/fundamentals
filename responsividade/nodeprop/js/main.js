function show(){
  if(document.querySelector('.btn-hide').style.display == 'none'){
    document.querySelector('.btn-menu').style.display == 'block';
  } return false;
}

function hide(){
  if( document.querySelector('.btn-menu').style.display == 'block'){
    document.querySelector('.btn-hide').style.display == 'none';
  } return false;
}