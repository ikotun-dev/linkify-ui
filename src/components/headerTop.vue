<template>
  <div class="relative h-screen">
  <div class="bg-green-950 lg:h-20 sm:h-16 pl-36">
    <h3 class="font-pop font-bold text-3xl text-white lg:pt-6 sm:pb-4 sm:pt-4">Linkify</h3>
  </div>
  
  <div class="lg:flex lg:items-center">
    <div class="lg:mt-16 lg:ml-32 sm:mt-8 sm:ml-12">
      <img class="sm:h-72 lg:h-100" :src="require('../assets/3918929.jpg')"/>
    </div>

    <div class="sm:ml-8 sm:mt-8">
      <h2 class="font-pop font-bold lg:text-6xl sm:text-3xl lg:ml-8 text-green-950 sm:ml-6">Enter the original url</h2>
      <h4 class="lg:ml-8 font-pop lg:text-xl lg:mt-2 sm:text-md font-bold sm:ml-6 sm:mt-2">convert long urls to tiny urls for easy sharing</h4>

      <div class="flex sm:w-67 lg:w-78 border-2 border-green-800 lg:ml-8 lg:mt-2 sm:ml-6 sm:mt-4">
        <input v-model="long_url" class="lg:w-76 sm:w-64 focus:outline-none py-2 px-2 font-pop" placeholder="url" type="text"/>
        <div @click="shorten_url" class="pt-2 pl-4 bg-green-800 w-12 text-xl font-bold text-white hover:text-white">
         &rightarrow;
        </div>
      </div>

      <div v-if="short_url" class="flex sm:w-67 lg:w-78 border-2 border-green-800 lg:ml-8 lg:mt-2 sm:ml-6 sm:mt-4">
        <input v-model="url" class="lg:w-76 sm:w-64 focus:outline-none py-2 px-2" type="text"/>
        <div @click="copyUrl" class="pt-2 pl-4 bg-green-800 w-12 text-xl text-white font-bold hover:text-white">
        <i class="fas fa-copy"></i>
        </div>
      </div>
    </div>
  

 
  </div> 

  <div  class="absolute bottom-0 h-16 w-full pt-4 bg-green-950 flex justify-center">
     <h2 class="text-white font-pop">&copy; Linkify 2023. Made by <a href="https://www.github.com/ikotun.dev " class="text-green-200">Collins</a></h2>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default{
  data() { 
    return {
      short_url : false,
      url :"",
      long_url : "",
    };
  },
  methods : {
    async shorten_url(){
        const res = await axios.post('http://127.0.0.1:8000/shorten', { 
          'url' : this.long_url
        });

        if (res.status == 200){
          console.log("login was successful");
          this.url = res.data.short_url
          console.log(this.url)
          this.short_url =  true
        }
        else {
          console.log(res.errors)
        }
    },
    copyUrl() {
  navigator.clipboard.writeText(this.url)
    .then(() => {
      console.log('URL copied to clipboard');
    })
    .catch((error) => {
      console.error('Failed to copy URL: ', error);
    });
}

  },

}
</script>