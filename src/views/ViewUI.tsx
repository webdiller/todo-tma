import React from "react"

type Props = {}

export const ViewUI = (props: Props) => {
  return (
    <div className="container">
      <div className="space-y-4 *:size-10">
        <div className="bg-accent_text_color border" />
        accent_text_color
        <div className="bg-bg_color border" />
        bg_color
        <div className="bg-button_color border" />
        button_color
        <div className="bg-button_text_color border" />
        button_text_color
        <div className="bg-bottom_bar_bg_color border" />
        bottom_bar_bg_color
        <div className="bg-destructive_text_color border" />
        destructive_text_color
        <div className="bg-header_bg_color border" />
        header_bg_color
        <div className="bg-hint_color border" />
        hint_color
        <div className="bg-link_color border" />
        link_color
        <div className="bg-secondary_bg_color border" />
        secondary_bg_color
        <div className="bg-section_bg_color border" />
        section_bg_color
        <div className="bg-section_header_text_color border" />
        section_header_text_color
        <div className="bg-subtitle_text_color border" />
        subtitle_text_color
        <div className="bg-text_color border" />
        text_color
      </div>
    </div>
  )
}
