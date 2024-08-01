<!-- TeamList.vue -->
<template>
  <div class="mt-20">
    <div v-for="(team, teamIndex) in teams" :key="teamIndex">
      <div class="px-4 md:pl-24 md:px-0 mt-10">
        <h3
            class="m-0 font-semibold text-2xl text-[#22ffb7]"
            :style="{ color: team.color || 'var(--md-sys-color-primary)' }"
        >
          <i class="twa" :style="{ backgroundImage: `url(${team.image})` }" />
          {{ team.name }}
        </h3>
      </div>
      <div class="flex flex-wrap mt-10 px-4">
        <div
            v-for="(member, memberIndex) in team.list"
            :key="memberIndex"
            class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-10"
        >
          <div class="text-center max-w-xs mx-auto">
            <img
                class="w-24 h-24 mx-auto mb-2 rounded-full"
                :src="member.avatarUseGithub ? `https://github.com/${member.avatar}.png?size=200` : member.avatar"
                alt="avatar"
            />
            <h3 class="mb-1 text-lg text-[var(--md-sys-color-on-background)] font-semibold">
              {{ member.name }}
            </h3>
            <span class="inline-block text-lg font-medium text-[var(--md-sys-color-secondary)]">
              {{ member.position }}
            </span>
            <div class="flex items-center justify-center text-[var(--md-sys-color-on-background)]">
              <button
                  v-if="member.contact.discord"
                  class="inline-block mr-4 hover:opacity-80"
                  @click.prevent="copyToClipboard(member.contact.discord, teamIndex, memberIndex)"
              >
                <i
                    :class="copied[teamIndex][memberIndex] ? 'fa-solid fa-clipboard-check' : 'fa-brands fa-discord'"
                />
              </button>

              <a
                  v-if="member.contact.github"
                  class="inline-block mr-4 hover:opacity-80"
                  :href="member.contact.github"
              >
                <i class="fa-brands fa-github" />
              </a>
              <a
                  v-if="member.contact.twitter"
                  class="inline-block hover:opacity-80"
                  :href="member.contact.twitter"
              >
                <i class="fa-brands fa-x-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

interface Contact {
  discord?: string;
  twitter?: string;
  github?: string;
}

interface TeamMember {
  name: string;
  avatar: string;
  avatarUseGithub: boolean;
  position: string;
  contact: Contact;
}

interface Team {
  name: string;
  image: string;
  color: string;
  list: TeamMember[];
}

const props = defineProps<{
  teams: Team[];
}>();

// 存储已复制的成员索引
const copiedIndex = ref<{ teamIndex: number; memberIndex: number } | null>(
    null
);

// 用于追踪每个成员的复制状态
const copied = ref<boolean[][]>([]);

// 初始化复制状态二维数组
copied.value = props.teams.map((team: Team) =>
    team.list.map((member: TeamMember) => false)
);

// 复制到剪贴板并显示提示
function copyToClipboard(text: string, teamIndex: number, memberIndex: number) {
  navigator.clipboard.writeText(text).then(() => {
    // 设置已复制的成员索引
    copiedIndex.value = { teamIndex, memberIndex };
    // 设置当前成员的复制状态
    copied.value[teamIndex][memberIndex] = true;
    // 2秒后清除提示信息和复制状态
    setTimeout(() => {
      copiedIndex.value = null;
      copied.value[teamIndex][memberIndex] = false;
    }, 2000);
  });
}

</script>

<style scoped></style>
