const contentstack = require("contentstack")
// export const ContentstackLivePreview = require("@contentstack/live-preview-utils");
// contentstack.Utils.addEditableTags()

const Stack = contentstack.Stack({
  api_key: process.env.REACT_APP_APIKEY,
  delivery_token: process.env.REACT_APP_DELIVERY_TOKEN,
  environment: process.env.REACT_APP_ENVIRONMENT,
  region: process.env.REACT_APP_REGION ? process.env.REACT_APP_REGION : "us",
  // branch: process.env.BRANCH ? process.env.BRANCH : 'production',
  // live_preview: {
  //   management_token: process.env.MANAGEMENT_TOKEN,
  //   enable: true, 
  //   host: "api.contentstack.io",
  // }
})

// Stack.setHost("api.contentstack.io")
// ContentstackLivePreview.init({enable: true, stackSdk: Stack, ssr:false});



export default {
  getEntryWithRef(ctUid, ref, locale) {
    return new Promise((resolve, reject) => {
      Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .includeReference(ref)
        .includeOwner()
        .toJSON()
        .find()
        .then(
          (result) => {
            resolve(result)
          },
          (error) => {
            reject(error)
          }
        )
    })
  },
  getEntry(ctUid, locale) {
    return new Promise((resolve, reject) => {
      Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .includeOwner()
        .toJSON()
        .find()
        .then(
          (result) => {
            resolve(result)
          },
          (error) => {
            reject(error)
          }
        )
    })
  },
  getSpecificEntry(ctUid, entryUrl, locale) {
    return new Promise((resolve, reject) => {
      const blogQuery = Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .includeOwner()
        .toJSON()
      const data = blogQuery.where("url", `${entryUrl}`).find()
      data.then(
        (result) => {
          resolve(result[0])
        },
        (error) => {
          reject(error)
        }
      )
    })
  },
  getSpecificEntryWihtRef(ctUid, entryUrl, ref, locale) {
    return new Promise((resolve, reject) => {
      const blogQuery = Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .includeReference(ref)
        .includeOwner()
        .toJSON()
      const data = blogQuery.where("url", `${entryUrl}`).find()
      data.then(
        (result) => {
          resolve(result[0])
        },
        (error) => {
          reject(error)
        }
      )
    })
  },
  getContentTypes() {
    return new Promise((resolve, reject) => {
    const contentTypes = Stack.getContentTypes({"include_global_field_schema": true})
    contentTypes
       .then(function(result) {
            resolve(result)      
       }, function(error) {
            reject(error)
       })
      })
  },
}
