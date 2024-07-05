export const uploadToCloudnary = async (pics) => {
    if (pics) {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "twitter");
        data.append("cloud_name", "dgbp29tck");

        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/dgbp29tck/image/upload", {
                method: "POST",
                body: data
            });

            if (!res.ok) {
                throw new Error("Network response was not ok");
            }

            const fileData = await res.json();
            console.log("successfully from upload function", fileData);

            // Kiểm tra xem fileData.url có tồn tại và là một chuỗi không
            if (fileData.url) {
                return fileData.url.toString();
            } else {
                throw new Error("Invalid URL in response");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            throw error;
        }
    } else {
        console.log("Error: no file provided for upload");
        return null;
    }
};
