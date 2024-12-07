function run(){
  let eoinput = document.getElementById("inputuser").value
  let far = eoinput*0.62137 +" Miles"
      console.log(far)
  document.getElementById("output").innerHTML=far
}