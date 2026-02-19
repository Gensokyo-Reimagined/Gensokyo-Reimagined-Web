<template>
  <div class="min-h-screen bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-background)] pb-20">

    <div class="relative pt-32 pb-16 px-6 md:px-24 overflow-hidden">
      <div
          class="absolute top-0 right-0 w-96 h-96 bg-[var(--md-sys-color-primary)] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div class="container mx-auto relative z-10">
        <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-[var(--md-sys-color-on-background)]">
          Contributors
        </h1>
        <p class="text-xl md:text-2xl text-[var(--md-sys-color-secondary)] max-w-2xl font-light">
          The talented individuals who make this project possible.
        </p>
      </div>
    </div>

    <div class="container mx-auto px-6 md:px-24">

      <div v-if="pending"
           class="flex flex-col items-center justify-center py-32 space-y-6 transition-opacity duration-500">
        <div class="relative w-16 h-16">
          <div class="absolute inset-0 rounded-full border-4 border-[var(--md-sys-color-surface-variant)]"></div>
          <div
              class="absolute inset-0 rounded-full border-4 border-[var(--md-sys-color-primary)] border-t-transparent animate-spin"></div>
        </div>
        <p class="text-lg text-[var(--md-sys-color-secondary)] font-medium animate-pulse tracking-wide">
          Fetching live contributor data...
        </p>
      </div>

      <div v-else>
        <div v-for="(team, teamIndex) in displayTeams" :key="teamIndex" class="mb-20 animate-fade-in">

          <div class="flex items-center gap-4 mb-10 pb-4 border-b border-[var(--md-sys-color-outline-variant)]">
            <div
                class="p-2 rounded-xl bg-[var(--md-sys-color-surface-variant)]"
                v-if="team.image"
            >
              <nuxt-img
                  :src="team.image"
                  alt=""
                  class="w-8 h-8 object-contain"
                  placeholder="/img/404_img.webp"
              />
            </div>

            <h2
                class="text-3xl font-bold"
                :style="getTeamTitleStyle(team.color)"
            >
              {{ team.name }}
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="(member, memberIndex) in team.list" :key="memberIndex"
                 class="group relative bg-[var(--md-sys-color-surface-container-low)] hover:bg-[var(--md-sys-color-surface-container-high)] rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-[var(--md-sys-color-outline-variant)]">

              <div class="flex flex-col items-center">
                <div class="relative mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div
                      class="w-28 h-28 rounded-full p-1 bg-gradient-to-br from-[var(--md-sys-color-surface-variant)] to-[var(--md-sys-color-surface)] shadow-inner">
                    <img
                        class="w-full h-full rounded-full object-cover bg-[var(--md-sys-color-surface)]"
                        :src="getAvatarUrl(member)"
                        :alt="member.name"
                        loading="lazy"
                        @error="handleImageError"
                    />
                  </div>
                </div>

                <div class="text-center w-full">
                  <h3 class="text-xl font-bold text-[var(--md-sys-color-on-surface)] mb-1 truncate">
                    {{ member.name }}
                  </h3>
                  <div
                      class="inline-block px-3 py-1 rounded-full bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-primary)] text-xs font-semibold uppercase tracking-wider mb-4">
                    {{ member.position }}
                  </div>

                  <div
                      class="flex items-center justify-center gap-2 pt-4 border-t border-[var(--md-sys-color-outline-variant)] w-full">

                    <button v-if="member.contact?.discord"
                            class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#5865F2] hover:text-white text-[var(--md-sys-color-secondary)] transition-all relative group/btn"
                            @click.prevent="copyToClipboard(member.contact.discord, teamIndex, memberIndex)">
                      <i class="text-lg"
                         :class="copiedState[teamIndex]?.[memberIndex] ? 'fa-solid fa-check' : 'fa-brands fa-discord'"></i>
                      <span
                          class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {{ copiedState[teamIndex]?.[memberIndex] ? 'Copied!' : member.contact.discord }}
                      </span>
                    </button>

                    <a v-if="member.contact?.github"
                       :href="member.contact.github.startsWith('http') ? member.contact.github : 'https://github.com/' + member.contact.github"
                       target="_blank"
                       class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white text-[var(--md-sys-color-secondary)] transition-all">
                      <i class="fa-brands fa-github text-lg"></i>
                    </a>

                    <a v-if="member.contact?.twitter" :href="member.contact.twitter" target="_blank"
                       class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white text-[var(--md-sys-color-secondary)] transition-all">
                      <i class="fa-brands fa-x-twitter text-lg"></i>
                    </a>

                    <a v-if="member.contact?.youtube" :href="member.contact.youtube" target="_blank"
                       class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600 hover:text-white text-[var(--md-sys-color-secondary)] transition-all">
                      <i class="fa-brands fa-youtube text-lg"></i>
                    </a>

                    <a v-if="member.contact?.other" :href="member.contact.other" target="_blank"
                       class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white text-[var(--md-sys-color-secondary)] transition-all">
                      <i class="fa-brands fa-globe text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, type CSSProperties} from 'vue';
import {teams as localTeams, ContributorsConfig as teamsConfig, type TeamMember, type Team} from '~/contributors';

const apiUrl = 'https://api.sakurakoi.top/api/gensokyo/contributors';

const {data: apiTeams, pending, error} = await useFetch<Team[]>(apiUrl, {
  method: 'POST',
  body: teamsConfig,
  server: false,
  lazy: true,
  timeout: 8000
});

const displayTeams = computed(() => {
  if (apiTeams.value && apiTeams.value.length > 0) {
    return apiTeams.value;
  }
  return localTeams
});

const getAvatarUrl = (member: TeamMember): string => {
  if (member.avatarUseGithub) {
    return `https://github.com/${member.avatar}.png`;
  }
  if (member.avatar.startsWith('http') || member.avatar.startsWith('/')) {
    return member.avatar;
  }
  return `https://api.sakurakoi.top/api/discord/avatar/${member.avatar}`;
};

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement;
  target.src = '/img/404_img.webp';
};

const copiedState = ref<Record<number, Record<number, boolean>>>({});
const copyToClipboard = (text: string, teamIndex: number, memberIndex: number) => {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    if (!copiedState.value[teamIndex]) copiedState.value[teamIndex] = {};
    copiedState.value[teamIndex][memberIndex] = true;
    setTimeout(() => {
      if (copiedState.value[teamIndex]) copiedState.value[teamIndex][memberIndex] = false;
    }, 2000);
  });
};

const getTeamTitleStyle = (color?: string | string[]): CSSProperties => {
  if (!color) return {color: 'var(--md-sys-color-primary)'};

  if (Array.isArray(color)) {
    const gradientColors = [...color, color[0]].join(', ');

    return {
      backgroundImage: `linear-gradient(to right, ${gradientColors})`,
      backgroundSize: '200% auto',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      animation: 'gradient-flow 3s linear infinite',
      display: 'inline-block'
    };
  }

  return {color};
};
</script>

<style scoped>
.container {
  max-width: 1400px;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out backwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
<style>
@keyframes gradient-flow {
  0% {
    background-position: 0 center;
  }
  100% {
    background-position: 200% center;
  }
}
</style>