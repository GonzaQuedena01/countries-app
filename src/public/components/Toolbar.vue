<script>
export default {
  name: "Toolbar"
}
</script>

<template>
  <nav class="nav bg-sky-700">
    <div class="nav__container w-[90%] mx-auto h-[70px] grid grid-cols-[max-content_max-content]
      justify-between items-center overflow-hidden">

      <span class="nav__title text-xl font-bold text-white">
      Countries App
      </span>

      <a href="#menu" class="nav__menu">
        <img src="../../assets/img/menu.svg" class="nav__icon" alt="menu-icon"/>
      </a>

      <a href="#" class="nav__menu nav__menu--second">
        <img src="../../assets/img/close.svg" class="nav__icon" alt="close-icon"/>
      </a>

      <ul class="dropdown bg-sky-700 absolute right-0 top-0 bottom-0 w-[65%] max-w-[300px]
        p-4 flex gap-6 items-center" id="menu">

        <li class="dropdown__list">
          <router-link to="/" class="dropdown__link">
            <span class="dropdown__span">Home</span>
          </router-link>
        </li>
      </ul>

    </div>
  </nav>
</template>

<style scoped>

.nav {
  --img1: scale(1);
  --img2: scale(0);
}

.nav:has( .dropdown:target ) {
  --img1: scale(0);
  --img2: scale(1);
  --clip: inset(0 0 0 0);
}

.nav__container {
  grid-template-areas: "title img";
}

.nav__title {
  grid-area: title;
}

.nav__icon {
  width: 30px;
  display: block;
}

.nav__menu {
  grid-area: img;
  z-index: 10;
  transition: all .3s;
  transform: var(--img1);
}

.nav__menu--second {
  transform: var(--img2);
}

.dropdown {
  clip-path: var(--clip, inset(0 0 0 100%));
  transition: clip-path .5s;
}

.dropdown__list {
  list-style: none;
}

.dropdown__link {
  display: flex;
  gap: .6rem;
  align-items: center;

  padding: 1em .7em;
  text-decoration: none;
  color: rgb(184, 187, 191);
}

.dropdown__span {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 500;
}

</style>