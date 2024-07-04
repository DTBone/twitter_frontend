
const uploadToCloudnary = async (pics) => {

    if (pics) {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "twitter");
        data.append("cloud_name", "dgbp29tck");

        const res = await fetch()
    }
}