const data = {
  name: require('path').basename(__dirname).split('_').join(' '),
  folder_files_csv: require('fs').readdirSync(__dirname),
  creation_date: null,
  visible: false,
  github_repo: null,
  video_links: ['https://vimeo.com/120716577'],
}

const JSONdata = JSON.stringify(data)

export default JSONdata
