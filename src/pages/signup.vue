<template>
  <div class="signup-form">
    <p class="title">SNSアカウントで登録</p>
    <ul class="signup-buttons">
      <li>
        <button class="google-button" @click="googleSignUp">
          <span>Googleで登録</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useNuxtApp, NuxtApp } from 'nuxt/app'
import { defineComponent } from 'vue'
import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { initializeApp } from '@firebase/app'

export default defineComponent({
  components: {},
  setup(props, context) {
    const app: NuxtApp = useNuxtApp()

    const newFirebaseAuth = () => {
      initializeApp({
        apiKey: app.$config.public.NUXT_ENV_FIREBASE_API_KEY as string,
        authDomain: app.$config.public.NUXT_ENV_AUTH_DOMAIN as string,
      })
      const auth = getAuth()
      auth.languageCode = 'ja'
      return auth
    }

    const googleSignUp = () => {
      console.log('googleSignup')
      signInWithPopup(newFirebaseAuth(), new GoogleAuthProvider())
        .then((userCredential) => {
          console.log(userCredential)
        })
        .catch((e) => {
          console.log(e)
        })
    }
    return {
      googleSignUp,
    }
  },
})
</script>
<style lang="scss" scoped></style>
