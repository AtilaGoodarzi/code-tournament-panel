let selectedRoomId = null;

function openDeleteModal(roomId) {
  selectedRoomId = roomId;
  const modal = new bootstrap.Modal(document.getElementById('myModal'));
  modal.show();
}

function deleteRoom() {
  alert("روم با شناسه " + selectedRoomId + " حذف شد.");
  // کد حذف روم از دیتابیس یا DOM اینجا قرار بگیره
  selectedRoomId = null;
  bootstrap.Modal.getInstance(document.getElementById('myModal')).hide();
}

function changeStatus(roomId) {
  const confirmed = confirm("آیا مطمئن هستید که می‌خواهید وضعیت روم را به «تمام شده» تغییر دهید . ?");
  if (confirmed) {
    document.getElementById("status-" + roomId).innerText = "تمام شده";
    document.getElementById("uploadSection-" + roomId).classList.remove("d-none");
  }
}


function filterTavle() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let table = document.getElementById('userTable');
  let rows = table.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName('td');
    let match = false;

    for (let j = 1; j < cells.length; j++) {
      if (cells[j].textContent.toLowerCase().includes(input)) {
        match = true;
      break;
    }
  }

  if (match) {
    rows[i].style.display = "";
  } else {
    rows[i].style.display = "none";
  }

}

}
