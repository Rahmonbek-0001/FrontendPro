function showToast(type, message) {
    // Toast yaratish
    var toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span>${message}</span>
      <span class="close-btn" onclick="this.parentElement.remove()">×</span>
    `;

    // Toastni sahifaga qo'shish
    document.body.appendChild(toast);

    // Toastni ko'rsatish
    setTimeout(() => {
      toast.classList.add("show");
    }, 100);

    // 3 soniyadan keyin avtomatik yo'q qilish
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }