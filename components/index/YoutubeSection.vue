<template>
  <Transition name="fade-slide-up">
    <section v-if="isYoutubeAccessible && videoData"
             class="relative py-24 bg-[var(--md-sys-color-background)] overflow-hidden">

      <div
          class="absolute top-10 right-10 md:top-20 md:right-20 opacity-10 pointer-events-none transform rotate-45 text-[#FF4500]">
        <i class="fa-solid fa-leaf text-9xl blur-sm"></i>
      </div>
      <div class="absolute bottom-10 left-10 opacity-5 pointer-events-none transform -rotate-12 text-[#FF0000]">
        <i class="fa-brands fa-envira text-8xl blur-md"></i></div>

      <div class="container mx-auto max-w-7xl px-6 md:px-24 relative z-10">

        <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[var(--md-sys-color-on-background)] flex items-center gap-3">
              <i class="fa-brands fa-youtube text-[#FF0000]"></i>
              {{ $t('index.youtube.title') }}
            </h2>
            <p class="text-[var(--md-sys-color-secondary)] mt-2 text-lg">
              {{ $t('index.youtube.subtitle') }}
            </p>
          </div>

          <a
              :href="`https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}`"
              target="_blank"
              class="hidden group md:inline-flex items-center px-6 py-3 rounded-xl border-2 border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-background)] hover:border-[#FF0000] hover:text-[#FF0000] hover:bg-red-500/10 transition-all duration-300 font-semibold"
          >
            {{ $t('index.youtube.viewChannel') }}
            <i class="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>

        <div
            class="group relative bg-[var(--md-sys-color-surface-container-low)] rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(255,0,0,0.2)] border border-[var(--md-sys-color-outline-variant)] hover:border-red-500/40 transition-all duration-500 flex flex-col lg:flex-row">

          <button
              @click="openModal"
              class="relative w-full lg:w-3/5 overflow-hidden aspect-video block bg-black cursor-pointer"
              aria-label="Play Video"
          >
            <img
                :src="videoData.thumbnail"
                :alt="videoData.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
                @error="handleImageError"
            />

            <div
                class="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-colors duration-500 rounded-xl pointer-events-none"></div>
            <div
                class="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-white/60 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div
                class="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-white/60 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div
                class="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-white/60 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div
                class="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-white/60 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div
                class="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/10">
              <div
                  class="w-20 h-20 bg-[#FF0000] text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.6)] transform group-hover:scale-110 transition-all duration-300">
                <i class="fa-solid fa-play text-3xl ml-2"></i>
              </div>
            </div>
          </button>

          <div class="w-full lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
            <div
                class="absolute -top-24 -right-24 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div class="relative z-10 flex-1 flex flex-col">

              <div
                  class="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-red-600/20 to-red-500/5 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider rounded-full mb-6 w-max shadow-sm">
                <i class="fa-solid fa-feather-pointed"></i> {{ $t('index.youtube.exclusiveScoop') }}
              </div>

              <h3 class="text-2xl md:text-3xl font-bold text-[var(--md-sys-color-on-surface)] mb-4 line-clamp-2 leading-tight group-hover:text-red-400 transition-colors cursor-pointer"
                  @click="openModal">
                {{ videoData.title }}
              </h3>

              <div class="flex-1">
                <p class="text-[var(--md-sys-color-secondary)] mb-6 line-clamp-4 text-base leading-relaxed whitespace-pre-wrap">
                  {{ videoData.description || $t('index.youtube.defaultDescription') }}
                </p>
              </div>

              <div
                  class="flex items-center justify-between mt-auto pt-6 border-t border-[var(--md-sys-color-outline-variant)]">
                <span class="text-sm text-[var(--md-sys-color-outline)] font-medium flex items-center">
                  <i class="fa-regular fa-clock mr-2"></i>
                  {{ formatDate(videoData.pubDate) }}
                </span>

                <button
                    @click="openModal"
                    class="inline-flex items-center font-bold text-[var(--md-sys-color-primary)] hover:text-red-400 transition-colors group/play"
                >
                  {{ $t('index.youtube.watchNow') }}
                  <i class="fa-solid fa-play ml-2 text-sm transform group-hover/play:scale-125 transition-transform"></i>
                </button>
              </div>
            </div>
          </div>

        </div>

        <a
            :href="`https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}`"
            target="_blank"
            class="mt-8 flex md:hidden items-center justify-center w-full px-6 py-4 rounded-xl border-2 border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-background)] font-semibold hover:bg-red-500/10 hover:border-red-500 hover:text-red-500 transition-colors"
        >
          {{ $t('index.youtube.viewFullChannel') }}
        </a>
      </div>

      <Teleport to="body">
        <Transition name="fade">
          <div v-if="isModalOpen"
               class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
               @click="closeModal">
            <div
                class="relative w-full max-w-5xl bg-black shadow-[0_0_50px_rgba(255,0,0,0.3)] rounded-2xl overflow-hidden border border-red-900/30"
                @click.stop>

              <button
                  @click="closeModal"
                  class="absolute -top-12 right-0 md:top-4 md:right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-red-600 text-white transition-colors rounded-full"
                  aria-label="Close video"
              >
                <i class="fa-solid fa-xmark text-xl"></i>
              </button>

              <div class="relative pt-[56.25%] w-full">
                <iframe
                    v-if="videoId"
                    class="absolute inset-0 w-full h-full"
                    :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
              </div>

            </div>
          </div>
        </Transition>
      </Teleport>
    </section>
  </Transition>
</template>

<script setup>
const {locale} = useI18n()
const YOUTUBE_CHANNEL_ID = 'UCpGyoleBq7B0bV0HPmZ6zzw';

const isYoutubeAccessible = ref(false);
const videoData = ref(null);
const isModalOpen = ref(false);

const videoId = computed(() => {
  if (!videoData.value || !videoData.value.link) return null;
  const match = videoData.value.link.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
});

const openModal = () => {
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};

const checkYoutubeAccess = () => {
  return new Promise((resolve) => {
    const img = new Image();
    let isResolved = false;

    const handleResponse = () => {
      if (!isResolved) {
        isResolved = true;
        resolve(true);
      }
    };

    img.onload = handleResponse;
    img.onerror = handleResponse;
    img.src = `https://www.youtube.com/favicon.ico?_t=${Date.now()}`;

    setTimeout(() => {
      if (!isResolved) {
        isResolved = true;
        img.src = '';
        resolve(false);
      }
    }, 2500);
  });
};

const fetchLatestVideo = async () => {
  try {
    const ytRssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
    const proxyUrl = `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(ytRssUrl)}`;

    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error('Network response was not ok');

    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    const entries = xmlDoc.getElementsByTagName("entry");

    if (entries.length > 0) {
      const latestEntry = entries[0];

      const title = latestEntry.getElementsByTagName("title")[0]?.textContent || "";
      const link = latestEntry.getElementsByTagName("link")[0]?.getAttribute("href") || "";
      const pubDate = latestEntry.getElementsByTagName("published")[0]?.textContent || "";

      const mediaGroup = latestEntry.getElementsByTagName("media:group")[0];
      const thumbnail = mediaGroup?.getElementsByTagName("media:thumbnail")[0]?.getAttribute("url") || "";
      const descriptionRaw = mediaGroup?.getElementsByTagName("media:description")[0]?.textContent || "";

      videoData.value = {
        title,
        link,
        pubDate,
        thumbnail,
        description: descriptionRaw
      };
    }
  } catch (error) {
    console.error("Failed to fetch YouTube XML:", error);
  }
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString(locale.value, {year: 'numeric', month: 'short', day: 'numeric'});
};

const handleImageError = (e) => {
  e.target.src = '/img/logo.webp';
};

onMounted(async () => {
  const accessible = await checkYoutubeAccess();
  isYoutubeAccessible.value = accessible;

  if (accessible) {
    await fetchLatestVideo();
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fade-slide-up-enter-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-up-enter-from,
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>