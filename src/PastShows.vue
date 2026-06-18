<script setup>
import pastShowsData from '@/content/past-shows.md'
</script>

<template>
  <div id="app" class="main-bg">
    <nav class="navbar">
      <div class="navbar-inner">
        <ul>
          <li><a href="/">&larr; Back to Home</a></li>
          <li><a href="/#shows">Upcoming Shows</a></li>
        </ul>
      </div>
    </nav>

    <section id="past-shows" class="section">
      <h2 class="heading">Past Shows <span class="font-fallback">/</span> Events</h2>
      <img
        v-if="pastShowsData.frontmatter.image"
        :src="`/images/${pastShowsData.frontmatter.image}`"
        :alt="pastShowsData.frontmatter.imageAlt"
        class="section-img"
      />
      <ul class="shows-list">
        <li v-for="(show, index) in pastShowsData.frontmatter.shows" :key="index">
          <span class="secondary">{{ show.date }}</span> -
          <a v-if="show.ticketLink" :href="show.ticketLink" target="_blank">{{ show.title }}</a>
          <span v-else>{{ show.title }}</span>
        </li>
      </ul>
      <img
        v-for="(img, index) in pastShowsData.frontmatter.bottomImages"
        :key="'bottom-' + index"
        :src="`/images/${img.src}`"
        :alt="img.alt"
        class="section-img"
      />
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/bugaki');

.main-bg {
  background: var(--color-bg);
  min-height: 100vh;
  color: var(--color-text);
  font-family: 'Montserrat', Arial, sans-serif;
}

.navbar {
  background: var(--color-navbar);
  padding: 0;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  display: flex;
  justify-content: center;
}

.navbar-inner {
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
}

.navbar a {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.2s;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  height: 48px;
  line-height: 1.2;
}

.navbar a:hover {
  color: var(--color-secondary);
  background: rgba(249, 181, 95, 0.08);
}

.section {
  max-width: 900px;
  margin: 1rem auto;
  padding: 1rem;
  background: var(--color-card);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
}

.heading {
  color: var(--color-heading);
  margin-bottom: 1rem;
  font-size: 2.2rem;
  letter-spacing: 1px;
  font-family: 'Bugaki', sans-serif;
  text-align: center;
  line-height: 1.1;
}

.font-fallback {
  font-family: 'Montserrat', Arial, sans-serif;
}

.secondary {
  color: var(--color-secondary);
}

.section a {
  color: var(--color-accent);
}

.section-img {
  width: 48%;
  max-width: 350px;
  border-radius: 1rem;
  margin: 1rem auto;
  display: block;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
}

.shows-list {
  font-size: 1.1rem;
  padding-left: 1.5rem;
}

@media (max-width: 900px) {
  .navbar ul {
    gap: 1rem;
    flex-wrap: wrap;
  }

  .navbar a {
    font-size: 1rem;
    padding: 0 0.4rem;
  }
}

@media (max-width: 700px) {
  .section {
    padding: 1em;
  }

  .section-img {
    max-width: 100%;
    width: 100%;
    margin: 1rem 0;
  }
}
</style>
