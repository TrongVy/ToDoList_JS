function getElm(id) {
  return document.getElementById(id);
}
const list = new ListActive();

function renderElm(arr) {
  ;
  let content = '';
  arr.map((item, index) => {
    content += `
        <li>${index}:${item.name}
              <div>
                <button onclick=" hoanThanh(${index})">
                   <i class="fas fa-check"></i>
                </button>
                <button onclick=" xoa(${index})">
                    <i class="fas fa-trash"></i>
                </button>       
              </div>
        </li>
      `
  })
  getElm('todolist').innerHTML = content;
}

addItem.addEventListener('click', () => {

  const name = getElm('newTask').value;
  const active = new Activity(name);
  list.addActive(active);
  renderElm(list.arr)
  setItem(list.arr);
})
function sapXepTangDan() {
  // console.log(list.arr);
  let z = list.arr.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  renderElm(z);
  setItem(z);
}
function sapXepGiamDan() {

  let z = list.arr.sort((a, b) =>
    a.name.localeCompare(b.name) * (-1)
  );
  renderElm(z);
  setItem(z);
}
function xoa(id) {
  console.log(id)
  list.arr.splice(id, 1);
  renderElm(list.arr);
  setItem(list.arr);
}
//new arr chua arr cong viec hoan thanh
let newArr = [];

function hoanThanh(id) {
  newArr.push(list.arr[id].name);
  renderElmHT(newArr);
  list.arr.splice(id, 1);
  renderElm(list.arr);
  setItem(list.arr);
}
function xoaHT(id) {
  newArr.splice(id, 1);
  renderElmHT(newArr);
}
function renderElmHT(arr) {
  let content = '';
  arr.map((item, index) => {
    content += `
   <li>${index}:${item}
   <div>
     <button onclick=" xoaHT(${index})">
         <i class="fas fa-trash"></i>
     </button>       
   </div>
</li>
    `
  })
  getElm('completed').innerHTML = content;

}
//set item
function setItem(arr) {
  return localStorage.setItem('DSHD', JSON.stringify(arr))
}
// get Item 
function getLocal() {
  if (localStorage.getItem('DSHD')) {
    list.arr = JSON.parse(localStorage.getItem('DSHD'));
    renderElm(list.arr);
  }
}
getLocal();
