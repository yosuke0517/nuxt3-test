<template>
  <div>
    <div>invoices layout</div>
    <router-view />
    <div
      class="list-group-item flex items-center mb-3 gap-x-3"
      data-v-c15436e4=""
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#000000"
        viewBox="0 0 256 256"
        data-v-c15436e4=""
      >
        <polyline
          points="96 56 128 24 160 56"
          fill="none"
          stroke="#a1a1a1"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
          data-v-c15436e4=""
        ></polyline>
        <line
          x1="128"
          y1="232"
          x2="128"
          y2="24"
          fill="none"
          stroke="#a1a1a1"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
          data-v-c15436e4=""
        ></line>
        <polyline
          points="160 200 128 232 96 200"
          fill="none"
          stroke="#a1a1a1"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
          data-v-c15436e4=""
        ></polyline>
      </svg>
      <div
        class="w-full py-1 px-2 bg-gray-50 border-l-4 border-t-0 border-r-0 border-b-0 w-full py-1 px-2 bg-gray-50 border-l-4 border-t-0 border-r-0 border-b-0 border rounded-lg shadow-md bg-white border-gray-100 border-blue-500"
        data-v-c15436e4=""
      >
        <div class="p-3">
          <div class="flex justify-between items-center" data-v-c15436e4="">
            <div class="flex items-center gap-x-2" data-v-c15436e4="">
              <div class="w-80 truncate" data-v-c15436e4="">請求書</div>
            </div>
            <div class="flex items-center gap-x-4" data-v-c15436e4="">
              <div class="flex gap-x-2" data-v-c15436e4="">
                <div
                  class="items-center px-2 py-1.5 flex-grow text-center rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800"
                  data-v-c15436e4=""
                >
                  国税
                </div>
                <div
                  class="items-center px-2.5 py-1.5 flex-grow text-center rounded-full text-xs font-medium leading-4 bg-red-100 text-red-800"
                  data-v-c15436e4=""
                >
                  重要
                </div>
              </div>
              <button
                id=""
                class="block transition duration-100 ease-in-out focus:ring-0 focus:ring-primary focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-black bg-transparent"
                data-v-c15436e4=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                  data-v-c15436e4=""
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <polygon
                    points="128 160 96 160 96 128 192 32 224 64 128 160"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></polygon>
                  <line
                    x1="168"
                    y1="56"
                    x2="200"
                    y2="88"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></line>
                  <path
                    d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></path>
                </svg>
              </button>
              <button
                id=""
                disabled="disabled"
                class="block transition duration-100 ease-in-out focus:ring-0 focus:ring-primary focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-black bg-transparent"
                data-v-c15436e4=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  stroke="#000000"
                  stroke-width="16"
                  fill=""
                  data-v-c15436e4=""
                  class=""
                >
                  <g data-v-c15436e4="">
                    <line
                      x1="215.99609"
                      y1="56"
                      x2="39.99609"
                      y2="56.00005"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></line>
                    <line
                      x1="104"
                      y1="104"
                      x2="104"
                      y2="168"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></line>
                    <line
                      x1="152"
                      y1="104"
                      x2="152"
                      y2="168"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></line>
                    <path
                      d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
