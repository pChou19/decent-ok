<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isNavVisible = ref(true);
let lastScrollY = window.scrollY;
let ticking = false;

function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      if (window.innerWidth <= 700) {
        if (currentScrollY > lastScrollY && currentScrollY > 40) {
          isNavVisible.value = false;
        } else {
          isNavVisible.value = true;
        }
      } else {
        isNavVisible.value = true;
      }
      lastScrollY = currentScrollY;
      ticking = false;
    });
    ticking = true;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div id="app" class="main-bg">
    <nav class="navbar" :class="{ 'navbar-hidden': !isNavVisible }">
      <div class="navbar-inner">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#shows">Upcoming Shows</a></li>
          <li><a href="#booking">Booking Info</a></li>
          <li><a href="#discography">Discography</a></li>
          <li><a href="#videos">Music Videos</a></li>
          <li><a href="#merch">Merch</a></li>
          <li><a href="#epk">EPK</a></li>
        </ul>
      </div>
    </nav>

    <section id="about" class="section">
      <div class="about-card">
        <img src="@/assets/decentok.jpg" alt="Nick Lombardo & The Decent Ok" class="hero-img" />
        <div class="about-socials">
          <a href="https://open.spotify.com/artist/6oxEDcs24tSjh6tRka0oLv" target="_blank" rel="noopener"
            aria-label="Spotify">
            <svg width="32" height="32" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30,60 C46.5685433,60 60,46.5685433 60,30 C60,13.4314567 46.5685433,0 30,0 C13.4314567,0 0,13.4314567 0,30 C0,46.5685433 13.4314567,60 30,60 Z"
                fill="#FFFFFF" />
              <path
                d="M38.676152,41.5377386 C38.4592954,41.531377 38.2431339,41.4670537 38.0471289,41.343355 C38.0450438,41.343355 37.7941296,41.1814865 37.2790952,40.9008672 C36.7633657,40.6195411 36.0036726,40.2321875 35.0570101,39.825749 C33.1657704,39.0072173 30.5183129,38.1010361 27.5594715,37.7532662 C26.651037,37.6472387 25.7766601,37.5822086 24.9405111,37.5546414 C21.1802734,37.4288222 18.2249073,37.9978361 17.0203802,38.2791622 C16.6172493,38.3731732 16.4316701,38.430428 16.4309751,38.430428 C15.7602488,38.6304664 15.058245,38.238165 14.8608499,37.556762 C14.66554,36.8739453 15.0492094,36.1586136 15.7192406,35.959282 C15.8047322,35.9345423 19.6170988,34.8042899 25.0204422,34.9817091 C25.9212312,35.0128105 26.8685887,35.0813749 27.8472235,35.1965914 C34.4120008,35.9776601 39.2982246,39.1125378 39.3885815,39.1598968 C39.982157,39.5380613 40.1614807,40.3325602 39.7903223,40.9340891 C39.5442735,41.3384071 39.1126454,41.5525825 38.676152,41.5377386 Z M43.2787942,33.9468814 C42.9688005,34.4494514 42.4308293,34.7194679 41.8852126,34.700383 C41.6141418,34.6911939 41.3437661,34.6106131 41.0991074,34.4551062 C41.0977173,34.4572267 41.0421131,34.41835 40.8926766,34.3299938 C40.7418501,34.2409308 40.5152627,34.1101636 40.2205602,33.9497088 C39.6269848,33.6259717 38.7567782,33.1806564 37.6662398,32.7106015 C35.4907233,31.7697847 32.4456954,30.7307159 29.0441051,30.3320528 C28.0029154,30.2090609 26.9957834,30.1362554 26.0331347,30.1044472 C21.7064287,29.9588362 18.3055335,30.612672 16.9230727,30.9364091 C16.4615574,31.045264 16.2523464,31.1074667 16.2509563,31.1095873 C15.4134172,31.3569846 14.5334799,30.8678447 14.2888212,30.0146773 C14.0427724,29.1608031 14.5230541,28.2666384 15.3626783,28.0206548 C15.4690215,27.9874328 19.8812191,26.680468 26.1353075,26.8882818 C27.1778873,26.9229174 28.271901,27.0006709 29.4055328,27.1349723 C37.0121947,28.0411534 42.6671474,31.665171 42.779746,31.7294943 C43.5185875,32.2030835 43.7437848,33.1947934 43.2787942,33.9468814 Z M47.0181803,26.863542 C46.6449367,27.4671916 45.9971472,27.789515 45.3444922,27.7676026 C45.0212925,27.7569999 44.6953126,27.6615752 44.4026952,27.4735532 C44.4026952,27.4735532 44.33458,27.4297285 44.1580365,27.3244079 C43.9828831,27.2212079 43.7166777,27.0664079 43.3663709,26.8755585 C42.6685375,26.497394 41.6419439,25.9736185 40.3574857,25.4180347 C37.7927394,24.3104015 34.20557,23.0840175 30.1999785,22.6139626 C28.9711245,22.4697653 27.7832786,22.3849433 26.650342,22.3481871 C20.7027719,22.1460282 16.2405305,23.2268011 15.3042939,23.4791464 C15.1708437,23.5144889 15.12358,23.5286259 15.12358,23.5286259 C14.1178381,23.8276232 13.0641375,23.2395244 12.7694349,22.21742 C12.4747324,21.1939018 13.0502364,20.1201974 14.0580635,19.8212 C14.1859533,19.7858575 19.3932917,18.2420981 26.7740614,18.4880818 C28.0050006,18.5283722 29.2950193,18.6188489 30.6329967,18.7771832 C39.6144738,19.8480603 46.282119,24.1237932 46.4176543,24.2008398 C47.3052372,24.7663194 47.5742228,25.9601883 47.0181803,26.863542 Z"
                fill="#3c365cf2" />
            </svg>
          </a>
          <a href="https://music.apple.com/us/artist/nick-lombardo-the-decent-ok/1530960086" target="_blank"
            rel="noopener" aria-label="Apple Music">
            <svg width="32" height="32" viewBox="2 5 52 50" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M28.347,5.155c-13.6,0-24.625,11.025-24.625,24.625c0,13.602,11.025,24.625,24.625,24.625  c13.6,0,24.625-11.023,24.625-24.625C52.972,16.18,41.946,5.155,28.347,5.155z M29.759,15.141c1.117-1.311,3.006-2.283,4.564-2.346  c0.199,1.816-0.533,3.637-1.613,4.947c-1.084,1.309-2.857,2.328-4.598,2.193C27.878,18.157,28.755,16.301,29.759,15.141z   M38.626,39.94c-1.293,1.889-2.633,3.771-4.744,3.809c-2.076,0.039-2.744-1.23-5.115-1.23c-2.373,0-3.115,1.193-5.08,1.27  c-2.037,0.076-3.589-2.037-4.892-3.92c-2.665-3.848-4.698-10.875-1.964-15.619c1.354-2.358,3.78-3.846,6.411-3.887  c2.004-0.037,3.893,1.35,5.115,1.35c1.225,0,3.521-1.666,5.936-1.42c1.01,0.041,3.846,0.406,5.668,3.071  c-0.146,0.092-3.387,1.977-3.348,5.902c0.043,4.689,4.113,6.246,4.16,6.27C40.735,35.642,40.12,37.757,38.626,39.94z"
                fill="#FFFFFF" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@nicklombardothedecentok" target="_blank" rel="noopener"
            aria-label="YouTube">
            <svg width="32" height="32" viewBox="0 0 512 512" xmlns="http://www.w3.org/1999/xlink">
              <path
                d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm153.315,178.978c-3.68,-13.769 -14.522,-24.61 -28.29,-28.29c-24.958,-6.688 -125.025,-6.688 -125.025,-6.688c0,0 -100.067,0 -125.025,6.688c-13.765,3.68 -24.61,14.521 -28.29,28.29c-6.685,24.955 -6.685,77.024 -6.685,77.024c0,0 0,52.067 6.685,77.02c3.68,13.769 14.525,24.614 28.29,28.293c24.958,6.685 125.025,6.685 125.025,6.685c0,0 100.067,0 125.025,-6.685c13.768,-3.679 24.61,-14.524 28.29,-28.293c6.685,-24.953 6.685,-77.02 6.685,-77.02c0,0 0,-52.069 -6.685,-77.024Zm-185.316,125.025l0,-96.002l83.137,48.001l-83.137,48.001Z"
                fill="#FFFFFF" />
            </svg>

          </a>
          <a href="https://www.instagram.com/decentokband/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="32" height="32" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,96c-43.453,0 -48.902,0.184 -65.968,0.963c-17.03,0.777 -28.661,3.482 -38.839,7.437c-10.521,4.089 -19.444,9.56 -28.339,18.455c-8.895,8.895 -14.366,17.818 -18.455,28.339c-3.955,10.177 -6.659,21.808 -7.437,38.838c-0.778,17.066 -0.962,22.515 -0.962,65.968c0,43.453 0.184,48.902 0.962,65.968c0.778,17.03 3.482,28.661 7.437,38.838c4.089,10.521 9.56,19.444 18.455,28.34c8.895,8.895 17.818,14.366 28.339,18.455c10.178,3.954 21.809,6.659 38.839,7.436c17.066,0.779 22.515,0.963 65.968,0.963c43.453,0 48.902,-0.184 65.968,-0.963c17.03,-0.777 28.661,-3.482 38.838,-7.436c10.521,-4.089 19.444,-9.56 28.34,-18.455c8.895,-8.896 14.366,-17.819 18.455,-28.34c3.954,-10.177 6.659,-21.808 7.436,-38.838c0.779,-17.066 0.963,-22.515 0.963,-65.968c0,-43.453 -0.184,-48.902 -0.963,-65.968c-0.777,-17.03 -3.482,-28.661 -7.436,-38.838c-4.089,-10.521 -9.56,-19.444 -18.455,-28.339c-8.896,-8.895 -17.819,-14.366 -28.34,-18.455c-10.177,-3.955 -21.808,-6.66 -38.838,-7.437c-17.066,-0.779 -22.515,-0.963 -65.968,-0.963Zm0,28.829c42.722,0 47.782,0.163 64.654,0.933c15.6,0.712 24.071,3.318 29.709,5.509c7.469,2.902 12.799,6.37 18.397,11.969c5.6,5.598 9.067,10.929 11.969,18.397c2.191,5.638 4.798,14.109 5.509,29.709c0.77,16.872 0.933,21.932 0.933,64.654c0,42.722 -0.163,47.782 -0.933,64.654c-0.711,15.6 -3.318,24.071 -5.509,29.709c-2.902,7.469 -6.369,12.799 -11.969,18.397c-5.598,5.6 -10.928,9.067 -18.397,11.969c-5.638,2.191 -14.109,4.798 -29.709,5.509c-16.869,0.77 -21.929,0.933 -64.654,0.933c-42.725,0 -47.784,-0.163 -64.654,-0.933c-15.6,-0.711 -24.071,-3.318 -29.709,-5.509c-7.469,-2.902 -12.799,-6.369 -18.398,-11.969c-5.599,-5.598 -9.066,-10.928 -11.968,-18.397c-2.191,-5.638 -4.798,-14.109 -5.51,-29.709c-0.77,-16.872 -0.932,-21.932 -0.932,-64.654c0,-42.722 0.162,-47.782 0.932,-64.654c0.712,-15.6 3.319,-24.071 5.51,-29.709c2.902,-7.468 6.369,-12.799 11.968,-18.397c5.599,-5.599 10.929,-9.067 18.398,-11.969c5.638,-2.191 14.109,-4.797 29.709,-5.509c16.872,-0.77 21.932,-0.933 64.654,-0.933Zm0,49.009c-45.377,0 -82.162,36.785 -82.162,82.162c0,45.377 36.785,82.162 82.162,82.162c45.377,0 82.162,-36.785 82.162,-82.162c0,-45.377 -36.785,-82.162 -82.162,-82.162Zm0,135.495c-29.455,0 -53.333,-23.878 -53.333,-53.333c0,-29.455 23.878,-53.333 53.333,-53.333c29.455,0 53.333,23.878 53.333,53.333c0,29.455 -23.878,53.333 -53.333,53.333Zm104.609,-138.741c0,10.604 -8.597,19.199 -19.201,19.199c-10.603,0 -19.199,-8.595 -19.199,-19.199c0,-10.604 8.596,-19.2 19.199,-19.2c10.604,0 19.201,8.596 19.201,19.2Z"
                fill="#FFFFFF" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@lick_nombardo" target="_blank" rel="noopener" aria-label="TikTok">
            <svg width="32" height="32" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM385.62,232.382c-27.184,0-53.634-8.822-74-23.75l-.162,101.5a92.457,92.457,0,1,1-80.178-91.721v49.845a43.657,43.657,0,1,0,31.288,41.876V109.333h51.275a71.773,71.773,0,0,0,71.774,71.773Z"
                fill="#FFFFFF" />
            </svg>
          </a>
        </div>
        <p class="about-text">
          The Decent Ok is a Philadelphia-based indie rock band that packs an eclectic blend of rock, pop, and
          indie anthems to their setlist. Founded in the fall of 2019 by Philly public school teacher and songwriter
          Nick Lombardo, the band quickly grew into a powerhouse lineup featuring Josh Steingard on drums, Ethan Cain on
          bass, and James Gaffield on lead guitar. With five genre-bending releases under their belt — Never Been
          Better, Live at Light & Sound Studio, Vol. II, Still Falling Down, and their latest, Live Animal — The Decent
          Ok has been making waves across the Philly music scene. Recorded at local studios like Miner Street
          Recordings, TedAudio, Light & Sound Studio, and in their very own bedrooms, their songs have earned critical
          acclaim and a growing fanbase. The Decent Ok's sound has reached the USA from coast to coast, having songs
          recently featured on KEXP in Seattle and WXPN in Philadelphia.
        </p>
        <p class="about-text">
          Whether they're tearing it up at a packed Philly club or playing a laid-back local spot, The Decent Ok rips an
          authentic sound to every show. Check out the Decent Ok on your favorite streaming platform and be sure to
          enjoy all of our music videos.
        </p>
      </div>
    </section>

    <section id="shows" class="section">
      <h2 class="heading">Upcoming Shows <span class="font-fallback">/</span> Events</h2>
      <img src="@/assets/HolidayHangover.jpg" alt="Poster for Holidy Hangover show" class="section-img" />
      <ul class="shows-list">
        <li><span class="secondary">Aug 8, 2025</span> - <a
            href="https://www.tixr.com/groups/milkboy/events/nick-lombardo-the-decent-ok-lunison-pep-rally-142546"
            target="_blank">Milkboy</a></li>
        <li><span class="secondary">Nov 14, 2025</span> - Vinyl FULL BAND</li>
        <li><span class="secondary">Nov 15, 2025</span> - <a
            href="https://www.silkcityphilly.com/events/1639/nick-lombardo-and-the-decent-ok-two-rocks-rye-michael-james"
            target="_blank">SILK CITY ****FULL BAND **** TICKETS ON SALE NOW!</a></li>
        <li><span class="secondary">Dec. 21, 2025 </span> - <a href="https://www.youtube.com/watch?v=PpH2jrru4OE" target="_blank" rel="noopener">SOUTH DAKOTA MUSIC VIDEO RELEASE</a></li>
        <li><span class="secondary">Jan. 17, 2026 </span> - 12 STEPS DOWN - Holiday Hangover Party</li>
        <li><span class="secondary">Feb. 20, 2026 </span> - Ruba Club - Philadelphia *FULL BAND*</li>
        <li><span class="secondary">Bogey's</span> - Sewell, NJ *SOLO* (1/10, 2/28, 3/20, 4/18, 5/15) 6-9 PM</li>
      </ul>
      <img src="@/assets/DECENT_OK_Silk_city.jpg" alt="Poster for Milkboy show" class="section-img" />
      <img src="@/assets/milkboy.jpg" alt="Poster for Milkboy show" class="section-img" />
    </section>

    <section id="booking" class="section">
      <h2 class="heading">Booking Info</h2>
      <p>Email: <a href="mailto:mr.lombardo04@gmail.com" class="accent-link">mr.lombardo04@gmail.com</a></p>
      <p>For press and booking inquiries, please reach out via email.</p>
      <img src="@/assets/decentok_bw.jpeg" alt="Black and white photo of band" class="section-img" />
    </section>

    <section id="discography" class="section">
      <h2 class="heading">Discography</h2>
      <img src="@/assets/OceanCountyCover.jpg" alt="Ocean County Cover Art" class="section-img" />
      <ul class="discography-list">
        <li><a href="https://open.spotify.com/album/5pbBGi9W69oUfFU3hlHPz2?si=M5_ShEQrSiucqvhMTlKMVQ" target="_blank"
            rel="noopener"><b>Ocean County</b> (Single) - <span class="secondary">2025</span></a></li>
        <li><a href="https://open.spotify.com/album/1oSTfBrPoashMFzwiZv2jZ?si=5a2b7805fd664c6e" target="_blank"
            rel="noopener"><b>Live Animal</b> (Album) - <span class="secondary">2025</span></a></li>
        <li><a href="https://open.spotify.com/album/2ylj7H0AQYYEDAMBiTYzT2?si=p4xcKfD5TPCMuX-EzNbYgw" target="_blank"
            rel="noopener"><b>Still Falling Down</b> (EP) - <span class="secondary">2024</span></a></li>
        <li><a href="https://open.spotify.com/album/6ZVf5cHb6CthjUn3zzTScQ?si=uTj54Cl6TaSv-kOCs9CvuA" target="_blank"
            rel="noopener"><b>Vol. II</b> (EP) - <span class="secondary">2024</span></a></li>
        <li><a href="https://open.spotify.com/album/22drRIhl8LpWyAiIUXXE8c?si=SedlMa8UTO-EvTsDoL48WQ" target="_blank"
            rel="noopener"><b>Live at Light & Sound Studio</b> (EP) - <span class="secondary">2023</span></a></li>
        <li><a href="https://open.spotify.com/album/59rxscN0lNlT4zWOB6R7ZZ?si=2MP08XnTQ9KmfaUsjwFjyw" target="_blank"
            rel="noopener"><b>Never Been Better</b> (Album) - <span class="secondary">2021</span></a></li>
      </ul>
      <img src="@/assets/decentok_discog.JPG" alt="Band backstage" class="section-img" />
    </section>

    <section id="videos" class="section">
      <h2 class="heading">Music Videos</h2>
      <div class="videos">
        <div class="video-responsive">
          <iframe src="https://www.youtube.com/embed/videoseries?list=PLGZsNRgvoPH5C55CAPGQ9yqsiqCzbpcBc"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section id="merch" class="section">
      <h2 class="heading">Merch</h2>
      <ul class="discography-list">
        <li> Shirts (Black / Off White) S, M, L, XL</li>
        <li> Stickers</li>
      </ul>
      <br>
      <p>Venmo: <a href="https://account.venmo.com/u/decentokband" target="_blank" rel="noopener">@decentokband</a></p>
      <img src="@/assets/merch.JPG" alt="Decent OK shirts" class="section-img" />
    </section>

    <section id="epk" class="section">
      <h2 class="heading">EPK</h2>
      <p class="epk-text">
        <a href="/EPK - Nick Lombardo & the Decent Ok.pdf" class="accent-link" download>Download our EPK</a>
      </p>
      <img src="@/assets/decentok2.JPG" alt="Band on stage" class="section-img" />
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/bugaki');

.main-bg {
  background: #191626;
  min-height: 100vh;
  color: #fff;
  font-family: 'Montserrat', Arial, sans-serif;
}

.navbar {
  background: #2a2540;
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
  color: #F8B55F;
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
  color: #C95792;
  background: rgba(249, 181, 95, 0.08);
}

.section {
  max-width: 900px;
  margin: 1rem auto;
  padding: 1rem;
  background: rgba(60, 54, 92, 0.95);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
}

/* Center the About card and make it larger */
#about.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: none;
  background: none;
  box-shadow: none;
  padding: 0;
}

.about-card {
  background: #3c365cf2;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-card .heading {
  font-size: 2.7rem;
  font-family: 'Bugaki', sans-serif;
}

.hero-img {
  width: 100%;
  max-width: 400px;
  border-radius: 1rem;
  margin: 1.5rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
}

.about-text {
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 1rem;
}

.heading {
  color: #7C4585;
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
  color: #C95792;
}

.accent {
  color: #F8B55F;
  font-weight: bold;
}

.accent-link {
  color: #F8B55F;
  text-decoration: underline;
}

.section-img {
  width: 48%;
  max-width: 350px;
  border-radius: 1rem;
  margin: 1rem auto;
  display: block;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
}

.epk-text {
  font-size: 1.15rem;
  text-align: center;
}

.shows-list,
.discography-list {
  font-size: 1.1rem;
  padding-left: 1.5rem;
}

.videos {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
}

.video-responsive {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
  margin-bottom: 1.5rem;
}

.video-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 1rem;
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

  .hero-img,
  .section-img {
    max-width: 100%;
    width: 100%;
    margin: 1rem 0;
  }

  .videos {
    flex-direction: column;
    gap: 1rem;
  }

  .navbar ul {
    flex-wrap: wrap;
    gap: 0.5rem 0.5rem;
    row-gap: 0rem;
    justify-content: center;
  }

  .navbar a {
    word-break: break-word;
    text-align: center;
    font-size: 1rem;
    padding: 0 0.3rem;
  }

  .about-card {
    padding: 1.2rem .75rem 1rem .75rem;
    max-width: 100%;
  }

  .about-card .heading {
    font-size: 2rem;
  }

  .navbar {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .navbar-hidden {
    transform: translateY(-100%);
  }
}

.about-socials {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
}

.about-socials a {
  display: flex;
  align-items: center;
  transition: transform 0.15s, box-shadow 0.15s;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.10);
}

.about-socials a:hover {
  transform: scale(1.12);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
}
</style>
