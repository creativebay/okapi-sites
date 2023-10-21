<?php
/**
 * Title: Video wrapper
 * Slug: video-wrapper
 */
?>

<!-- wp:group {"style":{"border":{"radius":"24px"},"color":{"background":"#eff6ff"},"spacing":{"blockGap":"0","padding":{"top":"var:preset|spacing|30","bottom":"var:preset|spacing|30","left":"var:preset|spacing|30","right":"var:preset|spacing|30"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group has-background"
    style="border-radius:24px;background-color:#eff6ff;padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)">
    <!-- wp:embed {"url":"https://vimeo.com/326720273","type":"video","providerNameSlug":"vimeo","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
    <figure
        class="wp-block-embed is-type-video is-provider-vimeo wp-block-embed-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio">
        <div class="wp-block-embed__wrapper">
            https://vimeo.com/326720273
        </div>
    </figure>
    <!-- /wp:embed -->
</div>
<!-- /wp:group -->