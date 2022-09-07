let count=0
const value=document.getElementById('value')
const btns=document.querySelectorAll('.btn').forEach((btn)=>{
btn.addEventListener('click',(e)=>{
  const styles=e.target.classList
  if (styles.contains('decrease')) {
    count--
  } else if(styles.contains('increase')){
    count++
  }else{
    count=0
  }
if (count>0) {
  value.style.color='green'
} else if(count<0) {
  value.style.color='red'
}else{
  value.style.color='black'
}
value.textContent=count
})
})
