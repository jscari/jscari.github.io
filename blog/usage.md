Usage: ./bssg.sh [--config ] command [options]

Global Options:
  --config             Specify a custom configuration file. Overrides BSSG_LCONF
                             and the default config.sh.local.

Commands:
  post [-html] [draft_file]    Create a new post or continue editing a draft
                               Use -html to edit in HTML instead of Markdown
  page [-html] [draft_file]    Create a new page or continue editing a draft
                               Use -html to edit in HTML instead of Markdown
  edit [-n]         Edit an existing post
                               Use -n to give the post a new name if title changes
  delete [-f]       Delete a post
                               Use -f to skip confirmation
  list                         List all posts
  tags [-n]                    List all tags
                               Use -n to sort by number of posts
  drafts                       List all draft posts
  backup                       Create a backup of all posts, pages, drafts, and config
  restore [backup_file|ID]     Restore from a backup (all content by default)
                               Options: --no-content, --no-config
  backups                      List all available backups
  build [-f] [more...]         Build the site (use 'build --help' for all options)
  server [-h] [options]        Build & run local server (use 'server --help' for options)
                               Options: --port  (default from config: 8000)
                                        --host  (default from config: localhost)
  init       Initialize a new site in the specified directory
  help                         Show this help message