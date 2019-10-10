import newman from 'newman'

export function run (options) {
  return new Promise((resolve, reject) => {
    newman.run(options, (err, summary) => {
      if(err || summary.error){
        reject(err || summary.error)
      }else{
        resolve(summary)
      }
    })
  })
}