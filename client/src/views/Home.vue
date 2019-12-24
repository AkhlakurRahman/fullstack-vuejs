<template>
  <div v-if="getAllPhotos" class="guradian">
    <div class="photo__container" v-for="photo in getAllPhotos" :key="photo._id">
      <img class="photo__container--photo" :src="photo.imageUrl" :alt="photo.title" />

      <div class="photo__details">
        <p class="photo__details--likes">{{photo.likes}} likes</p>
        <h4 class="photo__details--heading">{{photo.title}}</h4>
        <p class="photo__details--description">{{photo.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "Home",
  apollo: {
    getAllPhotos: {
      query: gql`
        query {
          getAllPhotos {
            _id
            title
            imageUrl
            description
            likes
          }
        }
      `
    }
  }
};
</script>

<style lang="scss" scoped>
.guradian {
  background-color: rgb(240, 233, 233);
  border: 1px solid #c5c2c2;
  margin-top: 5rem;
}

.photo__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4rem;

  &--photo {
    width: 100%;
  }
}

.photo__details {
  padding: 1.5rem 2rem;

  &--likes {
    font-size: 1.4rem;
    font-weight: 600;
  }

  &--heading {
    font-size: 1.6rem;
    font-weight: 400;
  }

  &--description {
    font-size: 1.5rem;
  }
}
</style>