import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // Cloudinary URL for the video file
      required: true,
    },
    thumbnail: {
      type: String, // Cloudinary URL for the thumbnail image
      required: true,
    },
    thumbnail: {
      type: String, // Cloudinary URL for the thumbnail image
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    onwer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongoosePaginate);

export const Video = mongoose.model("Video", videoSchema);
