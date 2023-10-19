<script lang="ts" setup>
import dayjs from 'dayjs'
import { ref, useFetch } from '#imports'
import { useNuxtApp } from '#app'
import { NuxtApp, useRuntimeConfig } from '#app'

const date = dayjs('2023-01-01')

const data = ref(null)
const data2 = ref(null)

const app: NuxtApp = useNuxtApp()

useFetch(async () => {
  console.log('env', useRuntimeConfig().public.HOGE)
  console.log('api/hello in useFetch public: ', process.env.HOGE)
  console.log('api/hello in useFetch private: ', process.env.NUXT_ENV_FUGA)
  const res = await fetch('http://localhost:3000/api/hello')
  const res2 = await fetch('http://localhost:3000/api/kuroshiro')
  data.value = await res.json()
  data2.value = await res2.json()
})

console.log('data', data.value)
const increment = () => {
  app.$store.increment()
  console.log(app.$myPlugin.hoge())
}

const getCounter = () => {
  return app.$store.getCounter
}
</script>

<template>
  <div>
    <p>{{ date }}</p>
    <button @click="increment">increment</button>
    <p>{{ $store.counter }}</p>
    <p>data: {{ data }}</p>
    <p>data2: {{ data2 }}</p>
    <p>getCounter: {{ $store.getCounter }}</p>
    <p>getCounter2: {{ $store.getCounter2 }}</p>
  </div>

  <!-- freeeじゃない -->
  <div
    class="absolute w-full z-20 mt-2 border rounded shadow-2xl animate-fade-in-up bg-white border-gray-300 text-xs min-w-max"
  >
    <div class="inline-block w-full p-3 placeholder-gray">
      <input
        placeholder="Search..."
        class="inline-block w-full px-3 py-2 bg-gray-50 text-sm rounded border focus:outline-none focus:shadow-outline border-gray-300"
      />
    </div>
    <ul class="overflow-auto max-h-48" style="max-height: 300px">
      <li data-type="option" class="cursor-pointer bg-gray-100">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-left flex justify-between gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <circle
                cx="128"
                cy="128"
                r="96"
                fill="none"
                stroke="#000000"
                stroke-miterlimit="10"
                stroke-width="16"
              ></circle>
              <polyline
                points="128 72 128 128 184 128"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
            </svg>
            <span class="truncate block">課税仕入</span>
            <span
              class="text-xs pl-1 pr-1 rounded bg-gray-100 inline-flex items-center text-black"
              >10%</span
            >
          </div>
          <!---->
        </div>
      </li>
    </ul>
    <div class="text-center">
      <div class="text-center">
        <button
          id=""
          class="block transition duration-100 ease-in-out focus:ring-0 focus:ring-primary focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed w-full rounded-none p-3 text-info text-left bg-gray-100 border-t hover:bg-gray-200"
        >
          <div class="flex content-center gap-x-2">
            税区分を管理
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 256 256"
              stroke="#000000"
              stroke-width="16"
              fill=""
              class="inline"
            >
              <g>
                <polyline
                  points="216 100 215.992 40.008 156 40"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <line
                  x1="143.9714"
                  y1="112.0286"
                  x2="215.9714"
                  y2="40.0286"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></line>
                <path
                  d="M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </button>
      </div>
      <button
        type="button"
        class="block w-full p-3 text-info text-left bg-gray-100 border-t hover:bg-gray-200"
      >
        コードの検索を有効にする
      </button>
    </div>
  </div>

  <!-- freee -->
  <div
    class="absolute w-full z-20 mt-2 border rounded shadow-2xl animate-fade-in-up bg-white border-gray-300 text-xs min-w-max"
  >
    <div class="inline-block w-full p-3 placeholder-gray">
      <input
        placeholder="Search..."
        class="inline-block w-full px-3 py-2 bg-gray-50 text-sm rounded border focus:outline-none focus:shadow-outline border-gray-300"
      />
    </div>
    <div class="border-b">
      <button class="px-3 py-2">すべて</button
      ><button class="px-3 py-2 bg-gray-100">品目</button
      ><button class="px-3 py-2">部門</button
      ><button class="px-3 py-2">メモタグ</button
      ><button class="px-3 py-2">セグ1</button
      ><button class="px-3 py-2">セグ2</button
      ><button class="px-3 py-2">セグ3</button>
    </div>
    <ul class="overflow-auto max-h-48" style="max-height: 300px">
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">インターネット使用料</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">ガス料金</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">介護保険料（事業主負担分）</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer bg-primary text-white">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">介護保険料（預り分）</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">住民税</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">健康保険料（事業主負担分）</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">健康保険料（預り分）</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">備品</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">厚生年金保険料（事業主負担分）</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">厚生年金保険料（預り分）</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">基本給</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">家賃（事務所兼自宅）</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">所得税</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">残業代</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">水道料金</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">消耗品</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">源泉所得税</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">賃貸の保険・引越し費用</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">通勤手当</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">雇用保険料（事業主負担分）</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">雇用保険料（預り分）</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">電気料金</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer">
        <div class="flex justify-between items-center px-4 py-2.5">
          <div class="text-right">電話料金</div>
          <div class="justify-self-end">
            品目
            <button
              class="text-xs ml-2 px-2 py-1 rounded-md hover:bg-gray-400 hover:bg-opacity-30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              編集
            </button>
          </div>
        </div>
      </li>
      <li data-type="option" class="cursor-pointer bg-primary text-white"></li>
      <li data-type="option" class="cursor-pointer bg-primary text-white"></li>
      <li data-type="option" class="cursor-pointer"></li>
    </ul>
    <div class="text-center">
      <button
        type="button"
        class="block w-full p-3 text-primary text-left bg-gray-100 border-t hover:bg-gray-200"
      >
        品目をインポート
      </button>
    </div>
    <div class="text-center">
      <button
        type="button"
        class="block w-full p-3 text-primary text-left bg-gray-100 border-t hover:bg-gray-200"
      >
        freeeの品目マスタ
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 256 256"
          stroke="#000000"
          stroke-width="16"
          fill=""
          class="inline"
        >
          <g>
            <polyline
              points="216 100 215.992 40.008 156 40"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></polyline>
            <line
              x1="143.9714"
              y1="112.0286"
              x2="215.9714"
              y2="40.0286"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></line>
            <path
              d="M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
