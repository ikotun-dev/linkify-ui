<template>
  <div class="relative h-screen">
  <div class="bg-green-950 lg:h-20 sm:h-16 pl-36">
    <h3 class="font-pop font-bold text-3xl text-white lg:pt-6 sm:pb-4 sm:pt-4">Linkify</h3>
  </div>
  
  <div class="lg:flex lg:items-center">
    <div class="lg:mt-16 lg:ml-32 sm:mt-8 sm:ml-12">
      <img class="sm:h-72 lg:h-100" :src="require('../assets/3918929.jpg')"/>
    </div>

    <div>
      <h2 class="font-pop font-bold lg:text-6xl sm:text-3xl lg:ml-8 text-green-950 sm:ml-6">Enter the original url</h2>
      <h4 class="lg:ml-8 font-pop lg:text-xl lg:mt-2 sm:text-md font-bold sm:ml-6 sm:mt-2">convert long urls to tiny urls for easy sharing</h4>

      <div class="flex sm:w-67 lg:w-78 border-2 border-green-800 lg:ml-8 lg:mt-2 sm:ml-6 sm:mt-4">
        <input class="lg:w-76 sm:w-64 focus:outline-none py-2 px-2" type="text"/>
        <div class="pt-2 pl-4 bg-green-800 w-12 text-xl font-bold hover:text-white">
         &rightarrow;
        </div>
      </div>

      <div class="flex sm:w-67 lg:w-78 border-2 border-green-800 lg:ml-8 lg:mt-2 sm:ml-6 sm:mt-4">
        <input class="lg:w-76 sm:w-64 focus:outline-none py-2 px-2" type="text"/>
        <div class="pt-2 pl-4 bg-green-800 w-12 text-xl font-bold hover:text-white">
        <i class="fa fas-files-o"></i>
        </div>
      </div>
    </div>

 
  </div> 

  <div  class="absolute bottom-0 h-16 w-full bg-green-950">
sl
    </div>
  </div>
</template>
<script>
export default{

}
</script>